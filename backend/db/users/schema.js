const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const _ = require("underscore")

// Mongoose Schema for Users
const UserSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: () => new Date(),
  },
  email: String,
  password: String,
  username: String,
  memo: String,
  country: String
}, { timestamps: true })

UserSchema.methods = {
  checkPassword(inputPassword) {
    return bcrypt.compareSync(inputPassword, this.password)
  },
  hashPassword: (plainTextPassword) => bcrypt.hashSync(plainTextPassword, 10),
}

// Define pre-hooks for the save method
// UserSchema.pre("save", function (next) {
//   if (!this.password) {
//     next()
//   } else {
//     this.password = this.hashPassword(this.password)
//     next()
//   }
// })

module.exports = {
  UserSchema,
}
