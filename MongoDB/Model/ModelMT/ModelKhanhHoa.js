/**
 * Create at 11/10/207
 * Cấu Trúc Cho Data KQSX
 */
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var KQ_Schema = new Schema({
    _id :Object,
    KetQuaXSKhanhHoa_kqn : {
        type : Object,
        required : false // == not null
    },
    KetQuaXSKhanhHoa_kqvn : {
        type : Object,
        required : false // == not null
    },
    KetQuaXSKhanhHoa_xsm : {
        type : Object,
        required : false // == not null
    },
    KetQuaXSKhanhHoa_kq24h : {
        type : Object,
        required : false // == not null
    },
    create_date :{
        type : Date,
        default : Date.now
    }
},{_id :false});

module.exports = mongoose.model('KQXS_KhanhHoa',KQ_Schema);