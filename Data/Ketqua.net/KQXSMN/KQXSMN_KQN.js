/**
 * 
 */
var mongoose = require("mongoose");
var fetch = require("../../FetchUrl");
var TachData = require("../TachDataKQN");
var _ = require("lodash");

//
var DataSelect = [
    '#rs_0_0',
    '#rs_1_0',
    '#rs_2_0'   ,
    '#rs_3_0','#rs_3_1',
    '#rs_4_0','#rs_4_1','#rs_4_2','#rs_4_3','#rs_4_4','#rs_4_5','#rs_4_6',
    '#rs_5_0',
    '#rs_6_0','#rs_6_1','#rs_6_2',
    '#rs_7_0',
    '#rs_8_0',
    ];
//
var url1 ='http://ketqua.net/xo-so-an-giang.php';
var url2 ='http://ketqua.net/xo-so-bac-lieu.php';
var url3 = 'http://ketqua.net/xo-so-ben-tre.php';
var url4 ='http://ketqua.net/xo-so-binh-duong.php';
var url5 ='http://ketqua.net/xo-so-binh-phuoc.php';
var url6 ='http://ketqua.net/xo-so-binh-thuan.php';
var url7 = 'http://ketqua.net/xo-so-ca-mau.php';
var url8 ='http://ketqua.net/xo-so-can-tho.php';
var url9 = 'http://ketqua.net/xo-so-da-lat.php';
var url10 = 'http://ketqua.net/xo-so-dong-nai.php';
var url11 ='http://ketqua.net/xo-so-dong-thap.php';
var url12 = 'http://ketqua.net/xo-so-hau-giang.php';
var url13 ='http://ketqua.net/xo-so-ho-chi-minh.php';
var url14 ='http://ketqua.net/xo-so-kien-giang.php';
var url15 ='http://ketqua.net/xo-so-long-an.php';
var url16 ='http://ketqua.net/xo-so-soc-trang.php';
var url17 ='http://ketqua.net/xo-so-tay-ninh.php';
var url18 ='http://ketqua.net/xo-so-tien-giang.php';
var url19 ='http://ketqua.net/xo-so-tra-vinh.php';
var url20 = 'http://ketqua.net/xo-so-vinh-long.php';
var url21 ='http://ketqua.net/xo-so-vung-tau.php';


//
class KQXSMN_KQN{
    constructor(){
    }
    async KQXSAnGiang(){
        let body = await fetch.fetchData(url1);
        let data = TachData.TachDataKQN(body,DataSelect);
        return data;
    }
    async KQXSBacLieu(){
        let body = await fetch.fetchData(url2);
        let data = TachData.TachDataKQN(body,DataSelect);
        return data;
    }
    async KQXSBenTre(){
        let body = await fetch.fetchData(url3);
        let data = TachData.TachDataKQN(body,DataSelect);
        return data;
    }
    async KQXSBinhDuong(){
        let body = await fetch.fetchData(url4);
        let data = TachData.TachDataKQN(body,DataSelect);
        return data;
    }
    async KQXSBinhPhuoc(){
        let body = await fetch.fetchData(url5);
        let data = TachData.TachDataKQN(body,DataSelect);
        return data;
    }
    async KQXSBinhThuan(){
        let body = await fetch.fetchData(url6);
        let data = TachData.TachDataKQN(body,DataSelect);
        return data;
    }
    async KQXSCaMau(){
        let body = await fetch.fetchData(url7);
        let data = TachData.TachDataKQN(body,DataSelect);
        return data;
    }
    async KQXSCanTho(){
        let body = await fetch.fetchData(url8);
        let data = TachData.TachDataKQN(body,DataSelect);
        return data;
    }
    async KQXSDaLat(){
        let body = await fetch.fetchData(url9);
        let data = TachData.TachDataKQN(body,DataSelect);
        return data;
    }
    async KQXSDongNai(){
        let body = await fetch.fetchData(url10);
        let data = TachData.TachDataKQN(body,DataSelect);
        return data;
    }
    async KQXSDongThap(){
        let body = await fetch.fetchData(url11);
        let data = TachData.TachDataKQN(body,DataSelect);
        return data;
    }
    async KQXSHauGiang(){
        let body = await fetch.fetchData(url12);
        let data = TachData.TachDataKQN(body,DataSelect);
        return data;
    }
    async KQXSHoChiMinh(){
        let body = await fetch.fetchData(url13);
        let data = TachData.TachDataKQN(body,DataSelect);
        return data;
    }
    async KQXSKienGiang(){
        let body = await fetch.fetchData(url14);
        let data = TachData.TachDataKQN(body,DataSelect);
        return data;
    }
    async KQXSLongAn(){
        let body = await fetch.fetchData(url15);
        let data = TachData.TachDataKQN(body,DataSelect);
        return data;
    }
    async KQXSSocTrang(){
        let body = await fetch.fetchData(url16);
        let data = TachData.TachDataKQN(body,DataSelect);
        return data;
    }
    async KQXSTayNinh(){
        let body = await fetch.fetchData(url17);
        let data = TachData.TachDataKQN(body,DataSelect);
        return data;
    }
    async KQXSTienGiang(){
        let body = await fetch.fetchData(url18);
        let data = TachData.TachDataKQN(body,DataSelect);
        return data;
    }
    async KQXSTraVinh(){
        let body = await fetch.fetchData(url19);
        let data = TachData.TachDataKQN(body,DataSelect);
        return data;
    }
    async KQXSVinhLong(){
        let body = await fetch.fetchData(url20);
        let data = TachData.TachDataKQN(body,DataSelect);
        return data;
    }
    async KQXSVungTau(){
        let body = await fetch.fetchData(url21);
        let data = TachData.TachDataKQN(body,DataSelect);
        return data;
    }
    
    
}
module.exports = KQXSMN_KQN;