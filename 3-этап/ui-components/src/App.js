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

function App() {

  return (
    <div className="App">
      <Button variant="primary" disabled>Войти</Button>
      <Input placeholder='Add text...' />
      <Checkbox label='Test'/>

      <Textarea/>
      <RadioButton/>

      <Select options={[
        {value: 'Option 1', label: 'Option 1'},
        {value: 'Option 2', label: 'Option 2'},
        {value: 'Option 3', label: 'Option 3'},
        {value: 'Option 4', label: 'Option 4'},
        {value: 'Option 5', label: 'Option 5'},
      ]}/>

      <Switch/>

      <Slider/>
      <ProgressBar progress={20}/>

      <Badge text='Test' variant="success"/>
      
      <Avatar  src='https://www.webiconio.com/_upload/255/image_255.svg'/>
      
      <Chip label='warning'/>
    </div>
  );
}

export default App;
