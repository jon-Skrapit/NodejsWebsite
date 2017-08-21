'use strict'
const express = require('express')
const home = require('../controller/home')
const router = express.Router();

router.get('/',function(req,res){
  res.send('<h1 style="margin:50px 100px;font-size:100px;color:#fc5144;font-weight:700;">Express欢迎再次访问</h1><a style="display: inline-block;background: #ff4000;border: 1px solid #fc7144;border-radius: 3px;color: white;margin: 10px 100px;padding: 10px 40px;" href="/home">Express</a>');
});

//home页路由   通过服务器渲染
router.get('/renderHome',(req, res)=>{
    home.renderHomePage(req,res)
});

router.post('/inforData',(req,res)=>{
    home.postInforData(req,res)
})
module.exports = router