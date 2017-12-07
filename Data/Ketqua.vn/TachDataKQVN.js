var cheerio = require("cheerio");

function TachData(body,DataSelect) {
    var $ = cheerio.load(body);
    var DataKetQuaVN =[];
    for(let i=0;i<DataSelect.length;i++){
        let a = $(DataSelect[i]).text();
        DataKetQuaVN.push(a);
        //console.log('data',DataKetQuaVN)
    }
    return DataKetQuaVN;
}
module.exports = {TachData};