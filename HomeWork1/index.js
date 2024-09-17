const express = require("express")
const cors = require("cors")



const app = express()

app.use(express.json())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}))
// №1
app.get("/welcome", (req, res) => {
    return res.json({
        msg: "Добро пожаловать на наш сервер!"
    })
})
// №2
app.get("/hello/:name", (req, res) => {
    const name = req.params.name
    return res.json({
        msg: `Привет ${name}`
    })
})
// №3
app.get("/search", (req, res) => {
    const term = req.query.term
    const page = req.query.page
    return res.json({
        msg: `Привет ${term}, ${`Привет ${page}`}`
        
    })
})
// №4
app.post("/items", (req, res) => {
    let nameProduct = req.body.nameProduct
    let priceProduct = req.body.priceProduct
    return res.json({
        msg: "Продукт создан",
        name: nameProduct,
        price: priceProduct,
    })
})
// №5
const products = [
    {
      id: 1,
      nameProduct: "Название Продукта",
      priceProduct: "100$",
    },
    {
      id: 2,
      nameProduct: "Название Продукта",
      priceProduct: "100$",
    },
  ]
app.patch("/items/:id", (req, res) => {
    const { id } = req.params

    const newProducts = products.map((item) => {
        if(item.id === Number(id)) {
            return {...item, nameProduct: req.body.nameProduct, priceProduct: req.body.priceProduct}
        }
        return item
    })

    return res.json({ message: 'Товар обновлен', newProducts })
})
// №6
app.delete("/items/:id", (req, res) => {
    const { id } = req.params

    const newProducts = products.filter((item) => item.id !== Number(id))

    return res.json({ message: 'Элемент удален', newProducts })
})
// №7
app.get("/users/:userId/posts/:postId", (req, res) => {
    const userId = req.params.userId
    const postId = req.params.postId
    const post = {
        userId: userId,
        postId:postId,
    }
    return res.json({
        msg: "Пост",  post
    })
})
// №8
const products1 = [
    {
        name: "name1",
        price: "price1",
    },
    {
        name: "name2",
        price: "price2",
    },
]
app.get("/products", (req, res) => {

    return res.json({
        msg: "Товары",  products1
    })
})
// №9
app.get("/products/:id", (req, res) => {
    let item = products1[Number(req.params.id)]
    return res.json({
        msg: "Товары",  item
    })
})
// №10
app.get("/count", (req, res) => {
    let count = products1.length
    return res.json({
        msg: "Товары",  count
    })
})

app.listen("5501", () => {
    console.log("Запущен порт 5501");
})