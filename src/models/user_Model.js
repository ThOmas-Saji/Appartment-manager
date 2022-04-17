const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    gender: { type: String,  required:false, default: "male" },
    age: { type: Number, required: true },
    user_type: { type: String, required:false, default: "tenant" },
    email: { type: String, required: true, unique:true },
    password: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const User = mongoose.model("user", userSchema);

module.exports = User;
