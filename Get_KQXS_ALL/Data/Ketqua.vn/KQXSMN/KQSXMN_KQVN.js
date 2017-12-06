/**
 * 
 */
var mongoose = require("mongoose");
var fetch = require("../../FetchUrl");
var TachData = require("../TachDataKQVN");
var _ = require("lodash");

//
var url1 ='https://ketqua.vn/kqxsag-ket-qua-xo-so-an-giang';
var url2 ='https://ketqua.vn/kqxsbl-ket-qua-xo-so-bac-lieu';
var url3 = 'https://ketqua.vn/kqxsbt-ket-qua-xo-so-ben-tre';
var url4 ='https://ketqua.vn/kqxsbd-ket-qua-xo-so-binh-duong';
var url5 ='https://ketqua.vn/kqxsbp-ket-qua-xo-so-binh-phuoc';
var url6 ='https://ketqua.vn/kqxsbt-ket-qua-xo-so-binh-thuan';
var url7 = 'https://ketqua.vn/kqxscm-ket-qua-xo-so-ca-mau';
var url8 ='https://ketqua.vn/kqxsct-ket-qua-xo-so-can-tho';
var url9 = 'https://ketqua.vn/kqxsdl-ket-qua-xo-so-da-lat';
var url10 = 'https://ketqua.vn/kqxsdn-ket-qua-xo-so-dong-nai';
var url11 ='https://ketqua.vn/kqxsdt-ket-qua-xo-so-dong-thap';
var url12 = 'https://ketqua.vn/kqxshg-ket-qua-xo-so-hau-giang';
var url13 ='https://ketqua.vn/kqxshcm-ket-qua-xo-so-ho-chi-minh';
var url14 ='https://ketqua.vn/kqxskg-ket-qua-xo-so-kien-giang';
var url15 ='https://ketqua.vn/kqxsla-ket-qua-xo-so-long-an';
var url16 ='https://ketqua.vn/kqxsst-ket-qua-xo-so-soc-trang';
var url17 ='https://ketqua.vn/kqxstn-ket-qua-xo-so-tay-ninh';
var url18 ='https://ketqua.vn/kqxstg-ket-qua-xo-so-tien-giang';
var url19 ='https://ketqua.vn/kqxstv-ket-qua-xo-so-tra-vinh';
var url20 = 'https://ketqua.vn/kqxsvl-ket-qua-xo-so-vinh-long';
var url21 ='https://ketqua.vn/kqxsvt-ket-qua-xo-so-vung-tau';


