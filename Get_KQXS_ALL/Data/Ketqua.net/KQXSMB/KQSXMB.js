/**
 * 
 */
var mongoose = require("mongoose");
var fetch = require("../../FetchUrl");
var TachData = require("../TachDataKQN");
var _ = require("lodash");
//
var url = 'http://ketqua.net/';
//
class KQXSMB{
    constructor(){

    }
    async KQXSMB(){
        let body = await fetch.fetchData(url);
        let DataSelect = [ '#rs_0_0',
        '#rs_1_0',
        '#rs_2_0','#rs_2_1',
        '#rs_3_0','#rs_3_1','#rs_3_2','#rs_3_3','#rs_3_4','#rs_3_5',
        '#rs_4_0','#rs_4_1','#rs_4_2','#rs_4_3',
        '#rs_5_0','#rs_5_1','#rs_5_2','#rs_5_3','#rs_5_4','#rs_5_5',
        '#rs_6_0','#rs_6_1','#rs_6_2',
        '#rs_7_0','#rs_7_1','#rs_7_2','#rs_7_3'];
        let data = TachData.TachDataKQN(body,DataSelect);
        return data;
    }
}
module.exports = KQXSMB;