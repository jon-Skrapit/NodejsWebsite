var path = require('path');
var config = {
    root: path.normalize(__dirname),
    env: process.env.NODE_ENV,
    express:{
        port: process.env.PORT || 3000
    },
}
module.exports = config