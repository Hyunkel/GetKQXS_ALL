/**
 * 
 */
var mongoose = require("mongoose");
var fetch = require("../../FetchUrl");
var TachData = require("../TachDataKQVN");
var _ = require("lodash");

//

//
var url1 ='https://ketqua.vn/kqxsbd-ket-qua-xo-so-binh-dinh';
var url2 ='https://ketqua.vn/kqxsdn-ket-qua-xo-so-da-nang';
var url3 ='https://ketqua.vn/kqxsdl-ket-qua-xo-so-dac-lac';
var url4 = 'https://ketqua.vn/kqxsdn-ket-qua-xo-so-dac-nong';
var url5 = 'https://ketqua.vn/kqxsgl-ket-qua-xo-so-gia-lai';
var url6 = 'https://ketqua.vn/kqxskh-ket-qua-xo-so-khanh-hoa';
var url7 = 'https://ketqua.vn/kqxskt-ket-qua-xo-so-kon-tum';
var url8 ='https://ketqua.vn/kqxsnt-ket-qua-xo-so-ninh-thuan';
var url9 ='https://ketqua.vn/kqxspy-ket-qua-xo-so-phu-yen';
var url10 ='https://ketqua.vn/kqxsqb-ket-qua-xo-so-quang-binh';
var url11 ='https://ketqua.vn/kqxsqn-ket-qua-xo-so-quang-nam';
var url12 ='https://ketqua.vn/kqxsqn-ket-qua-xo-so-quang-ngai';
var url13 ='https://ketqua.vn/kqxsqt-ket-qua-xo-so-quang-tri';
var url14 ='https://ketqua.vn/kqxstth-ket-qua-xo-so-thua-thien-hue';

//
class KQXSMT_KQN{
    constructor(){
    }

