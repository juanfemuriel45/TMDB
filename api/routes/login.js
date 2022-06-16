const express = require("express");
const router = express.Router();
const User = require("../models/Users")
const passport = require("passport")

router.post("/", passport.authenticate("local"), (req, res)=>{
    console.log("req es ->", req.cookies)
    res.send(req.user);
})

module.exports = router;