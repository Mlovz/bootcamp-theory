const User = require("../models/userModel");
const bcrypt = require('bcrypt')

const register = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (user) {
      return res
        .status(400)
        .json({ message: "Пользователь с такой почтой уже существует." });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    

    const newUser = User.create({email: req.body.email, username: req.body.username, password: hashedPassword});

    return res
      .status(200)
      .json({ message: "Successfully created", user: newUser });
  } catch (err) {}
};

const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email })

    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(req.body.password, user.password);

    if (!isMatch)
      return res.status(404).json({ message: "Password incorrect" });

    res.json({ message: "Logged in successfully", user: {
      ...user._doc,
      password: ''
      
    } });
  } catch (err) {}
};

const forgotPassword = (req, res) => {
  console.log(" forgot password");
};

const logout = (req, res) => {
  console.log("logout");
};

module.exports = {
  register,
  login,
  forgotPassword,
  logout,
};
