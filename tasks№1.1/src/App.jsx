import "./App.css"
import React, { useState } from "react"
import BusinessCard from "./components/BusinessCard/BusinessCard"
import UserProfile from "./components/UserProfile/UserProfile"
import Product from "./components/Product/Product"
import IconButton from "./components/IconButton/IconButton"
import NewsCard from "./components/NewsCard/NewsCard"
import MovieCard from "./components/MovieCard/MovieCard"
import LoginForm from "./components/LoginForm/LoginForm"
import ImageGallery from "./components/ImageGallery/ImageGallery"
import UserTable from "./components/UserTable/UserTable"
import BookPage from "./components/BookPage/BookPage"
import TaskList from "./components/TaskList/TaskList"
import ContactList from "./components/ContactList/ContactList"
import UserCard from "./components/UserCard/UserCard"
import ProductCard from "./components/ProductCard/ProductCard"
import ServiceList from "./components/ServiceList/ServiceList"
import MenuItem from "./components/MenuItem/MenuItem"
import CompanyProfile from "./components/CompanyProfile/CompanyProfile"
import Event from "./components/Event/Event"
import Testimonial from "./components/Testimonial/Testimonial"
import AppCard from "./components/AppCard/AppCard"
import FAQ from "./components/FAQ/FAQ"


