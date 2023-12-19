const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "username is required"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: tue,
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    payment:{
      type: String,
      default: "",
    },
    slot:{
      type: String,
      default: "",
    },
    age:{
      type: String,
      required: [true, "age is required"],
    },
  },
  { timestamps: true }
);

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
