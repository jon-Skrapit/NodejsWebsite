'use strict'
const express = require('express')
const home = require('../controller/home')
const router = express.Router();

router.get('/',function(req,res){
    home.renderHomePage(req,res)
});

router.post('/inforData',(req,res)=>{
    home.postInforData(req,res)
})
module.exports = router