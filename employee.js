//we created modles in mongoose packge to save data to mongo db

const mongoose = require('mongoose');

var Employee = mongoose.model('Employee', {
    name:{ type: String},
    position:{type: String},
    office:{type: String},
    salary:{type:Number}
});
module.exports = {Employee};