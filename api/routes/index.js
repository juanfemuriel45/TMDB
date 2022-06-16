const express = require("express")
const router = express.Router();


const registerRouter = require("./register.js")
router.use("/register", registerRouter)

const loginRouter = require("./login.js")
router.use("/login", loginRouter)

const logOutRouter = require("./logout");
router.use("/logout", logOutRouter)

const secret = require("./secret");
router.use("/secret", secret)

module.exports = router;