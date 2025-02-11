const mongoose = require('mongoose');
const { type } = require('os');

const userSchema = mongoose.Schema({
    title : {
        type : String,
        require : true
    },

    name : {
        type : String,
        require : true,
        
    },

    contact : {
        type : String,
        require : true
    },

    date : {
        type : Date,
        default : Date.now
    }
})


module.exports = userSchema;