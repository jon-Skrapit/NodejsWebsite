var path = require('path');
var current_path = path.normalize(__dirname)
var config = {
    root: path.resolve(current_path+'/..'),
    env: process.env.NODE_ENV,
    express:{
        port: process.env.PORT || 3000
    },
    log:{
        type:'console', //console or file
        fileName: 'website.log'
    }
}
module.exports = config