var fetch = require("../FetchUrl");
var TachData = require("./Tachdata");
var Convert = require("./ConvertData");
//URL
var url = "http://ketquaxoso.24h.com.vn/xo-so-an-giang/";
var url2 = "http://ketquaxoso.24h.com.vn/xo-so-bac-lieu/";
var url3 = "http://ketquaxoso.24h.com.vn/xo-so-ben-tre/";
var url4 = "http://ketquaxoso.24h.com.vn/xo-so-binh-duong/";
var url5 = "http://ketquaxoso.24h.com.vn/xo-so-binh-phuoc/";
var url6 = "http://ketquaxoso.24h.com.vn/xo-so-binh-thuan/";
var url7 = "http://ketquaxoso.24h.com.vn/xo-so-ca-mau/";
var url8 = "http://ketquaxoso.24h.com.vn/xo-so-can-tho/";
var url9 = "http://ketquaxoso.24h.com.vn/xo-so-dong-nai/";
var url10 = "http://ketquaxoso.24h.com.vn/xo-so-dong-thap/";
var url11 = "http://ketquaxoso.24h.com.vn/xo-so-hau-giang/";
var url12 = "http://ketquaxoso.24h.com.vn/xo-so-long-an/";
var url13 = "http://ketquaxoso.24h.com.vn/xo-so-soc-trang/";
var url14 = "http://ketquaxoso.24h.com.vn/xo-so-tay-ninh/";
var url15 = "http://ketquaxoso.24h.com.vn/xo-so-tp-ho-chi-minh/";
var url16 = "http://ketquaxoso.24h.com.vn/xo-so-kien-giang/";
var url17 = "http://ketquaxoso.24h.com.vn/xo-so-tien-giang/";
var url18 = "http://ketquaxoso.24h.com.vn/xo-so-vung-tau/";
var url19 = "http://ketquaxoso.24h.com.vn/xo-so-vinh-long/";
var url20 = "http://ketquaxoso.24h.com.vn/xo-so-tra-vinh/";
//
class KQXSMN{
    constructor(){
    }
    async KQXSAnGiang(){
        let body = await fetch.fetchData(url);
        let data = await TachData.TachData(body);
        let D = Convert.ConvertData18(data);
        return D;
    }
    async KQXSBacLieu(){
        let body = await fetch.fetchData(url2);
        let data = await TachData.TachData(body);
        let D = Convert.ConvertData18(data);
        return D;
    }
    async KQXSBenTre(){
        let body = await fetch.fetchData(url3);
        let data = await TachData.TachData(body);
        let D = Convert.ConvertData18(data);
        return D;
    }
    async KQXSBinhDuong(){
        let body = await fetch.fetchData(url4);
        let data = await TachData.TachData(body);
        let D = Convert.ConvertData18(data);
        return D;
    }
    async KQXSBinhPhuoc(){
        let body = await fetch.fetchData(url5);
        let data = await TachData.TachData(body);
        let D = Convert.ConvertData18(data);
        return D;
    }
    async KQXSBinhThuan(){
        let body = await fetch.fetchData(url6);
        let data =await TachData.TachData(body);
        let D = Convert.ConvertData18(data);
        return D;
    }
    async KQXSCaMau(){
        let body = await fetch.fetchData(url7);
        let data = await TachData.TachData(body);
        let D = Convert.ConvertData18(data);
        return D;
    }
    async KQXSCanTho(){
        let body = await fetch.fetchData(url8);
        let data = await TachData.TachData(body);
        let D = Convert.ConvertData18(data);
        return D;
    }
    async KQXSDongNai(){
        let body = await fetch.fetchData(url9);
        let data = await TachData.TachData(body);
        let D = Convert.ConvertData18(data);
        return D;
    } 
    async KQXSDongThap(){
        let body = await fetch.fetchData(url10);
        let data = await TachData.TachData(body);
        let D = Convert.ConvertData18(data);
        return D;
    }
    async KQXSHauGiang(){
        let body = await fetch.fetchData(url11);
        let data = await TachData.TachData(body);
        let D = Convert.ConvertData18(data);
        return D;
    }
    async KQXSLongAn(){
        let body = await fetch.fetchData(url12);
        let data = await TachData.TachData(body);
        let D = Convert.ConvertData18(data);
        return D;
    }
    async KQXSSocTrang(){
        let body = await fetch.fetchData(url13);
        let data = await TachData.TachData(body);
        let D = Convert.ConvertData18(data);
        return D;
    }
    async KQXSTayNinh(){
        let body = await fetch.fetchData(url14);
        let data = await TachData.TachData(body);
        let D = Convert.ConvertData18(data);
        return D;
    }
    async KQXSHoChiMinh(){
        let body = await fetch.fetchData(url15);
        let data = await TachData.TachData(body);
        let D = Convert.ConvertData18(data);
        return D;
    }
    async KQXSKienGiang(){
        let body = await fetch.fetchData(url16);
        let data = await TachData.TachData(body);
        let D = Convert.ConvertData18(data);
        return D;
    }
    async KQXSTienGiang(){
        let body = await fetch.fetchData(url17);
        let data =  await TachData.TachData(body);
        let D = Convert.ConvertData18(data);
        return D;
    }
    async KQXSVungTau(){
        let body = await fetch.fetchData(url18);
        let data = await TachData.TachData(body);
        let D = Convert.ConvertData18(data);
        return D;
    }
    async KQXSVinhLong(){
        let body = await fetch.fetchData(url19);
        let data = await TachData.TachData(body);
        let D = Convert.ConvertData18(data);
        return D;
    }
    async KQXSTraVinh(){
        let body = await fetch.fetchData(url20);
        let data = await TachData.TachData(body);
        let D = Convert.ConvertData18(data);
        return D;
    }
}
module.exports = KQXSMN;