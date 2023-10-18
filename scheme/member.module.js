const mongoose= require('mongoose');
const { member_type_enums, members_status_enums } = require('../lib/config');

const memberScheme = new mongoose.Schema({
    mb_nick: {
        type:String ,
        required : true,
        index : {unique: true, sparse: true}
    },
    mb_phone : {
        type : String,
        required : true
    },
    
    mb_password : {
        type : String,
        required : true,
        select: false,
    },
    mb_type: {
        type : String,
        required : false,
        default : 'USER',
        enum: {
            values : member_type_enums,
            message: '{VALUE} is not among permitted values'
        }
    },
    mp_status: {
        type: String,
        required : false,
        dafault : 'ACTIVE',
        enum: {
            values : members_status_enums,
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
    mb_description : {
        type: String,
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
    },
    mb_top : {
        type: String ,
        required : false,
        default : 'N', 
        enum : {
            values : ordernary_enums,
            message: '{VALUES} isnot among permitted values ',

        }
    },
    mb_views : {
        type: String, 
        required : false,
        default : 0
    },
    mb_likes : {
        type: String, 
        required : false,
        default : 0
    },
    mb_follow_cnt : {
        type: String, 
        required : false,
        default : 0
    },
    mb_subscriber_cnt : {
        type: String, 
        required : false,
        default : 0
    }, 
    {timestamps: true},
    
    // avtomatik mongoose 2taqiymat beradi created va update
});

module.exports = mongoose.model('Member', memberScheme )