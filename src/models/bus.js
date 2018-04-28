const db = require('../db.js')
const Bus = db.model('Bus', {
    reg_number: {type: String, required: true},
    phone: {type: String, required: true},
    
})

module.exports = Post