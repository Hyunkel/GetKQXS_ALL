var cheerio = require("cheerio");

function TachData(body) {
    var $ = cheerio.load(body);
    var DataOfXoSoMe = [];
    $('.number b').each(function () {
        // console.log($(this).text());
        DataOfXoSoMe.push(($(this).text()));
      });
      //console.log('DATAXSM',DataOfXoSoMe);
    return DataOfXoSoMe;
}
module.exports = {TachData};