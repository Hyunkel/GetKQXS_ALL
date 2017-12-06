async function ConvertTime() {
    var X = new Date();
    var year = X.getFullYear();
    var date = X.getDate();
    var Mouth = X.getMonth()+1;
    var data = date +'-'+ Mouth+'-'+year;
    return data;
}
module.exports = {ConvertTime};