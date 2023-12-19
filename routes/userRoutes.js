const express = require("express");
const {
  getUser,
  registerController,
  loginController,
  payController
} = require("../controllers/userContoller");

//router object
const router = express.Router();

// GET USER
router.get("/:userId", getUser);

// CREATE USER || POST
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);

//PAY || POST
router.post("/pay", payController);

module.exports = router;
