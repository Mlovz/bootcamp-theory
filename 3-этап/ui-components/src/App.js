import { useState } from "react";
import Avatar from "./components/Avatar/Avatar";
import Badge from "./components/Badge/Badge";
import Button from "./components/Button/Button";
import Checkbox from "./components/Checkbox/Checkbox";
import Chip from "./components/Chip/Chip";
import Input from "./components/Input/Input";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import RadioButton from "./components/RadioButton/RadioButton";
import Select from "./components/Select/Select";
import Slider from "./components/Slider/Slider";
import Switch from "./components/Switch/Switch";
import Textarea from "./components/Textarea/Textarea";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

function App() {
  // const [название переменной, setНазвание переменной] = useState(false)

  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="App">
      <button onClick={onOpen}>Войти</button>

      {isOpen && (
        <div className="overlay" onClick={onClose}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <RegisterForm />
            {/* <LoginForm /> */}
            <button className="close" onClick={onClose}>&times;</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
