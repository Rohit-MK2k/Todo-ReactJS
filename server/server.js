const express = require('express')
const dotenv = require("dotenv")
const cookieParser = require("cookie-parser")
const path = require('path')
const userRoutes = require('./Routes/userRoutes')
const userList = require('./Routes/listRoutes')
const bodyParser = require('body-parser')
const { errorHandler } = require('./Middlewares/errorMiddleware')
const { protect } = require('./Middlewares/authMiddleware')
const connectDB = require('./Config/db')

dotenv.config()
const port = process.env.PORT
connectDB()

const app = express()

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

app.use("/api/user", userRoutes)
app.use("/api/todo",protect, userList)



// --------------------------deployment------------------------------

// const __dirname1 = path.resolve()
const __dirname1 = 'https://todo-react-js-beryl.vercel.app/'

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname1, "/dist")))
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname1,"dist","index.html"))   
    })
} else {
    app.get("/", (req, res) => {
        res.send("API is running ")
    })
}


// --------------------------deployment------------------------------


app.use(errorHandler)
app.listen(port,console.log(`Server is running in port ${port}`))
