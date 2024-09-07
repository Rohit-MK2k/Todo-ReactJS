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
const cors = require('cors')


dotenv.config()
const port = process.env.PORT

let corsOptions = {
    origin : [process.env.NODE_ENV === 'production' ? process.env.CLENT_URL :  'http://localhost:3000']
}



connectDB()

const app = express()

app.use(cors(corsOptions))
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

app.use("/api/user", userRoutes)
app.use("/api/todo",protect, userList)



// --------------------------deployment------------------------------

app.get("/", (req, res) => {
    res.send("API is running ")
})
// --------------------------deployment------------------------------


app.use(errorHandler)
app.listen(port,console.log(`Server is running in port ${port}`))
