const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}))

app.use(express.json())

app.get('/users', (req, res) => {
    const users = [
        {
            username: 'Test',
            age: 21     
        },
        {
            username: 'Test1',
            age: 22
        },
        {
            username: 'Test2',
            age: 23
        },
        {
            username: 'Test3',
            age: 24
        },

    ]
    return res.json({
        users
    })
})

app.get('/user/1', (res, req) => {
    console.log('получили одного пользователя');
})


app.listen(5500, () => {
    console.log('Сервер запущен на порте 5500');
})