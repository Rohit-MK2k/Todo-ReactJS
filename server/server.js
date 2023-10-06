const express = require('express')
const dotenv = require("dotenv")
const path = require('path')
const userRoutes = require('./Routes/userRoutes')
const userList = require('./Routes/listRoutes')
const connectDB = require('./Config/db')
const { errorHandler } = require('./Middlewares/errorMiddleware')

dotenv.config()
connectDB()

const app = express()
const port = process.env.PORT

app.use(express.json())

app.use("/api/user", userRoutes)
app.use("/api/todo", userList)


 





// --------------------------deployment------------------------------

const __dirname1 = path.resolve()

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname1, "/client/build")))
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname1,"client","build","index.html"))   
    })
} else {
    app.get("/", (req, res) => {
        res.send("API is running ")
    })
}


// --------------------------deployment------------------------------


app.use(errorHandler)
app.listen(port,console.log(`Server is running in port ${port}`))