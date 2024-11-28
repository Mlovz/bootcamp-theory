import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Button from "./components/Button/Button";



function App({data}) {
  const [count, setCount] = useState(0)
  const buttonRef = useRef()


  const selectedUsers = useMemo(() => {
    return data.filter((user) => user.age > 10)
  },[data])

  
  console.log(selectedUsers);
  

  const onCount = () => {
    setCount(count + 1)
  }

  const newOnClick = useCallback(() => {
  },[])

  return (
    <div className="App">
      <button  onClick={onCount}>Click</button>
      
      <Button ref={buttonRef} onClick={newOnClick}>adsads</Button>
    </div>
  );
}

export default App;
