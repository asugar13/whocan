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
  roles: [String],
  profile: {
    firstName: {
      type: String,
      required: false,
    },
    lastName: {
      type: String,
      required: false,
    },
    companyName: {
      type: String,
      required: false,
    },
    about: {
      type: String,
      required: false,
    },
  },
  membership: mongoose.Schema.Types.Mixed,
  followees: [mongoose.Types.ObjectId],
  contributionCount: {
    type: Number,
    default: 0,
  },
  pinCount: Number,
  commentsCount: { type: Number, default: 0 }
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
