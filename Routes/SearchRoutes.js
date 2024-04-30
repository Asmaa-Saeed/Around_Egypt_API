const express = require('express');//import express module
const router = express.Router();
const City = require("../Models/SearchModel");
const { models } = require('mongoose');






//app.get method (root search,call back function)
router.get('/search/:key', async (req, res) => {
    console.log(req.params.key);
  //  try {
 let data = await City.find({
            "$or": [
                { name: { $regex: req.params.key } }//start search
            ]
        });
        res.send(data);
  
        if(!data){
            res.status(404).send("NO RESUIT");
        }
        
});

module.exports = router;
