var mongoose = require('mongoose');
var material = mongoose.model('material', {
    id: {
        type: Number,
        required: true,
        unique: true
    },
    itemName: {
        type: String,
        required: true,
       
    },
    sellerName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    }
});

var users = mongoose.model('chat-users', {
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        minlength: 3,
        required: true
    }
});


module.exports = {
    material, users
};