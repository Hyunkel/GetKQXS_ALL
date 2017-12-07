/**
 * 
 */
var mongoose = require("mongoose");
var fetch = require("../../FetchUrl");
var TachData = require("../TachDataXSM");
var _ = require("lodash");

//
var url1 ='http://xoso.me/mien-nam/xsag-ket-qua-xo-so-an-giang-p2.html';
var url2 ='http://xoso.me/mien-nam/xsbl-ket-qua-xo-so-bac-lieu-p3.html';
var url3 = 'http://xoso.me/mien-nam/xsbt-ket-qua-xo-so-ben-tre-p4.html';
var url4 ='http://xoso.me/mien-nam/xsbd-ket-qua-xo-so-binh-duong-p5.html';
var url5 ='http://xoso.me/mien-nam/xsbp-ket-qua-xo-so-binh-phuoc-p6.html';
var url6 ='http://xoso.me/mien-nam/xsbth-ket-qua-xo-so-binh-thuan-p7.html';
var url7 = 'http://xoso.me/mien-nam/xscm-ket-qua-xo-so-ca-mau-p8.html';
var url8 ='http://xoso.me/mien-nam/xsct-ket-qua-xo-so-can-tho-p9.html';
var url9 = 'http://xoso.me/mien-nam/xsdl-ket-qua-xo-so-da-lat-p10.html';
var url10 = 'http://xoso.me/mien-nam/xsdn-ket-qua-xo-so-dong-nai-p11.html';
var url11 ='http://xoso.me/mien-nam/xsdt-ket-qua-xo-so-dong-thap-p12.html';
var url12 = 'http://xoso.me/mien-nam/xshg-ket-qua-xo-so-hau-giang-p13.html';
var url13 ='http://xoso.me/mien-nam/xshcm-ket-qua-xo-so-thanh-pho-ho-chi-minh-p14.html';
var url14 ='http://xoso.me/mien-nam/xskg-ket-qua-xo-so-kien-giang-p15.html';
var url15 ='http://xoso.me/mien-nam/xsla-ket-qua-xo-so-long-an-p16.html';
var url16 ='http://xoso.me/mien-nam/xsst-ket-qua-xo-so-soc-trang-p17.html';
var url17 ='http://xoso.me/mien-nam/xstn-ket-qua-xo-so-tay-ninh-p18.html';
var url18 ='http://xoso.me/mien-nam/xstg-ket-qua-xo-so-tien-giang-p19.html';
var url19 ='http://xoso.me/mien-nam/xstv-ket-qua-xo-so-tra-vinh-p20.html';
var url20 = 'http://xoso.me/mien-nam/xsvl-ket-qua-xo-so-vinh-long-p21.html';
var url21 ='http://xoso.me/mien-nam/xsvt-ket-qua-xo-so-vung-tau-p22.html';


