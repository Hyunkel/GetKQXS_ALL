/**
 * Create at 11/10/207
 * Cấu Trúc Cho Data KQSX
 */
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var KQ_Schema = new Schema({
    _id :Object,
    KetQuaXSBinhDinh_Chuan : {
        type : Object,
        required : false // == not null
    },
    KetQuaXSDakLak_Chuan : {
        type : Object,
        required : false // == not null
    },
    KetQuaXSDakNong_Chuan : {
        type : Object,
        required : false // == not null
    },
    KetQuaXSDaNang_Chuan : {
        type : Object,
        required : false // == not null
    },
    KetQuaXSGiaLai_Chuan : {
        type : Object,
        required : false // == not null
    },
    KetQuaXSKhanhHoa_Chuan : {
        type : Object,
        required : false // == not null
    },
    KetQuaXSKonTum_Chuan : {
        type : Object,
        required : false // == not null
    },
    KetQuaXSNinhThuan_Chuan : {
        type : Object,
        required : false // == not null
    },
    KetQuaXSPhuYen_Chuan : {
        type : Object,
        required : false // == not null
    },
    KetQuaXSQuangBinh_Chuan : {
        type : Object,
        required : false // == not null
    },
    KetQuaXSQuangNam_Chuan : {
        type : Object,
        required : false // == not null
    },
    KetQuaXSQuangNgai_Chuan : {
        type : Object,
        required : false // == not null
    },
    KetQuaXSQuangTri_Chuan : {
        type : Object,
        required : false // == not null
    },
    KetQuaXSThuaThienHue_Chuan : {
        type : Object,
        required : false // == not null
    },

    create_date :{
        type : Date,
        default : Date.nows
    }
},{_id :false});

 module.exports = mongoose.model('KQXS_MT_CHUAN',KQ_Schema);    