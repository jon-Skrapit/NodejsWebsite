const log4js = require('log4js')
const config = require('../config')
log4js.configure({
    appenders: { 
                    file: { type: 'file', filename: './logs/'+config.log.fileName },
                    console: {type:'console'} 
                },
    categories: { default: { appenders: [config.log.type], level: 'debug' } }
})
const logger = log4js.getLogger('file')
module.exports = logger