const express = require('express');
const app = express();
const bodyParser = require('body-parser');// 解析body字段模块
const morgan = require('morgan'); // 命令行log显示
const routes = require('./routes'); //路由配置
const config = require('./config'); //全局配置
const exphbs = require('express-handlebars')

let port = config.express.port;

app.use(morgan('dev'));// 命令行中显示程序运行日志,便于bug调试
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // 调用bodyParser模块以便程序正确解析body传入值
app.use('/statics',express.static(__dirname+'/statics'))
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
    res.sendfile('statics/html/error.html')
  })
}
handlerStatusError(404)
handlerStatusError(500)

//开始监听
app.listen(port, (err,db) => {
  console.log('listening on port : ' + port);
})