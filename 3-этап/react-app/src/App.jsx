import Button from "./components/Button/Button";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ProductCard from "./components/ProductCard/ProductCard";

const products = [
  {
    name: "Phone",
    desc: "используемый в печати и вэб-дизайне",
    url: "https://avatars.mds.yandex.net/i?id=a29b5927c8d63f30f8a06566fd438700_l-5661150-images-thumbs&n=27&h=480&w=480",
  },
  {
    name: "Авто",
    desc: "Давно выяснено, что при оценке дизайна",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWestySFdjEYa_HB1RMZVgx07ds7WXNUpLaQ&s",
  },
  {
    name: "Кошка",
    desc: "используемый в печати и вэб-дизайне",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdQAu6jZFecB3SP0jFSam-xsp860urXVnS9RSdpieI9VkV1j-sw2chVA7clZIYUS9_kUM&usqp=CAU",
  },
  {
    name: "Phone",
    desc: "используемый в печати и вэб-дизайне",
    url: "https://avatars.mds.yandex.net/i?id=a29b5927c8d63f30f8a06566fd438700_l-5661150-images-thumbs&n=27&h=480&w=480",
  },
  {
    name: "Авто",
    desc: "Давно выяснено, что при оценке дизайна",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWestySFdjEYa_HB1RMZVgx07ds7WXNUpLaQ&s",
  },
  {
    name: "Кошка",
    desc: "используемый в печати и вэб-дизайне",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdQAu6jZFecB3SP0jFSam-xsp860urXVnS9RSdpieI9VkV1j-sw2chVA7clZIYUS9_kUM&usqp=CAU",
  },
  {
    name: "Phone",
    desc: "используемый в печати и вэб-дизайне",
    url: "https://avatars.mds.yandex.net/i?id=a29b5927c8d63f30f8a06566fd438700_l-5661150-images-thumbs&n=27&h=480&w=480",
  },
  {
    name: "Авто",
    desc: "Давно выяснено, что при оценке дизайна",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWestySFdjEYa_HB1RMZVgx07ds7WXNUpLaQ&s",
  },
  {
    name: "Кошка",
    desc: "используемый в печати и вэб-дизайне",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdQAu6jZFecB3SP0jFSam-xsp860urXVnS9RSdpieI9VkV1j-sw2chVA7clZIYUS9_kUM&usqp=CAU",
  },
  {
    name: "Phone",
    desc: "используемый в печати и вэб-дизайне",
    url: "https://avatars.mds.yandex.net/i?id=a29b5927c8d63f30f8a06566fd438700_l-5661150-images-thumbs&n=27&h=480&w=480",
  },
  {
    name: "Авто",
    desc: "Давно выяснено, что при оценке дизайна",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWestySFdjEYa_HB1RMZVgx07ds7WXNUpLaQ&s",
  },
  {
    name: "Кошка",
    desc: "используемый в печати и вэб-дизайне",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdQAu6jZFecB3SP0jFSam-xsp860urXVnS9RSdpieI9VkV1j-sw2chVA7clZIYUS9_kUM&usqp=CAU",
  },

];

function App() {
  const newClick = () => {
    alert("Click");
  };

  const itemClick = () => {
    prompt("asdasdasdasdasdasdasdasdasdasd");
  };

  return (
    <div>
      {/* <Button text='click' variant='primary'  click={itemClick} />
      <Button text='clicadasdk' variant='danger' click={newClick}/> */}

      {/* <div onClick={newClick}>item1</div> */}
{/* 
      <div className="row">
        {products.map((product) => {
          return (
            <ProductCard
              productName={product.name}
              productDesc={product.desc}
              productUrl={product.url}
            />
          );
        })}
      </div> */}
    </div>
  );
}

export default App;