function App() {
    let arrImage = [
        "https://yastatic.net/naydex/yandex-search/1oavI0066/87d05bd_8uQb/QCPcrJf965QCYQ-4GxXBr3UhT1aNaw-wVBWMbbS8wRwoUiCrLDIpROnHCQ--LJ7CiiLNIq6h1AGhkvCmDkKVPiEGWNg2XQuQFuRKvd4ABR7AhGrC7S7vUED0XQig2QRoOacwakyi7PSZcW_IKSu4QEkwGmVZ0BREMcLkJ2ojpoig",
        "https://yastatic.net/naydex/yandex-search/1oavI0066/87d05bd_8uQb/QCPcrJf965QCYQ-4GxXBr3UhT1aNaw-wVBWMbbS8wRwoUiCrLDIpROnHCQ--LJ7CiiLNIq6h1AGhkvCmDkKVPiEGWNg2XQuQFuRKvd4ABR7AhGrC7S7vUED0XQig2QRoOacwakyi7PSZcW_IKSu4QEkwGmVZ0BREMcLkJ2ojpoig",
        "https://yastatic.net/naydex/yandex-search/1oavI0066/87d05bd_8uQb/QCPcrJf965QCYQ-4GxXBr3UhT1aNaw-wVBWMbbS8wRwoUiCrLDIpROnHCQ--LJ7CiiLNIq6h1AGhkvCmDkKVPiEGWNg2XQuQFuRKvd4ABR7AhGrC7S7vUED0XQig2QRoOacwakyi7PSZcW_IKSu4QEkwGmVZ0BREMcLkJ2ojpoig",
        "https://yastatic.net/naydex/yandex-search/1oavI0066/87d05bd_8uQb/QCPcrJf965QCYQ-4GxXBr3UhT1aNaw-wVBWMbbS8wRwoUiCrLDIpROnHCQ--LJ7CiiLNIq6h1AGhkvCmDkKVPiEGWNg2XQuQFuRKvd4ABR7AhGrC7S7vUED0XQig2QRoOacwakyi7PSZcW_IKSu4QEkwGmVZ0BREMcLkJ2ojpoig",
        "https://yastatic.net/naydex/yandex-search/1oavI0066/87d05bd_8uQb/QCPcrJf965QCYQ-4GxXBr3UhT1aNaw-wVBWMbbS8wRwoUiCrLDIpROnHCQ--LJ7CiiLNIq6h1AGhkvCmDkKVPiEGWNg2XQuQFuRKvd4ABR7AhGrC7S7vUED0XQig2QRoOacwakyi7PSZcW_IKSu4QEkwGmVZ0BREMcLkJ2ojpoig",
        "https://yastatic.net/naydex/yandex-search/1oavI0066/87d05bd_8uQb/QCPcrJf965QCYQ-4GxXBr3UhT1aNaw-wVBWMbbS8wRwoUiCrLDIpROnHCQ--LJ7CiiLNIq6h1AGhkvCmDkKVPiEGWNg2XQuQFuRKvd4ABR7AhGrC7S7vUED0XQig2QRoOacwakyi7PSZcW_IKSu4QEkwGmVZ0BREMcLkJ2ojpoig",
    ]
    let arrObj = [
        {
            id: 1,
            name: "name1",
            email: "email1",
        },
        {
            id: 2,
            name: "name2",
            email: "email2",
        },
        {
            id: 3,
            name: "name3",
            email: "email3",
        },

    ]
    let arrTasks = [
        {
            title:"Сделать  ДЗ",
            completed:false,
        },
        {
            title:"Сделать  ДЗ",
            completed:true,
        },
        {
            title:"Сделать  ДЗ",
            completed:false,
        },
    ]
    let arrContacts = [
        {
            name:"name1",
            number: 12345678,
        },
        {
            name:"name2",
            number: 122345678,
        },
        {
            name:"name3",
            number: 123345678,
        },
    ]
    let arrServices = [
        {
            name:"Service1",
            description: "description1",
        },
        {
            name:"Service2",
            description: "description2",
        },
        {
            name:"Service3",
            description: "description3",
        },
       
    ]
    let arrQuestion = [
        {
            question: "question1",
            answer: "answer1",
        },
        {
            question: "question2",
            answer: "answer2",
        },
        {
            question: "question3",
            answer: "answer3",
        },
    ]
    return (
        <div className="container">
        <BusinessCard name="John Doe" jobTitle="Developer" company="speedCompany" />
        <UserProfile firstName="Salahuddin" lastName="Azhigov" age="15" bio="male" />
        <Product name="Lorem"  price="10000$"  description="LoremIpsum"/>
        <IconButton icon="https://yastatic.net/naydex/yandex-search/1oavI0066/87d05bd_8uQb/QCPcrJf965QCYQ-4GxXBr3UhT1aNaw-wVBX5yBSskTwIoqU-LGccEZxX2V9uPIuHzze4Iq5h1DGUx6CGnlewTgQ27e32eB5QM7RKvf5AhW6QhHrC7S7vUED0XQig2QRoOacwakyi7PSZcW_IKSu4QEkwGmVZ0BREMcLkJ2ojpoig" label="Картинка"/>
        <NewsCard title="News" author="John" date="10.11.2000" content="ТекстТекстТекстТекстТекстТекстТекстТекст"/>
        <MovieCard posterUrl="https://avatars.mds.yandex.net/i?id=f9670824b90c7f88110b1837e9d5c3ab52c56ea3-10749046-images-thumbs&n=13" year='2000' director="Horor" title="Joker" />
        <LoginForm />
        <ImageGallery images={arrImage} />
        <UserTable arr={arrObj} />
        <BookPage title="Книга" author="Пушкин" pages={100} summary="10" />
        <TaskList arr={arrTasks} />
        <ContactList arr={arrContacts} />
        <UserCard avatarUrl="https://yastatic.net/naydex/yandex-search/ro8aI7v78/87d05bd_8uQb/QCPcrJf965QCYQ-4GxXBr3UhT1aNaw-wVBWZzST5tHyYR3Wu3EI8EaxivB97XKvXyieoIu4E4RSEhmD2rpfgPkRHHR1zDUuEAlHfKauFsR_10c8XzRsqNSIzflozqia6L1VSKaiCGcHMExjbGmpoQ" name="John" email="John1945@mail.ru" />
        <ProductCard imageUrl="https://yastatic.net/naydex/yandex-search/ro9aI3v94/87d05bd_8uQb/QCPcrJf965QCYQ-4GxXBr3UhT1aNaw-wVBUMCGTslGlY4mCOGTJMsawS_FpbfM7Xj2LNYk509DTE8vDm_nfw63RXGBi2GB7gU8RPOCtF4HqhEF6TLS7eFHHQXU2RbAFcPjTSqVsx-9Ku0O6o2qmLUvpDDPbqYneg" name="Хлеб" price="$1" rating="4.5"/>
        <ServiceList arr={arrServices} />
        <MenuItem name="Имя" price="$20" description="Описание"/>
        <CompanyProfile name="compotnica" industry="Varka" location="Страна Компотная г. Компотный ул. Компотная" description="Varim Compoti" />
        <Event title="Event" date="20.02.2008" location="Earth" />
        <Testimonial name="Name" feedack="feedback"  date="20.20.02" />
        <AppCard appName="TUrgo" developer="I am" downloads="100K"  iconUrl="https://yastatic.net/naydex/yandex-search/ro9aI3v94/87d05bd_8uQb/QCPcrJf965QCYQ-4GxXBr3UhT1aNaw-wVBDsXTG8USwopxXbLHIcNPlCrBpuqYuHL4fYcot0ATT056C2CzLFHkT3GMj2aF7gc-RPOCtF4HqhEF6TLS7eFHHQXU2RbAFcPjTSqVsx-9Ku0O6o2qmLUvpDDPbqYneg" />
        <FAQ arr={arrQuestion} />
        </div>
    )
}   

