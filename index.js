import express from "express"
import http from "http"
import mongoose from "mongoose"

import galleryRouter from "./routes/gallery.js"
import config from "./config.js"

const app = express()
const server = http.createServer(app)

app.use(express.json())
app.use(express.urlencoded({extended: true}))

try {
  mongoose.connect(config.mongoUrl)
  console.log("Connected to MongoDB")
} catch(e){
  console.error(e)
}

app.get('/', (req, res) =>{
  res.status(200).json({message: "Server status is OK"})
})

app.use("/gallery", galleryRouter)
server.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`)
})
