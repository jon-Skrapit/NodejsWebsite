const express = require('express');
const app = express();
const bodyParser = require('body-parser');// 解析body字段模块
const routes = require('./routes'); //路由配置
const config = require('./config'); //全局配置
const exphbs = require('express-handlebars')
const path = require('path')
const log4js = require('log4js')
const logger = require('./util/log')


let port = config.express.port
let root = path.normalize(__dirname)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // 调用bodyParser模块以便程序正确解析body传入值
app.use('/public',express.static(__dirname+'/public'))
app.use(log4js.connectLogger(logger))
routes(app); // 路由引入

//引用express-handlebars模板引擎
app.engine('.hbs',exphbs({
  defaultLayout: 'index',  //默认布局模板为mindex.hbs
  extname:'.hbs'
})
);
app.set('view engine','.hbs');

//异常处理
let handlerStatusError = (status) => {
  app.use((req,res,next)=>{
    res.status(status)
    res.render('pages/error',{
      layout:'index',
      seaModule:'/public/js/home.js',
      cssModule:'/public/css/home.css'
    })
  })
}
handlerStatusError(404)
handlerStatusError(500)

//开始监听
app.listen(port, (err,db) => {
  console.log('listening on port : ' + port);
})