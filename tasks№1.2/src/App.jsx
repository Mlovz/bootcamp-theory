import React, { useState } from "react"
import "./App.css"
import Avatar from "./components/avatar/avatar"
import ClickCounter from "./components/ClickCounter/ClickCounter"
import LightSwitch from "./components/LightSwitch/LightSwitch"
import FeedbackInput from "./components/FeedbackInput/FeedbackInput"
import ColorChanger from "./components/ColorChanger/ColorChanger"
import CountdownTimer from "./components/CountdownTimer/CountdownTimer"
import ToggleText from "./components/ToggleText/ToggleText"
import TaskManager from "./components/TaskManager/TaskManager"
import LikeButton from "./components/LikeButton/LikeButton"
import Tabs from "./components/Tabs/Tabs"
import SimpleCalculator from "./components/SimpleCalculator/SimpleCalculator"
import ShoppingList from "./components/ShoppingList/ShoppingList"
import Notification from "./components/Notification/Notification"
import ImageSlider from "./components/ImageSlider/ImageSlider"
import FAQ from "./components/FAQ/FAQ"
import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher"
import SubscriptionList from "./components/SubscriptionList/SubscriptionList"
import SearchBar from "./components/SearchBar/SearchBar"
import DateTimeDisplay from "./components/DateTimeDisplay/DateTimeDisplay"
import TipCalculator from "./components/TipCalculator/TipCalculator"


function App() {
    return (
        <div className="container">
            {/* <Avatar className="avatar" size="small" ALT="аватарка" URL="https://yastatic.net/naydex/yandex-search/sUsyH9350/835316C6w/XvWmwys1vmXHJWzjwgtllHIO7m39noeFoxyb7RJbkAVYtCGocNLAgXehXreJ_-VTjB0jNw69Z4oy1EMK9r0W2TvpupYaHKI4rnh0mpIraYB6e5thue_vlNd1kp0zU5wpeLV4CdBPDATqQMoadBYIcsl4bkN3gT6PmjA"/>
            <Avatar className="avatar" size="medium" ALT="аватарка" URL="https://yastatic.net/naydex/yandex-search/sUsyH9350/835316C6w/XvWmwys1vmXHJWzjwgtllHIO7m39noeFoxyb7RJbkAVYtCGocNLAgXehXreJ_-VTjB0jNw69Z4oy1EMK9r0W2TvpupYaHKI4rnh0mpIraYB6e5thue_vlNd1kp0zU5wpeLV4CdBPDATqQMoadBYIcsl4bkN3gT6PmjA"/>
            <Avatar className="avatar" size="large" ALT="аватарка" URL="https://yastatic.net/naydex/yandex-search/sUsyH9350/835316C6w/XvWmwys1vmXHJWzjwgtllHIO7m39noeFoxyb7RJbkAVYtCGocNLAgXehXreJ_-VTjB0jNw69Z4oy1EMK9r0W2TvpupYaHKI4rnh0mpIraYB6e5thue_vlNd1kp0zU5wpeLV4CdBPDATqQMoadBYIcsl4bkN3gT6PmjA"/> */}
            <ClickCounter />
            <LightSwitch />
            <FeedbackInput />
            <ColorChanger />
            <CountdownTimer />
            <ToggleText />
            <TaskManager />
            <LikeButton />
            <Tabs />
            <SimpleCalculator />
            <ShoppingList />
            <Notification />
            <ImageSlider />
            <FAQ />
            <ThemeSwitcher />
            <SubscriptionList />
            <SearchBar />
            <DateTimeDisplay />
            <TipCalculator/>
        </div>
    )
}   

export default App

// 1. Счетчик кликов: 
// Создайте компонент ClickCounter, который отображает кнопку и показывает количество нажатий на эту кнопку с использованием useState.

// 2. Переключатель света: 
// Создайте компонент LightSwitch, который изменяет состояние света (on или off) при нажатии кнопки.

// 3. Текстовое поле с обратной связью: 
// Создайте компонент FeedbackInput, который отображает текст, введенный пользователем в поле ввода, и обновляет его в реальном времени с помощью useState.

// 4. Смена цвета фона: 
// Создайте компонент ColorChanger, который имеет кнопку для смены цвета фона контейнера между несколькими предустановленными цветами с использованием useState.

// 5. Таймер обратного отсчета: 
// Создайте компонент CountdownTimer, который отображает таймер, уменьшающийся при нажатии кнопки "Старт". Используйте useState для управления временем.

// 6. Переключение видимости текста: 
// Создайте компонент ToggleText, который отображает или скрывает текст по нажатию кнопки.

// 7. Форма для добавления задач: 
// Создайте компонент TaskManager, который позволяет добавлять задачи в список. Используйте useState для хранения списка задач.

// 8. Счетчик лайков: 
// Создайте компонент LikeButton, который увеличивает количество лайков при нажатии на кнопку "Лайк".

// 9. Управление вкладками: 
// Создайте компонент Tabs, который отображает различные секции контента при переключении между вкладками. Используйте useState для управления активной вкладкой.

// 10. Калькулятор простых операций: 
// Создайте компонент SimpleCalculator, который принимает два числа и операцию (+, -, *, /), и выводит результат. Управляйте состоянием ввода и результата с useState.

// 11. Контролируемый список покупок: 
// Создайте компонент ShoppingList, который позволяет добавлять и удалять элементы списка покупок с использованием useState.

// 12. Показ уведомлений: 
// Создайте компонент Notification, который отображает уведомление при нажатии на кнопку и скрывает его через несколько секунд.

// 13. Переходы между изображениями: 
// Создайте компонент ImageSlider, который переключает изображения в слайдере с помощью кнопок "вперед" и "назад", используя useState.

// 14. Вопросы и ответы: 
// Создайте компонент FAQ, который раскрывает или скрывает ответы на вопросы по нажатию на них. Управляйте раскрытием с помощью useState.

// 15. Смена темы приложения: 
// Создайте компонент ThemeSwitcher, который меняет тему (светлая/темная) по нажатию кнопки и отображает соответствующий стиль.

// 16. Управление списком подписок: 
// Создайте компонент SubscriptionList, который позволяет добавлять и удалять подписки из списка. Используйте useState для хранения списка.

// 17. Панель поиска с автозаполнением: 
// Создайте компонент SearchBar, который обновляет список предложений на основе ввода пользователя.

// 18. Текущая дата и время: 
// Создайте компонент DateTimeDisplay, который обновляет текущее время при нажатии на кнопку "Обновить".

// 19. Простая форма авторизации: 
// Создайте компонент LoginForm, который контролирует ввод имени пользователя и пароля и выводит сообщение при нажатии на кнопку "Войти".

// 20. Калькулятор чаевых: 
// Создайте компонент TipCalculator, который принимает сумму счета и процент чаевых, и вычисляет общую сумму. Управляйте состоянием с useState.