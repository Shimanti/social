const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const helmet = require("helmet")
const morgan = require("morgan")
const userRoute = require("./routes/users")
const authRoute = require("./routes/auth")
const postRoute = require("./routes/posts")
const app = express()
const PORT = 8800

dotenv.config()

//db connection
mongoose.connect(
  process.env.Mongo_URL,
  { useNewUrlParser: true,  useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB")
  })

//middleware
app.use(express.json())
app.use(helmet())
app.use(morgan("common"))

//routes
app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)
app.use("/api/posts", postRoute)

// run server
app.listen(process.env.PORT || PORT, (req, res)=> {
  console.log("Backend server is running!")
})
