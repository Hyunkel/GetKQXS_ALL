var cheerio = require("cheerio");
var _ = require('lodash');
function TachDataKQN(body,DataSelect) {
    var $ = cheerio.load(body);
    var DataKetQua =[];
    for(let i=0;i<DataSelect.length;i++){
        let a = $(DataSelect[i]).text();
        DataKetQua.push(a);
        // console.log('data',DataKetQua)
    }
    // console.log('data',DataKetQua)
    return DataKetQua;
}
module.exports = {TachDataKQN};