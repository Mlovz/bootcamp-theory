import Product from "./componets/Product/Product";
import {Button} from 'antd'


function App() {
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 100,
      description: "Product 1 description",
    },
    {
      id: 2,
      name: "Product 1",
      price: 100,
      description: "Product 1 description",
    },
    {
      id: 3,
      name: "Product 1",
      price: 100,
      description: "Product 1 description",
    },
  ];

  return (
    <div className="App">
   {/* `   {users.length === 0 ? (
        <h1>Нет пользователей</h1>
      ) : (
        users.map((user, index) => (
          <div key={user}>
            <h1>{user.name}</h1>
            <span>{user.age}</span>
          </div>  
        ))
      )}` */}

      <Product products={products}/>
    </div>
  );
}

export default App;
