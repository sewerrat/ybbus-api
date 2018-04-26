const db = require('../db.js')
const Bus = db.model('Bus', {
    username: {type: String, required: true},
    body: {type: String, required: true},
    date: { type: Date, required: true, default: Date.now }  
})

module.exports = Post