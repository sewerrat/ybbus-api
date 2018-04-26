var mongoose = require('mongoose');
const common = require('/src/configs/common');

mongoose.connect(common.dbUrl, function(){
    console.log('mongodb connected')
})
module.exports = mongoose