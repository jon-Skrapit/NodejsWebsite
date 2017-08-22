var path = require('path');
var config = {
    root: path.normalize(__dirname),
    env: process.env.NODE_ENV,
    express:{
        port: process.env.PORT || 3000
    },
    log:{
        type:'file', //console or file
        fileName: 'website.log'
    }
}
module.exports = config