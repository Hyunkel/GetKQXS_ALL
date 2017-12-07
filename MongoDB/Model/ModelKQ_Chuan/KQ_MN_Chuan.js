/**
 * Create at 11/10/207
 * Cấu Trúc Cho Data KQSX
 */
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var KQ_Schema = new Schema({
    _id :Object,
    KetQuaXSBenTre_Chuan: {
        type : Object,
        required : false // == not null
    },
    KetQuaXSAnGiang_Chuan : {
        type : Object,
        required : false // == not null
    },
    KetQuaXSBacLieu_Chuan : {
        type : Object,
        required : false // == not null
    },
    KetQuaXSBinhDuong_Chuan : {
        type : Object,
        required : false // == not null
    },
    KetQuaXSBinhPhuoc_Chuan : {
        type : Object,
        required : false // == not null
    },
    KetQuaXSBinhThuan_Chuan : {
        type : Object,
        required : false // == not null
    },
    KetQuaXSCaMau_Chuan : {
        type : Object,
        required : false // == not null
    },
    KetQuaXSCanTho_Chuan : {
        type : Object,
        required : false // == not null
    },
    KetQuaXSDaLat_Chuan : {
        type : Object,
        required : false // == not null
    },
    KetQuaXSDongNai_Chuan : {
        type : Object,
        required : false // == not null
    },
    KetQuaXSDongThap_Chuan : {
        type : Object,
        required : false // == not null
    },
    KetQuaXSHauGiang_Chuan : {
        type : Object,
        required : false // == not null
    },
    KetQuaXSHoChiMinh_Chuan : {
        type : Object,
        required : false // == not null
    },
    KetQuaXSKienGiang_Chuan : {
        type : Object,
        required : false // == not null
    },
    KetQuaXSLongAn_Chuan : {
        type : Object,
        required : false // == not null
    },
    KetQuaXSSocTrang_Chuan : {
        type : Object,
        required : false // == not null
    },
    KetQuaXSTayNinh_Chuan : {
        type : Object,
        required : false // == not null
    },
    KetQuaXSTienGiang_Chuan : {
        type : Object,
        required : false // == not null
    },
    KetQuaXSTraVinh_Chuan : {
        type : Object,
        required : false // == not null
    },
    KetQuaXSVinhLong_Chuan : {
        type : Object,
        required : false // == not null
    },
    KetQuaXSVungTau_Chuan : {
        type : Object,
        required : false // == not null
    },
    create_date :{
        type : Date,
        default : Date.nows
    }
},{_id :false});

module.exports = mongoose.model('KQXS_MN_CHUAN',KQ_Schema);