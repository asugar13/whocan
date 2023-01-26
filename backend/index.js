const express = require("express")
const mongoose = require("mongoose")

const app = express()
const http = require("http").Server(app)
// CONFIGURATION
const config = require("./config.js")

app.use(express.json())

// Headers for bypassing CORS policy and allowing communications between domains
app.use((req, res, next) => {
  // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  // res.header("Access-Control-Allow-Credentials", "true")
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header("Access-Control-Allow-Origin", "*")
  next()
})

http.listen(3002, function () {
  console.log({ message: `Backend listening on port 3002` })
})

// ROUTERS
const mainRouter = require("./routes/main")

const start = async () => {
  try {
    // DATABASE CONNECTION
    mongoose.connect(config.mongo.uri, {
      useNewUrlParser: true,
      poolSize: 10, // Maintain up to 10 socket connections
      useUnifiedTopology: true,
      useFindAndModify: false,
    })

    // When successfully connected
    mongoose.connection.on("connected", async () => {
      const db = mongoose.connection

      db.once("open", () => {
        app.use("/", mainRouter);
      })

      // Mongoose Connection Error
      db.on("error", (err) => {
        app.use("/", mainRouter);

        console.log({ message: "MongoDb connection has died. We did everything we could", data: err })
      })
    })

    mongoose.connection.on("error", (err) => {
      app.use("/", mainRouter);
      console.error({ message: "MongoDB is not ready for a serious relationship", data: err })
    })




  } catch (error) {
    console.log({ message: error.message, data: error })
  }
}

start()
