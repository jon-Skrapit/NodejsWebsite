'use strict'
const config = require('../config')

//渲染home页面
exports.renderHomePage = (req,res) =>{
  let obj = {};
      obj.title = 'Home';
      obj.info = '我是从服务层传送过来的';
  res.render('pages/home',{
      layout:'index',
      title:obj.title,
      infoData:obj,
      seaModule:'/static/js/home.js',
      cssModule:'/static/css/home.css'
  })
}

exports.postInforData = (req,res) =>{
  let data = {};
      data.success = true;
      data.errMsg = '请将controller文件夹下的home.js文件的postInforData方法的  data.success = false改为true';
      data.name = 'tonyjiafan';
      data.job = 'web前端';
      data.age = '18';
      data.sex = 'man';
      console.log(data)
      res.send(data)
}
