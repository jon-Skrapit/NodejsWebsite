module.exports = (app) => {
    app.get('/',(req,res)=>{
        res.json({message:'hello index!'})
    })
    app.use('/home', require('./home')) //在home路由前面加上/home
}