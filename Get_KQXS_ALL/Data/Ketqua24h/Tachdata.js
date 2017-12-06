var cheerio = require("cheerio");
var fetch = require("../FetchUrl");
async function TachData(body) {
    var $ = cheerio.load(body);
    var DataXSKT =[];
    // let a = $('.result em').each(function () {
    //     // console.log($(this).text());
    //     DataXSKT.push(($(this).text()));
    //   });
      let b = $('.number_kq').each(function () {
        // console.log($(this).text());
        DataXSKT.push(($(this).text()));
      });
      return DataXSKT;
}
module.exports = {TachData};