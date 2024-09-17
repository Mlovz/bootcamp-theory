const User = require("../models/userModel");

const register = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (user) {
      return res
        .status(400)
        .json({ message: "Пользователь с такой почтой уже существует." });
    }

    const newUser = User.create(req.body);

    return res
      .status(200)
      .json({ message: "Successfully created", user: newUser });
  } catch (err) {}
};

const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) return res.status(404).json({ message: "User not found" });

    if (user.password !== req.body.password)
      return res.status(404).json({ message: "Password incorrect" });


    res.json({ message: "Logged in successfully", user });
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
