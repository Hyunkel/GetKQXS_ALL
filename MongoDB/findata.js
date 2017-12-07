/**
 * 
 * @param {*Model cua collection can timkiem} Model 
 * @param {*nhung Phan Tu Dc Select} options 
 */
var convert = require("./convertTime");
let timeforid = convert.ConvertTime();

async function FindDataLast(Model,options,ID) {
    let data = await Model.findById(ID,options);
    console.log('Find with id:',ID)
    return data;
}
module.exports = {FindDataLast};