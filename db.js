const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/CrudDB", { useNewUrlParser: true },(err) => {

    if (err)
        console.error(err);
    else
        console.log("Connected to the mongodb"); 
});
module.exports = mongoose;
