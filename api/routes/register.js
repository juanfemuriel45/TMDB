const express = require("express");
const router = express.Router();
const User = require("../models/Users")

router.post("/", (req, res)=>{
    User.create(req.body)
    .then((user =>{
        res.status(201).send(user);
    }))
})

module.exports = router;