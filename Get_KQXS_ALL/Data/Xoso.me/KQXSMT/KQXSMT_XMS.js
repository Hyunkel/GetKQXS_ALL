/**
 * 
 */
var mongoose = require("mongoose");
var fetch = require("../../FetchUrl");
var TachData = require("../TachDataXSM");
var _ = require("lodash");

//

var url1 ='http://xoso.me/mien-trung/xsbdi-ket-qua-xo-so-binh-dinh-p23.html';
var url2 ='http://xoso.me/mien-trung/xsdng-ket-qua-xo-so-da-nang-p24.html';
var url3 ='http://xoso.me/mien-trung/xsdlk-ket-qua-xo-so-dac-lac-p25.html';
var url4 = 'http://xoso.me/mien-trung/xsdno-ket-qua-xo-so-dac-nong-p26.html';
var url5 = 'http://xoso.me/mien-trung/xsgl-ket-qua-xo-so-gia-lai-p27.html';
var url6 = 'http://xoso.me/mien-trung/xskh-ket-qua-xo-so-khanh-hoa-p28.html';
var url7 = 'http://xoso.me/mien-trung/xskt-ket-qua-xo-so-kon-tum-p29.html';
var url8 ='http://xoso.me/mien-trung/xsnt-ket-qua-xo-so-ninh-thuan-p30.html';
var url9 ='http://xoso.me/mien-trung/xspy-ket-qua-xo-so-phu-yen-p31.html';
var url10 ='http://xoso.me/mien-trung/xsqb-ket-qua-xo-so-quang-binh-p32.html';
var url11 ='http://xoso.me/mien-trung/xsqnm-ket-qua-xo-so-quang-nam-p34.html';
var url12 ='http://xoso.me/mien-trung/xsqng-ket-qua-xo-so-quang-ngai-p33.html';
var url13 ='http://xoso.me/mien-trung/xsqt-ket-qua-xo-so-quang-tri-p35.html';
var url14 ='http://xoso.me/mien-trung/xstth-ket-qua-xo-so-thua-thien-hue-p36.html'

//
class KQXSMT_XSM{
    constructor(){
    }
    async KQXSBinhDinh(){
        let body = await fetch.fetchData(url1);
        let B = TachData.TachData(body);
        B.splice(18,18);
        let data = [B[17],B[16],B[15],B[13],B[14],B[6],B[7],B[8],B[9],B[10],B[11],B[12],B[5],B[2],B[3],B[4],B[1],B[0]];
        return data;
    }
    async KQXSDaNang(){
        let body = await fetch.fetchData(url2);
        let B  = TachData.TachData(body);
        B.splice(18,18);
        let data = [B[17],B[16],B[15],B[13],B[14],B[6],B[7],B[8],B[9],B[10],B[11],B[12],B[5],B[2],B[3],B[4],B[1],B[0]];
        return data;
    }
    async KQXSDaklak(){
        let body = await fetch.fetchData(url3);
        let B  = TachData.TachData(body);
        B.splice(18,18);
        let data = [B[17],B[16],B[15],B[13],B[14],B[6],B[7],B[8],B[9],B[10],B[11],B[12],B[5],B[2],B[3],B[4],B[1],B[0]];
        return data;
    }
    async KQXSDakNong(){
        let body = await fetch.fetchData(url4);
        let B  = TachData.TachData(body);
        B.splice(18,18);
        let data = [B[17],B[16],B[15],B[13],B[14],B[6],B[7],B[8],B[9],B[10],B[11],B[12],B[5],B[2],B[3],B[4],B[1],B[0]];
        return data;
    }
    async KQXSGiaLai(){
        let body = await fetch.fetchData(url5);
        let B = TachData.TachData(body);
        B.splice(18,18);
        let data = [B[17],B[16],B[15],B[13],B[14],B[6],B[7],B[8],B[9],B[10],B[11],B[12],B[5],B[2],B[3],B[4],B[1],B[0]];
        return data;
    }
    async KQXSKhanhHoa(){
        let body = await fetch.fetchData(url6);
        let B = TachData.TachData(body);
        B.splice(18,18);
        let data = [B[17],B[16],B[15],B[13],B[14],B[6],B[7],B[8],B[9],B[10],B[11],B[12],B[5],B[2],B[3],B[4],B[1],B[0]];
        return data;
    }
    async KQXSKonTum(){
        let body = await fetch.fetchData(url7);
        let B = TachData.TachData(body);
        B.splice(18,18);
        let data = [B[17],B[16],B[15],B[13],B[14],B[6],B[7],B[8],B[9],B[10],B[11],B[12],B[5],B[2],B[3],B[4],B[1],B[0]];
        return data;
    }
    async KQXSNinhThuan(){
        let body = await fetch.fetchData(url8);
        let B = TachData.TachData(body);
        B.splice(18,18);
        let data = [B[17],B[16],B[15],B[13],B[14],B[6],B[7],B[8],B[9],B[10],B[11],B[12],B[5],B[2],B[3],B[4],B[1],B[0]];
        return data;
    }
    async KQXSPhuYen(){
        let body = await fetch.fetchData(url9);
        let B = TachData.TachData(body);
        B.splice(18,18);
        let data = [B[17],B[16],B[15],B[13],B[14],B[6],B[7],B[8],B[9],B[10],B[11],B[12],B[5],B[2],B[3],B[4],B[1],B[0]];
        return data;
    }
    async KQXSQuangBinh(){
        let body = await fetch.fetchData(url10);
        let B = TachData.TachData(body);
        B.splice(18,18);
        let data = [B[17],B[16],B[15],B[13],B[14],B[6],B[7],B[8],B[9],B[10],B[11],B[12],B[5],B[2],B[3],B[4],B[1],B[0]];
        return data;
    }
    async KQXSQuangNam(){
        let body = await fetch.fetchData(url11);
        let B = TachData.TachData(body);
        B.splice(18,18);
        let data = [B[17],B[16],B[15],B[13],B[14],B[6],B[7],B[8],B[9],B[10],B[11],B[12],B[5],B[2],B[3],B[4],B[1],B[0]];
        return data;
    }
    async KQXSQuangNgai(){
        let body = await fetch.fetchData(url12);
        let B = TachData.TachData(body);
        B.splice(18,18);
        let data = [B[17],B[16],B[15],B[13],B[14],B[6],B[7],B[8],B[9],B[10],B[11],B[12],B[5],B[2],B[3],B[4],B[1],B[0]];
        return data;
    }
    async KQXSQuangTri(){
        let body = await fetch.fetchData(url13);
        let B = TachData.TachData(body);
        B.splice(18,18);
        let data = [B[17],B[16],B[15],B[13],B[14],B[6],B[7],B[8],B[9],B[10],B[11],B[12],B[5],B[2],B[3],B[4],B[1],B[0]];
        return data;
    }
    async KQXSThuaThienHue(){
        let body = await fetch.fetchData(url14);
        let B = TachData.TachData(body);
        B.splice(18,18);
        let data = [B[17],B[16],B[15],B[13],B[14],B[6],B[7],B[8],B[9],B[10],B[11],B[12],B[5],B[2],B[3],B[4],B[1],B[0]];
        return data;
    } 
    
}
module.exports = KQXSMT_XSM;