    async KQXSDaNang(){
        let body = await fetch.fetchData(url2);
        let DataSelect = [
            '.dng_g0',
            '.dng_g1',
            '.dng_g2',
            '.dng_g31','.dng_g32',
            '.dng_g41','.dng_g42','.dng_g43','.dng_g44','.dng_g45','.dng_g46','.dng_g47',
            '.dng_g5',
            '.dng_g61','.dng_g62','.dng_g63',
            '.dng_g7',
            '.dng_g8'
            ];
        let data = TachData.TachData(body,DataSelect);
        return data;
    }
    async KQXSDaklak(){
        let body = await fetch.fetchData(url3);
        let DataSelect = [
            '.dlk_g0',
            '.dlk_g1',
            '.dlk_g2',
            '.dlk_g31','.dlk_g32',
            '.dlk_g41','.dlk_g42','.dlk_g43','.dlk_g44','.dlk_g45','.dlk_g46','.dlk_g47',
            '.dlk_g5',
            '.dlk_g61','.dlk_g62','.dlk_g63',
            '.dlk_g7',
            '.dlk_g8'
            ];
        let data = TachData.TachData(body,DataSelect);
        return data;
    }
    async KQXSDakNong(){
        let body = await fetch.fetchData(url4);
        let DataSelect = [
            '.dno_g0',
            '.dno_g1',
            '.dno_g2',
            '.dno_g31','.dno_g32',
            '.dno_g41','.dno_g42','.dno_g43','.dno_g44','.dno_g45','.dno_g46','.dno_g47',
            '.dno_g5',
            '.dno_g61','.dno_g62','.dno_g63',
            '.dno_g7',
            '.dno_g8'
            ];
        let data = TachData.TachData(body,DataSelect);
        return data;
    }
    async KQXSGiaLai(){
        let body = await fetch.fetchData(url5);
        let DataSelect = [
            '.gl_g0',
            '.gl_g1',
            '.gl_g2',
            '.gl_g31','.gl_g32',
            '.gl_g41','.gl_g42','.gl_g43','.gl_g44','.gl_g45','.gl_g46','.gl_g47',
            '.gl_g5',
            '.gl_g61','.gl_g62','.gl_g63',
            '.gl_g7',
            '.gl_g8'
            ];
        let data = TachData.TachData(body,DataSelect);
        return data;
    }
    async KQXSKhanhHoa(){
        let body = await fetch.fetchData(url6);
        let DataSelect = [
            '.kh_g0',
            '.kh_g1',
            '.kh_g2',
            '.kh_g31','.kh_g32',
            '.kh_g41','.kh_g42','.kh_g43','.kh_g44','.kh_g45','.kh_g46','.kh_g47',
            '.kh_g5',
            '.kh_g61','.kh_g62','.kh_g63',
            '.kh_g7',
            '.kh_g8'
            ];
        let data = TachData.TachData(body,DataSelect);
        return data;
    }
    async KQXSKonTum(){
        let body = await fetch.fetchData(url7);
        let DataSelect = [
            '.kt_g0',
            '.kt_g1',
            '.kt_g2',
            '.kt_g31','.kt_g32',
            '.kt_g41','.kt_g42','.kt_g43','.kt_g44','.kt_g45','.kt_g46','.kt_g47',
            '.kt_g5',
            '.kt_g61','.kt_g62','.kt_g63',
            '.kt_g7',
            '.kt_g8'
            ];
        let data = TachData.TachData(body,DataSelect);
        return data;
    }
    async KQXSNinhThuan(){
        let body = await fetch.fetchData(url8);
        let DataSelect = [
            '.nt_g0',
            '.nt_g1',
            '.nt_g2',
            '.nt_g31','.nt_g32',
            '.nt_g41','.nt_g42','.nt_g43','.nt_g44','.nt_g45','.nt_g46','.nt_g47',
            '.nt_g5',
            '.nt_g61','.nt_g62','.nt_g63',
            '.nt_g7',
            '.nt_g8'
            ];
        let data = TachData.TachData(body,DataSelect);
        return data;
    }
    async KQXSPhuYen(){
        let body = await fetch.fetchData(url9);
        let DataSelect = [
            '.py_g0',
            '.py_g1',
            '.py_g2',
            '.py_g31','.py_g32',
            '.py_g41','.py_g42','.py_g43','.py_g44','.py_g45','.py_g46','.py_g47',
            '.py_g5',
            '.py_g61','.py_g62','.py_g63',
            '.py_g7',
            '.py_g8'
            ];
        let data = TachData.TachData(body,DataSelect);
        return data;
    }
    async KQXSQuangBinh(){
        let body = await fetch.fetchData(url10);
        let DataSelect = [
            '.qb_g0',
            '.qb_g1',
            '.qb_g2',
            '.qb_g31','.qb_g32',
            '.qb_g41','.qb_g42','.qb_g43','.qb_g44','.qb_g45','.qb_g46','.qb_g47',
            '.qb_g5',
            '.qb_g61','.qb_g62','.qb_g63',
            '.qb_g7',
            '.qb_g8'
            ];
        let data = TachData.TachData(body,DataSelect);
        return data;
    }
    async KQXSQuangNam(){
        let body = await fetch.fetchData(url11);
        let DataSelect = [
            '.qnm_g0',
            '.qnm_g1',
            '.qnm_g2',
            '.qnm_g31','.qnm_g32',
            '.qnm_g41','.qnm_g42','.qnm_g43','.qnm_g44','.qnm_g45','.qnm_g46','.qnm_g47',
            '.qnm_g5',
            '.qnm_g61','.qnm_g62','.qnm_g63',
            '.qnm_g7',
            '.qnm_g8'
            ];
        let data = TachData.TachData(body,DataSelect);
        return data;
    }
    async KQXSQuangNgai(){
        let body = await fetch.fetchData(url12);
        let DataSelect = [
            '.qni_g0',
            '.qni_g1',
            '.qni_g2',
            '.qni_g31','.qni_g32',
            '.qni_g41','.qni_g42','.qni_g43','.qni_g44','.qni_g45','.qni_g46','.qni_g47',
            '.qni_g5',
            '.qni_g61','.qni_g62','.qni_g63',
            '.qni_g7',
            '.qni_g8'
            ];
        let data = TachData.TachData(body,DataSelect);
        return data;
    }
    async KQXSQuangTri(){
        let body = await fetch.fetchData(url13);
        let DataSelect = [
            '.qt_g0',
            '.qt_g1',
            '.qt_g2',
            '.qt_g31','.qt_g32',
            '.qt_g41','.qt_g42','.qt_g43','.qt_g44','.qt_g45','.qt_g46','.qt_g47',
            '.qt_g5',
            '.qt_g61','.qt_g62','.qt_g63',
            '.qt_g7',
            '.qt_g8'
            ];
        let data = TachData.TachData(body,DataSelect);
        return data;
    }
    async KQXSThuaThienHue(){
        let body = await fetch.fetchData(url14);
        let DataSelect = [
            '.tth_g0',
            '.tth_g1',
            '.tth_g2',
            '.tth_g31','.tth_g32',
            '.tth_g41','.tth_g42','.tth_g43','.tth_g44','.tth_g45','.tth_g46','.tth_g47',
            '.tth_g5',
            '.tth_g61','.tth_g62','.tth_g63',
            '.tth_g7',
            '.tth_g8'
            ];
        let data = TachData.TachData(body,DataSelect);
        return data;
    } 
    
}
module.exports = KQXSMT_KQN;