const express = require('express');

const router = express.Router();

require('../db/conn');

const User = require("../model/userSchema");



router.post('/contact',async(req, res) => {
   
   
    const {name, email, phone, city, concern} = req.body;
    if (!name || !email || !phone || !city || !concern) {
        return res.status(422).json({ error: "plz fill all the details" });
    }


    try{
       
        const user = new User({name, email, phone, city, concern});

    


        await user.save();

         res.status(201).json({message:"user details sent successfully"});

    }catch(err){
        res.status(404);

    }

});




module.exports = router;