'use strict'
const config = require('../config')

exports.renderIndex = (req,res) => {
  res.render('pages/effects',{
    layout:'index',
    seaModule:'/public/js/common.js',
    cssModule:'/public/css/common.css'
  })
}

exports.blackhole = (req, res) => {
  res.sendFile(config.root+'/public/html/blackhole.html')
}