export default App


/* 
// Простая визитка: 
// Создайте компонент BusinessCard, который принимает пропсы name, jobTitle, и company и отображает их в виде визитки.

// Профиль пользователя: 
// Создайте компонент UserProfile, который принимает пропсы firstName, lastName, age, и bio. Отобразите информацию о пользователе в формате профиля.

// Список товаров: 
// Создайте компонент Product, который принимает пропсы name, price, и description. Затем создайте компонент ProductList, который принимает массив объектов продуктов и рендерит список Product.

// Кнопка с иконкой: 
// Создайте компонент IconButton, который принимает пропсы icon и label. Кнопка должна отображать иконку (например, эмодзи) и текст.

// Карточка новости: 
// Создайте компонент NewsCard, который принимает пропсы title, author, date, и content. Отобразите новость в формате карточки.

// Карточка фильма: 
// Создайте компонент MovieCard, который принимает пропсы ешеду, director, year, и posterUrl. Отобразите информацию о фильме вместе с изображением постера.

// Галерея изображений: 
// Создайте компонент ImageGallery, который принимает пропс images — массив URL изображений, и отображает их в виде галереи.

// Таблица пользователей: 
// Создайте компонент UserTable, который принимает массив объектов пользователей с полями id, name, и email. Отобразите пользователей в таблице.

// Страница книги: 
// Создайте компонент BookPage, который принимает пропсы title, author, pages, и summary. Отобразите информацию о книге в формате страницы.

// Список задач: 
// Создайте компонент TaskList, который принимает массив задач с полями title и completed. Отобразите список задач с отметкой выполнены они или нет.

// Список контактов: 
// Создайте компонент ContactList, который принимает массив объектов с именем и номером телефона. Отобразите список контактов.

// Карточка пользователя с аватаром: 
// Создайте компонент UserCard, который принимает пропсы name, email, и avatarUrl. Отобразите карточку пользователя с аватаром.

// Карточка товара с рейтингом: 
// Создайте компонент ProductCard, который принимает name, price, rating, и imageUrl. Отобразите товар с изображением и звездным рейтингом.

// Список услуг: 
// Создайте компонент ServiceList, который принимает массив услуг с полями name и description. Отобразите список услуг.

// Меню ресторана: 
// Создайте компонент MenuItem, который принимает пропсы name, price, и description. Создайте компонент Menu, который принимает массив элементов меню и отображает их.

// Профиль компании: 
// Создайте компонент CompanyProfile, который принимает пропсы name, industry, location, и description. Отобразите информацию о компании.

// Календарь событий: 
// Создайте компонент Event, который принимает title, date, и location. Создайте компонент EventList, который принимает массив событий и отображает их.

// Отзывы клиентов: 
// Создайте компонент Testimonial, который принимает пропсы name, feedback, и date. Создайте компонент TestimonialsList, который отображает список отзывов.

// Карточка приложения: 
// Создайте компонент AppCard, который принимает пропсы appName, developer, downloads, и iconUrl. Отобразите информацию об приложении.

// Список вопросов и ответов: 
// Создайте компонент FAQ, который принимает массив объектов с полями question и answer, и отображает вопросы с ответами. */