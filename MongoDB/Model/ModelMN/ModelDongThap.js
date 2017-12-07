/**
 * Create at 11/10/207
 * Cấu Trúc Cho Data KQSX
 */
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var KQ_Schema = new Schema({
    _id : Object,
    KetQuaXSDongThap_kqn : {
        type : Object,
        required : false // == not null
    },
    KetQuaXSDongThap_kqvn : {
        type : Object,
        required : false // == not null
    },
    KetQuaXSDongThap_xsm : {
        type : Object,
        required : false // == not null
    },
    KetQuaXSDongThap_kq24h : {
        type : Object,
        required : false // == not null
    },
    create_date :{
        type : Date,
        default : Date.now
    }
},{_id :false});

module.exports = mongoose.model('KQXS_DongThap',KQ_Schema);