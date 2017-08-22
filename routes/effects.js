'use strict'
const express = require('express')
const effects = require('../controller/effects')
const router = express.Router();

router.get('/',(req,res)=>{
    effects.renderIndex(req,res)
});

router.get('/blackhole',(req,res)=>{
    effects.blackhole(req,res)
})
module.exports = router