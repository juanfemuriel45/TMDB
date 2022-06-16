const express = require("express");
const router = express.Router();
const User = require("../models/Users")
const passport = require("passport")

router.post("/", (req, res)=>{
    req.logOut();
    res.sendStatus(200);
})

module.exports = router;