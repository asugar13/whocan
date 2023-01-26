const express = require("express")
const fetch = require('node-fetch');
const router = express.Router()
// const helpers = require("../helpers/main")
const User = require("../db/users/collection")

router.get("/", async (req, res, next) => {
  try {
    const mierda = await User.create({ email: 'vamos' })

    const users = await User.find({})
    console.log(users);
    const response = 'vamos'
    console.log('si joder')
    return res.json(response)
  } catch (error) {
    console.log(error)
    return res.status(400).json({ message: "Error!" })
  }
})

router.post("/signup", async (req, res, next) => {
  try {
    console.log(req.body)
    console.log('keloke');
    // const mierda = await User.create({ email: 'vamos' })

    // const users = await User.find({})
    // console.log(users);
    // const response = 'vamos'
    // console.log('si joder')
    // return res.json(response)
  } catch (error) {
    console.log(error)
    return res.status(400).json({ message: "Error!" })
  }
})


module.exports = router