//
class KQXSMN_KQVN{
    constructor(){
    }
    async KQXSAnGiang(){
        let body = await fetch.fetchData(url1);
        let DataSelect = [
            '.ag_g0',
            '.ag_g1',
            '.ag_g2',
            '.ag_g31','.ag_g32',
            '.ag_g41','.ag_g42','.ag_g43','.ag_g44','.ag_g45','.ag_g46','.ag_g47',
            '.ag_g5',
            '.ag_g61','.ag_g62','.ag_g63',
            '.ag_g7',
            '.ag_g8'
            ];
        let data = TachData.TachData(body,DataSelect);
        return data;
    }
    async KQXSBacLieu(){
        let body = await fetch.fetchData(url2);
        let DataSelect = [
            '.bl_g0',
            '.bl_g1',
            '.bl_g2',
            '.bl_g31','.bl_g32',
            '.bl_g41','.bl_g42','.bl_g43','.bl_g44','.bl_g45','.bl_g46','.bl_g47',
            '.bl_g5',
            '.bl_g61','.bl_g62','.bl_g63',
            '.bl_g7',
            '.bl_g8'
            ];
        let data = TachData.TachData(body,DataSelect);
        return data;
    }
    async KQXSBenTre(){
        let body = await fetch.fetchData(url3);
        let DataSelect = [
            '.btr_g0',
            '.btr_g1',
            '.btr_g2',
            '.btr_g31','.btr_g32',
            '.btr_g41','.btr_g42','.btr_g43','.btr_g44','.btr_g45','.btr_g46','.btr_g47',
            '.btr_g5',
            '.btr_g61','.btr_g62','.btr_g63',
            '.btr_g7',
            '.btr_g8'
            ];
        let data = TachData.TachData(body,DataSelect);
        return data;
    }
    async KQXSBinhDuong(){
        let body = await fetch.fetchData(url4);
        let DataSelect = [
            '.bd_g0',
            '.bd_g1',
            '.bd_g2',
            '.bd_g31','.bd_g32',
            '.bd_g41','.bd_g42','.bd_g43','.bd_g44','.bd_g45','.bd_g46','.bd_g47',
            '.bd_g5',
            '.bd_g61','.bd_g62','.bd_g63',
            '.bd_g7',
            '.bd_g8'
            ];
        let data = TachData.TachData(body,DataSelect);
        return data;
    }
    async KQXSBinhPhuoc(){
        let body = await fetch.fetchData(url5);
        let DataSelect = [
            '.bp_g0',
            '.bp_g1',
            '.bp_g2',
            '.bp_g31','.bp_g32',
            '.bp_g41','.bp_g42','.bp_g43','.bp_g44','.bp_g45','.bp_g46','.bp_g47',
            '.bp_g5',
            '.bp_g61','.bp_g62','.bp_g63',
            '.bp_g7',
            '.bp_g8'
            ];
        let data = TachData.TachData(body,DataSelect);
        return data;
    }
    async KQXSBinhThuan(){
        let body = await fetch.fetchData(url6);
        let DataSelect = [
            '.bth_g0',
            '.bth_g1',
            '.bth_g2',
            '.bth_g31','.bth_g32',
            '.bth_g41','.bth_g42','.bth_g43','.bth_g44','.bth_g45','.bth_g46','.bth_g47',
            '.bth_g5',
            '.bth_g61','.bth_g62','.bth_g63',
            '.bth_g7',
            '.bth_g8'
            ];
        let data = TachData.TachData(body,DataSelect);
        return data;
    }
    async KQXSCaMau(){
        let body = await fetch.fetchData(url7);
        let DataSelect = [
            '.cm_g0',
            '.cm_g1',
            '.cm_g2',
            '.cm_g31','.cm_g32',
            '.cm_g41','.cm_g42','.cm_g43','.cm_g44','.cm_g45','.cm_g46','.cm_g47',
            '.cm_g5',
            '.cm_g61','.cm_g62','.cm_g63',
            '.cm_g7',
            '.cm_g8'
            ];
        let data = TachData.TachData(body,DataSelect);
        return data;
    }
    async KQXSCanTho(){
        let body = await fetch.fetchData(url8);
        let DataSelect = [
            '.ct_g0',
            '.ct_g1',
            '.ct_g2',
            '.ct_g31','.ct_g32',
            '.ct_g41','.ct_g42','.ct_g43','.ct_g44','.ct_g45','.ct_g46','.ct_g47',
            '.ct_g5',
            '.ct_g61','.ct_g62','.ct_g63',
            '.ct_g7',
            '.ct_g8'
            ];
        let data = TachData.TachData(body,DataSelect);
        return data;
    }
    async KQXSDaLat(){
        let body = await fetch.fetchData(url9);
        let DataSelect = [
            '.dl_g0',
            '.dl_g1',
            '.dl_g2',
            '.dl_g31','.dl_g32',
            '.dl_g41','.dl_g42','.dl_g43','.dl_g44','.dl_g45','.dl_g46','.dl_g47',
            '.dl_g5',
            '.dl_g61','.dl_g62','.dl_g63',
            '.dl_g7',
            '.dl_g8'
            ];
        let data = TachData.TachData(body,DataSelect);
        return data;
    }
    async KQXSDongNai(){
        let body = await fetch.fetchData(url10);
        let DataSelect = [
            '.dn_g0',
            '.dn_g1',
            '.dn_g2',
            '.dn_g31','.dn_g32',
            '.dn_g41','.dn_g42','.dn_g43','.dn_g44','.dn_g45','.dn_g46','.dn_g47',
            '.dn_g5',
            '.dn_g61','.dn_g62','.dn_g63',
            '.dn_g7',
            '.dn_g8'
            ];
        let data = TachData.TachData(body,DataSelect);
        return data;
    }
    async KQXSDongThap(){
        let body = await fetch.fetchData(url11);
        let DataSelect = [
            '.dt_g0',
            '.dt_g1',
            '.dt_g2',
            '.dt_g31','.dt_g32',
            '.dt_g41','.dt_g42','.dt_g43','.dt_g44','.dt_g45','.dt_g46','.dt_g47',
            '.dt_g5',
            '.dt_g61','.dt_g62','.dt_g63',
            '.dt_g7',
            '.dt_g8'
            ];
        let data = TachData.TachData(body,DataSelect);
        return data;
    }
    async KQXSHauGiang(){
        let body = await fetch.fetchData(url12);
        let DataSelect = [
            '.hg_g0',
            '.hg_g1',
            '.hg_g2',
            '.hg_g31','.hg_g32',
            '.hg_g41','.hg_g42','.hg_g43','.hg_g44','.hg_g45','.hg_g46','.hg_g47',
            '.hg_g5',
            '.hg_g61','.hg_g62','.hg_g63',
            '.hg_g7',
            '.hg_g8'
            ];
        let data = TachData.TachData(body,DataSelect);
        return data;
    }
    async KQXSHoChiMinh(){
        let body = await fetch.fetchData(url13);
        let DataSelect = [
            '.hcm_g0',
            '.hcm_g1',
            '.hcm_g2',
            '.hcm_g31','.hcm_g32',
            '.hcm_g41','.hcm_g42','.hcm_g43','.hcm_g44','.hcm_g45','.hcm_g46','.hcm_g47',
            '.hcm_g5',
            '.hcm_g61','.hcm_g62','.hcm_g63',
            '.hcm_g7',
            '.hcm_g8'
            ];
        let data = TachData.TachData(body,DataSelect);
        return data;
    }
    async KQXSKienGiang(){
        let body = await fetch.fetchData(url14);
        let DataSelect = [
            '.kg_g0',
            '.kg_g1',
            '.kg_g2',
            '.kg_g31','.kg_g32',
            '.kg_g41','.kg_g42','.kg_g43','.kg_g44','.kg_g45','.kg_g46','.kg_g47',
            '.kg_g5',
            '.kg_g61','.kg_g62','.kg_g63',
            '.kg_g7',
            '.kg_g8'
            ];
        let data = TachData.TachData(body,DataSelect);
        return data;
    }
    async KQXSLongAn(){
        let body = await fetch.fetchData(url15);
        let DataSelect = [
            '.la_g0',
            '.la_g1',
            '.la_g2',
            '.la_g31','.la_g32',
            '.la_g41','.la_g42','.la_g43','.la_g44','.la_g45','.la_g46','.la_g47',
            '.la_g5',
            '.la_g61','.la_g62','.la_g63',
            '.la_g7',
            '.la_g8'
            ];
        let data = TachData.TachData(body,DataSelect);
        return data;
    }
    async KQXSSocTrang(){
        let body = await fetch.fetchData(url16);
        let DataSelect = [
            '.st_g0',
            '.st_g1',
            '.st_g2',
            '.st_g31','.st_g32',
            '.st_g41','.st_g42','.st_g43','.st_g44','.st_g45','.st_g46','.st_g47',
            '.st_g5',
            '.st_g61','.st_g62','.st_g63',
            '.st_g7',
            '.st_g8'
            ];
        let data = TachData.TachData(body,DataSelect);
        return data;
    }
    async KQXSTayNinh(){
        let body = await fetch.fetchData(url17);
        let DataSelect = [
            '.tn_g0',
            '.tn_g1',
            '.tn_g2',
            '.tn_g31','.tn_g32',
            '.tn_g41','.tn_g42','.tn_g43','.tn_g44','.tn_g45','.tn_g46','.tn_g47',
            '.tn_g5',
            '.tn_g61','.tn_g62','.tn_g63',
            '.tn_g7',
            '.tn_g8'
            ];
        let data = TachData.TachData(body,DataSelect);
        return data;
    }
    async KQXSTienGiang(){
        let body = await fetch.fetchData(url18);
        let DataSelect = [
            '.tg_g0',
            '.tg_g1',
            '.tg_g2',
            '.tg_g31','.tg_g32',
            '.tg_g41','.tg_g42','.tg_g43','.tg_g44','.tg_g45','.tg_g46','.tg_g47',
            '.tg_g5',
            '.tg_g61','.tg_g62','.tg_g63',
            '.tg_g7',
            '.tg_g8'
            ];
        let data = TachData.TachData(body,DataSelect);
        return data;
    }
    async KQXSTraVinh(){
        let body = await fetch.fetchData(url19);
        let DataSelect = [
            '.tv_g0',
            '.tv_g1',
            '.tv_g2',
            '.tv_g31','.tv_g32',
            '.tv_g41','.tv_g42','.tv_g43','.tv_g44','.tv_g45','.tv_g46','.tv_g47',
            '.tv_g5',
            '.tv_g61','.tv_g62','.tv_g63',
            '.tv_g7',
            '.tv_g8'
            ];
        let data = TachData.TachData(body,DataSelect);
        return data;
    }
    async KQXSVinhLong(){
        let body = await fetch.fetchData(url20);
        let DataSelect = [
            '.vl_g0',
            '.vl_g1',
            '.vl_g2',
            '.vl_g31','.vl_g32',
            '.vl_g41','.vl_g42','.vl_g43','.vl_g44','.vl_g45','.vl_g46','.vl_g47',
            '.vl_g5',
            '.vl_g61','.vl_g62','.vl_g63',
            '.vl_g7',
            '.vl_g8'
            ];
        let data = TachData.TachData(body,DataSelect);
        return data;
    }
    async KQXSVungTau(){
        let body = await fetch.fetchData(url21);
        let DataSelect = [
            '.vt_g0',
            '.vt_g1',
            '.vt_g2',
            '.vt_g31','.vt_g32',
            '.vt_g41','.vt_g42','.vt_g43','.vt_g44','.vt_g45','.vt_g46','.vt_g47',
            '.vt_g5',
            '.vt_g61','.vt_g62','.vt_g63',
            '.vt_g7',
            '.vt_g8'
            ];
        let data = TachData.TachData(body,DataSelect);
        return data;
    }
    
    
}
module.exports = KQXSMN_KQVN;