var fetch = require("../FetchUrl");
var TachData = require("./Tachdata");
var Convert = require("./ConvertData");
//URL
var url = "http://ketquaxoso.24h.com.vn/xo-so-binh-dinh/";
var url2 ="http://ketquaxoso.24h.com.vn/xo-so-da-nang/";
var url3 ="http://ketquaxoso.24h.com.vn/xo-so-dac-lac/";
var url4 ="http://ketquaxoso.24h.com.vn/xo-so-dac-nong/";
var url5 ="http://ketquaxoso.24h.com.vn/xo-so-gia-lai/";
var url6 ="http://ketquaxoso.24h.com.vn/xo-so-khanh-hoa/";
var url7 ="http://ketquaxoso.24h.com.vn/xo-so-kon-tum/";
var url8 ="http://ketquaxoso.24h.com.vn/xo-so-ninh-thuan/";
var url9 ="http://ketquaxoso.24h.com.vn/xo-so-phu-yen/";
var url10 ="http://ketquaxoso.24h.com.vn/xo-so-quang-binh/";
var url11 = "http://ketquaxoso.24h.com.vn/xo-so-quang-ngai/";
var url12 = "http://ketquaxoso.24h.com.vn/xo-so-quang-tri/";
var url13 = "http://ketquaxoso.24h.com.vn/xo-so-quang-nam/";
var url14 ="http://ketquaxoso.24h.com.vn/xo-so-thua-thien-hue/";
class KQXSMT{
    constructor(){

    }
    async KQXSBinhDinh(){
        let body = await fetch.fetchData(url);
        let data = await TachData.TachData(body);
        let D = Convert.ConvertData18(data);
        return D;
    }
    async KQXSDaNang(){
        let body = await fetch.fetchData(url2);
        let data =await TachData.TachData(body);
        let D = Convert.ConvertData18(data);
        return D;
    }
    async KQXSDakLak(){
        let body = await fetch.fetchData(url3);
        let data = await TachData.TachData(body);
        let D = Convert.ConvertData18(data);
        return D;
    }
    async KQXSDakNong(){
        let body = await fetch.fetchData(url4);
        let data = await TachData.TachData(body);
        let D = Convert.ConvertData18(data);
        return D;
    }
    async KQXSGiaLai(){
        let body = await fetch.fetchData(url5);
        let data = await TachData.TachData(body);
        let D = Convert.ConvertData18(data);
        return D;
    }
    async KQXSKhanhHoa(){
        let body = await fetch.fetchData(url6);
        let data = await TachData.TachData(body);
        let D = Convert.ConvertData18(data);
        return D;
    }
    async KQXSKonTum(){
        let body = await fetch.fetchData(url7);
        let data = await TachData.TachData(body);
        let D = Convert.ConvertData18(data);
        return D;
    }
    async KQXSNinhThuan(){
        let body = await fetch.fetchData(url8);
        let data = await TachData.TachData(body);
        let D = Convert.ConvertData18(data);
        return D;
    }
    async KQXSPhuYen(){
        let body = await fetch.fetchData(url9);
        let data = await TachData.TachData(body);
        let D = Convert.ConvertData18(data);
        return D;
    }
    async KQXSQuangBinh(){
        let body = await fetch.fetchData(url10);
        let data = await TachData.TachData(body);
        let D = Convert.ConvertData18(data);
        return D;
    }
    async KQXSBQuangNgai(){
        let body = await fetch.fetchData(url11);
        let data =await TachData.TachData(body);
        let D = Convert.ConvertData18(data);
        return D;
    }
    async KQXSQuangTri(){
        let body = await fetch.fetchData(url12);
        let data = await TachData.TachData(body);
        let D = Convert.ConvertData18(data);
        return D;
    }
    async KQXSBQuangNam(){
        let body = await fetch.fetchData(url13);
        let data = await TachData.TachData(body);
        let D = Convert.ConvertData18(data);
        return D;
    }
    async KQXSThuaThienHue(){
        let body = await fetch.fetchData(url14);
        let data =await TachData.TachData(body);
        let D = Convert.ConvertData18(data);
        return D;
    }
}
module.exports = KQXSMT;