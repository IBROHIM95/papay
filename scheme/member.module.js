const mongoose= require('mongoose');

const memberScheme = new mongoose.Schema({
    mb_nick: {
        type:String ,
        required : true,
    },
    mb_phone : {
        type : String,
        required : true
    },
    mb_password : {
        type : String,
        required : true,
    },
    mb_type: {
        type : String,
        required : false,
        default : 'USER',
        enum: {
            values : ['USER', 'ADMIN', 'PEDAL', 'RESTAURANT'],
            message: '{VALUE} is not among permitted values'
        }
    },
    mp_status: {
        type: String,
        required : false,
        dafault : 'ACTIVE',
        enum: {
            values : ['ONPAUSE', 'ACTIVE', 'DELETED'],
            message : '{VALUES} isnot among permitted values '
        }
    },
    mb_full_name : {
        type: String,
        required: false,
    },
    mb_address : {
        type:String ,
        required : false,
    },
    mb_image : {
        type : String,
        required : false,
    },
    mb_point : {
        type : Number,
        required : false,
        default : 0,
    }
})