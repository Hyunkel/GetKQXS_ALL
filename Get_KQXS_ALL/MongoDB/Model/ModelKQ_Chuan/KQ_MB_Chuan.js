/**
 * Create at 11/10/207
 * Cấu Trúc Cho Data KQSX
 */
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var KQ_Schema = new Schema({
    _id :Object,
    KetQuaXSMB_Chuan: {
        type : Object,
        required : false // == not null
    },
    create_date :{
        type : Date,
        default : Date.nows
    }
},{_id :false});

 module.exports = mongoose.model('KQXS_MB_CHUAN',KQ_Schema);    