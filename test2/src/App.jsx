import AppC from "./App.module.css"
import React, { useState } from "react"
import UserProfile1 from "./components/UserProfile/UserProfile"
import Button from "./components/Button/Button"
import ProductCard from "./components/ProductCard/ProductCard"
import Header from "./components/Header/Header"
import WeatherInfo from "./components/WeatherInfo/WeatherInfo"
import ReviewCard from "./components/ReviewCard/ReviewCard"
import Logo from "./components/Logo/Logo"
import Counter1 from "./components/Counter/Counter"
import InfoBlock from "./components/InfoBlock/InfoBlock"
import TextBlock from "./components/TextBlock/TextBlock"

function App() {
    const alertInClick = () => {
        alert('asdasd')
    }
    let [count, setCount] = useState(0)
    function setCountt() {
        setCount(count++)
    }
    return (
        <>
        <UserProfile1 name="Name" age="Age" URL="https://avatars.mds.yandex.net/i?id=84987cede98c0787967f9e26400efc4363b2b199-10604114-images-thumbs&n=13"/>
        <Button text="ButtonText" click={alertInClick}/>
        <ProductCard info="Пульт покупай отдельно." title="Ядерка" URL="https://yastatic.net/naydex/yandex-search/YaY9G3g48/8adcb4whCZ/7wXFGmQO7Y0hSCFJ_zi2_xMG2uzeolC6ypKU2mLE7-ZbUXbaRZhxqOuU2QbBVnoPY_ro4IQ6HHlK5GuU844JwP1ViVYiRfLZcg04Hfc7s_0OW5n9wvhU59DQyNZznbboXFUetDS8VpGd9alysC4wVjymv_qafQpAJA"/>
        <Header h1="Заголовок"/>
        <WeatherInfo temp="37 °С" data="Жарко" city="Назрань"/>
        <ReviewCard userNames="User" reviewText="хороший товар" rating={4}/>
        <Logo width="200px" height="200px" URL="https://avatars.mds.yandex.net/i?id=8e7508b157b1e18014c66010cc60140632b8abd2-8320910-images-thumbs&n=13"/>
        <Counter1 Firstcount={setCountt} countt={count}/>
        <InfoBlock  title="Заголовок" text="fdifjijfjeifjiefjifjfjeifjfiejjjjjjj" URL="https://yastatic.net/naydex/yandex-search/dXpWy8407/2f4089npQBq-/rF0BJTGnG91SkR3VIIhKUyaYL4PXLpzCpagRlCttnXC3P3aJNysz3RPulx74gARcaLGGFmhI8V4p_UktfaUL_q0JxREAUq7JAxW5FVAYC6eXTK-Hpuu8c9QdJAA7nS21txmVLqVpBSr1TDBpH1SB3JiUx6e8fMeok"/>
        <TextBlock color="#c55959" text="заголовок"/>
        </>
    )
}   

export default App