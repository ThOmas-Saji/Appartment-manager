const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("../models/user_Model");
const Login = require("../models/loginModel");
const CRUD_controller = require("./CRUD");

const newToken = (user) => {
  return jwt.sign({ user }, process.env.SECRET_KEY);
};

router.post("/signup", CRUD_controller(User).post);

router.get("/signup", CRUD_controller(User).getAll);

router.post("/login", async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).send(" User Not Found !");
    }
    user = await User.findOne({ password: req.body.password });
    if (!user) {
      return res.status(400).send(" User Not Found !");
    }
    const token = newToken(user);
    return res.status(201).send({ user, token });
  } catch (err) {
    console.log(err);
    return res.status(500).send(err);
  }
});

module.exports = router;
