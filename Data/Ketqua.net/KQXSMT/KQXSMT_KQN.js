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
var url1 ='http://ketqua.net/xo-so-binh-dinh.php';
var url2 ='http://ketqua.net/xo-so-da-nang.php';
var url3 ='http://ketqua.net/xo-so-dac-lac.php';
var url4 = 'http://ketqua.net/xo-so-dac-nong.php';
var url5 = 'http://ketqua.net/xo-so-gia-lai.php';
var url6 = 'http://ketqua.net/xo-so-khanh-hoa.php';
var url7 = 'http://ketqua.net/xo-so-kon-tum.php';
var url8 ='http://ketqua.net/xo-so-ninh-thuan.php';
var url9 ='http://ketqua.net/xo-so-phu-yen.php';
var url10 ='http://ketqua.net/xo-so-quang-binh.php';
var url11 ='http://ketqua.net/xo-so-quang-nam.php';
var url12 ='http://ketqua.net/xo-so-quang-ngai.php';
var url13 ='http://ketqua.net/xo-so-quang-tri.php';
var url14 ='http://ketqua.net/xo-so-thua-thien-hue.php'

//
class KQXSMT_KQN{
    constructor(){
    }
    async KQXSBinhDinh(){
        let body = await fetch.fetchData(url1);
        let data = TachData.TachDataKQN(body,DataSelect);
        return data;
    }
    async KQXSDaNang(){
        let body = await fetch.fetchData(url2);
        let data = TachData.TachDataKQN(body,DataSelect);
        return data;
    }
    async KQXSDaklak(){
        let body = await fetch.fetchData(url3);
        let data = TachData.TachDataKQN(body,DataSelect);
        return data;
    }
    async KQXSDakNong(){
        let body = await fetch.fetchData(url4);
        let data = TachData.TachDataKQN(body,DataSelect);
        return data;
    }
    async KQXSGiaLai(){
        let body = await fetch.fetchData(url5);
        let data = TachData.TachDataKQN(body,DataSelect);
        return data;
    }
    async KQXSKhanhHoa(){
        let body = await fetch.fetchData(url6);
        let data = TachData.TachDataKQN(body,DataSelect);
        return data;
    }
    async KQXSKonTum(){
        let body = await fetch.fetchData(url7);
        let data = TachData.TachDataKQN(body,DataSelect);
        return data;
    }
    async KQXSNinhThuan(){
        let body = await fetch.fetchData(url8);
        let data = TachData.TachDataKQN(body,DataSelect);
        return data;
    }
    async KQXSPhuYen(){
        let body = await fetch.fetchData(url9);
        let data = TachData.TachDataKQN(body,DataSelect);
        return data;
    }
    async KQXSQuangBinh(){
        let body = await fetch.fetchData(url10);
        let data = TachData.TachDataKQN(body,DataSelect);
        return data;
    }
    async KQXSQuangNam(){
        let body = await fetch.fetchData(url11);
        let data = await TachData.TachDataKQN(body,DataSelect);
        return data;
    }
    async KQXSQuangNgai(){
        let body = await fetch.fetchData(url12);
        let data = TachData.TachDataKQN(body,DataSelect);
        return data;
    }
    async KQXSQuangTri(){
        let body = await fetch.fetchData(url13);
        let data = TachData.TachDataKQN(body,DataSelect);
        return data;
    }
    async KQXSThuaThienHue(){
        let body = await fetch.fetchData(url14);
        let data = TachData.TachDataKQN(body,DataSelect);
        return data;
    } 
    
}
module.exports = KQXSMT_KQN;