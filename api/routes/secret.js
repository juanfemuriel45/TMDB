const express = require("express");
const router = express.Router();
const User = require("../models/Users")
const passport = require("passport")

router.get("/", (req, res)=>{
    if(req.user){
        res.send("esta autorizado")
    } else {
        res.sendStatus(401)
    }
})

module.exports = router;