/**
 * 
 */
var mongoose = require("mongoose");
var fetch = require("../../FetchUrl");
var TachData = require("../TachDataKQVN");
var _ = require("lodash");
//
var url = 'https://ketqua.vn/';
//
class KQXSMB{
    constructor(){

    }
    async KQXSMB(){
        let body = await fetch.fetchData(url);
        let DataSelect = ['.mb_g0','.mb_g1','.mb_g21','.mb_g22',
        '.mb_g31','.mb_g32','.mb_g33','.mb_g34','.mb_g35','.mb_g36',
        '.mb_g41','.mb_g42','.mb_g43','.mb_g44',
        '.mb_g51','.mb_g52','.mb_g53','.mb_g54','.mb_g55','.mb_g56',
        '.mb_g61','.mb_g62','.mb_g63',
        '.mb_g71','.mb_g72','.mb_g73','.mb_g74'];
        let data = TachData.TachData(body,DataSelect);
        return data;
    }
}
module.exports = KQXSMB;