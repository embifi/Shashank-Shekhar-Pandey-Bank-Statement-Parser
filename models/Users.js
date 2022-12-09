const mongoose = require('mongoose');


const usersSchema =   new mongoose.Schema({
    Account_Number: {
        type: Number,
        required: true

    },
    Transaction_date: {
        type: string,
        required: true
    },

    Date: {
        type: String,
        required: true

    },
    OtherDetails: {
        type: String,
        required: true

    },
    Amount: {
        type: Number,
        required:true
    },
    Type: {
        type:string,
        required:true
    }   
}, {
    timestamps:true
}
)

//name of collection

const usersCollection = mongoose.model('usersCollection', usersSchema);

module.exports = userCollection;

