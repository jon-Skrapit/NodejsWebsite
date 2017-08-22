module.exports = (app) => {
    app.get('/',(req,res)=>{
        res.render('pages/first',{
            layout:'index',
            seaModule:'/public/js/common.js',
            cssModule:'/public/css/common.css'
        })
    })
    app.use('/home', require('./home')) //在home路由前面加上/home
    app.use('/effects', require('./effects'))
}