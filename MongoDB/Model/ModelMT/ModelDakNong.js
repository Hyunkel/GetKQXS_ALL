/**
 * Create at 11/10/207
 * Cấu Trúc Cho Data KQSX
 */
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var KQ_Schema = new Schema({
    _id :Object,
    KetQuaXSDakNong_kqn : {
        type : Object,
        required : false // == not null
    },
    KetQuaXSDakNong_kqvn : {
        type : Object,
        required : false // == not null
    },
    KetQuaXSDakNong_xsm : {
        type : Object,
        required : false // == not null
    },
    KetQuaXSDakNong_kq24h : {
        type : Object,
        required : false // == not null
    },
    create_date :{
        type : Date,
        default : Date.now
    }
},{_id :false});

module.exports = mongoose.model('KQXS_DakNong',KQ_Schema);