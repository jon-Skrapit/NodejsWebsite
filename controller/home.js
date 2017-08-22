'use strict'
const config = require('../config')

//渲染home页面
exports.renderHomePage = (req,res) =>{
  let obj = {};
      obj.title = 'Home';
      obj.info = 'I am home.';
  res.render('pages/home',{
      layout:'index',
      title:obj.title,
      infoData:obj,
      seaModule:'/statics/js/home.js',
      cssModule:'/statics/css/home.css'
  })
}

exports.postInforData = (req,res) =>{
  res.send({status:200,message:'test',success:true})
}