//
class KQXSMN_XSM{
    constructor(){
    }
    async KQXSAnGiang(){
        let body = await fetch.fetchData(url1);
        let B= TachData.TachData(body);
        B.splice(18,18);
        let data = [B[17],B[16],B[15],B[13],B[14],B[6],B[7],B[8],B[9],B[10],B[11],B[12],B[5],B[2],B[3],B[4],B[1],B[0]];
        return data;
    }
    async KQXSBacLieu(){
        let body = await fetch.fetchData(url2);
        let B = TachData.TachData(body);
        B.splice(18,18);
        let data = [B[17],B[16],B[15],B[13],B[14],B[6],B[7],B[8],B[9],B[10],B[11],B[12],B[5],B[2],B[3],B[4],B[1],B[0]];
        return data;
    }
    async KQXSBenTre(){
        let body = await fetch.fetchData(url3);
        let B = TachData.TachData(body);
        B.splice(18,18);
        let data = [B[17],B[16],B[15],B[13],B[14],B[6],B[7],B[8],B[9],B[10],B[11],B[12],B[5],B[2],B[3],B[4],B[1],B[0]];
        return data;
    }
    async KQXSBinhDuong(){
        let body = await fetch.fetchData(url4);
        let B = TachData.TachData(body);
        B.splice(18,18);
        let data = [B[17],B[16],B[15],B[13],B[14],B[6],B[7],B[8],B[9],B[10],B[11],B[12],B[5],B[2],B[3],B[4],B[1],B[0]];
        return data;
    }
    async KQXSBinhPhuoc(){
        let body = await fetch.fetchData(url5);
        let B = TachData.TachData(body);
        B.splice(18,18);
        let data = [B[17],B[16],B[15],B[13],B[14],B[6],B[7],B[8],B[9],B[10],B[11],B[12],B[5],B[2],B[3],B[4],B[1],B[0]];
        return data;
    }
    async KQXSBinhThuan(){
        let body = await fetch.fetchData(url6);
        let B = TachData.TachData(body);
        B.splice(18,18);
        let data = [B[17],B[16],B[15],B[13],B[14],B[6],B[7],B[8],B[9],B[10],B[11],B[12],B[5],B[2],B[3],B[4],B[1],B[0]];
        return data;
    }
    async KQXSCaMau(){
        let body = await fetch.fetchData(url7);
        let B = TachData.TachData(body);
        B.splice(18,18);
        let data = [B[17],B[16],B[15],B[13],B[14],B[6],B[7],B[8],B[9],B[10],B[11],B[12],B[5],B[2],B[3],B[4],B[1],B[0]];
        return data;
    }
    async KQXSCanTho(){
        let body = await fetch.fetchData(url8);
        let B = TachData.TachData(body);
        B.splice(18,18);
        let data = [B[17],B[16],B[15],B[13],B[14],B[6],B[7],B[8],B[9],B[10],B[11],B[12],B[5],B[2],B[3],B[4],B[1],B[0]];
        return data;
    }
    async KQXSDaLat(){
        let body = await fetch.fetchData(url9);
        let B = TachData.TachData(body);
        B.splice(18,18);
        let data = [B[17],B[16],B[15],B[13],B[14],B[6],B[7],B[8],B[9],B[10],B[11],B[12],B[5],B[2],B[3],B[4],B[1],B[0]];
        return data;
    }
    async KQXSDongNai(){
        let body = await fetch.fetchData(url10);
        let B = TachData.TachData(body);
        B.splice(18,18);
        let data = [B[17],B[16],B[15],B[13],B[14],B[6],B[7],B[8],B[9],B[10],B[11],B[12],B[5],B[2],B[3],B[4],B[1],B[0]];
        return data;
    }
    async KQXSDongThap(){
        let body = await fetch.fetchData(url11);
        let B = TachData.TachData(body);
        B.splice(18,18);
        let data = [B[17],B[16],B[15],B[13],B[14],B[6],B[7],B[8],B[9],B[10],B[11],B[12],B[5],B[2],B[3],B[4],B[1],B[0]];
        return data;
    }
    async KQXSHauGiang(){
        let body = await fetch.fetchData(url12);
        let B = TachData.TachData(body);
        B.splice(18,18);
        let data = [B[17],B[16],B[15],B[13],B[14],B[6],B[7],B[8],B[9],B[10],B[11],B[12],B[5],B[2],B[3],B[4],B[1],B[0]];
        return data;
    }
    async KQXSHoChiMinh(){
        let body = await fetch.fetchData(url13);
        let B = TachData.TachData(body);
        B.splice(18,18);
        let data = [B[17],B[16],B[15],B[13],B[14],B[6],B[7],B[8],B[9],B[10],B[11],B[12],B[5],B[2],B[3],B[4],B[1],B[0]];
        return data;
    }
    async KQXSKienGiang(){
        let body = await fetch.fetchData(url14);
        let B = TachData.TachData(body);
        B.splice(18,18);
        let data = [B[17],B[16],B[15],B[13],B[14],B[6],B[7],B[8],B[9],B[10],B[11],B[12],B[5],B[2],B[3],B[4],B[1],B[0]];
        return data;
    }
    async KQXSLongAn(){
        let body = await fetch.fetchData(url15);
        let B = TachData.TachData(body);
        B.splice(18,18);
        let data = [B[17],B[16],B[15],B[13],B[14],B[6],B[7],B[8],B[9],B[10],B[11],B[12],B[5],B[2],B[3],B[4],B[1],B[0]];
        return data;
    }
    async KQXSSocTrang(){
        let body = await fetch.fetchData(url16);
        let B = TachData.TachData(body);
        B.splice(18,18);
        let data = [B[17],B[16],B[15],B[13],B[14],B[6],B[7],B[8],B[9],B[10],B[11],B[12],B[5],B[2],B[3],B[4],B[1],B[0]];
        return data;
    }
    async KQXSTayNinh(){
        let body = await fetch.fetchData(url17);
        let B = TachData.TachData(body);
        B.splice(18,18);
        let data = [B[17],B[16],B[15],B[13],B[14],B[6],B[7],B[8],B[9],B[10],B[11],B[12],B[5],B[2],B[3],B[4],B[1],B[0]];
        return data;
    }
    async KQXSTienGiang(){
        let body = await fetch.fetchData(url18);
        let B = TachData.TachData(body);
        B.splice(18,18);
        let data = [B[17],B[16],B[15],B[13],B[14],B[6],B[7],B[8],B[9],B[10],B[11],B[12],B[5],B[2],B[3],B[4],B[1],B[0]];
        return data;
    }
    async KQXSTraVinh(){
        let body = await fetch.fetchData(url19);
        let B = TachData.TachData(body);
        B.splice(18,18);
        let data = [B[17],B[16],B[15],B[13],B[14],B[6],B[7],B[8],B[9],B[10],B[11],B[12],B[5],B[2],B[3],B[4],B[1],B[0]];
        return data;
    }
    async KQXSVinhLong(){
        let body = await fetch.fetchData(url20);
        let B = TachData.TachData(body);
        B.splice(18,18);
        let data = [B[17],B[16],B[15],B[13],B[14],B[6],B[7],B[8],B[9],B[10],B[11],B[12],B[5],B[2],B[3],B[4],B[1],B[0]];
        return data;
    }
    async KQXSVungTau(){
        let body = await fetch.fetchData(url21);
        let B = TachData.TachData(body);
        B.splice(18,18);
        let data = [B[17],B[16],B[15],B[13],B[14],B[6],B[7],B[8],B[9],B[10],B[11],B[12],B[5],B[2],B[3],B[4],B[1],B[0]];
        return data;
    }
    
    
}
module.exports = KQXSMN_XSM;