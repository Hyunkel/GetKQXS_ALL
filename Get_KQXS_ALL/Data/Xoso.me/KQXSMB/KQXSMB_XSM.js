/**
 * 
 */
var mongoose = require("mongoose");
var fetch = require("../../FetchUrl");
var TachData = require("../TachDataXSM");
var _ = require("lodash");
//
var url = 'http://xoso.me/kqxsmb-xstd-ket-qua-xo-so-mien-bac.html';
//
class KQXSMB_XSM{
    constructor(){

    }
    async KQXSMB(){
        let body = await fetch.fetchData(url);
        let data = TachData.TachData(body).splice(0,27);
        return data;
    }
}
module.exports = KQXSMB_XSM;