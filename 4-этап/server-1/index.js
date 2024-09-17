const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');

const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}))

app.use(express.json())

app.use('/api', authRoutes)

mongoose.connect(process.env.MONGO_URL, {}).then(() => {
    console.log('Успешное подключение к базе данных!');
})

app.listen(5500, () => {
    console.log('Сервер запущен на порте 5500');
})