module.exports = (app) => {
    app.get('/',(req,res)=>{
        res.render('pages/first',{
            layout:'index',
            seaModule:'/statics/js/home.js',
            cssModule:'/statics/css/home.css'
        })
    })
    app.use('/home', require('./home')) //在home路由前面加上/home
}