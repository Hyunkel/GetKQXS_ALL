var fetch = require("../FetchUrl");
var TachData = require("./Tachdata");
var Convert = require("./ConvertData");

//
var url  = "http://ketquaxoso.24h.com.vn/xo-so-mien-bac/";
class KQXSMB{
    constructor(){
    }
    async KQXSMB(){
        let body = await fetch.fetchData(url);
        let data = await TachData.TachData(body);
        let D = Convert.ConvertData27(data);
        return D;
    }
}
module.exports = KQXSMB;