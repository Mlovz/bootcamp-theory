import { useState } from "react";
import Todo from "./components/Todo/Todo";
import UserCard from "./components/UserCard/UserCard";

function App() {
  const [users, setUsers] = useState([])

  const getUsers = () => {
    const res = fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => setUsers(json))
  }

  
  return (
    <div>
      {/* <Todo/> */}
      <button onClick={getUsers}>Получить пользователей</button>

      {
        users.length === 0 
        ? <h1>Пока нет пользователей</h1> 
        : users.map((user) => 
          <UserCard user={user}/>
        )
      }

    </div>
  );
}

export default App;
