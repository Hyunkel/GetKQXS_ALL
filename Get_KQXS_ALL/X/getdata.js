var KQXSMB = require("../MongoDB/Model/ModelKQ_Chuan/KQ_MB_Chuan");
var KQXSMN = require("../MongoDB/Model/ModelKQ_Chuan/KQ_MN_Chuan");
var KQXSMT = require("../MongoDB/Model/ModelKQ_Chuan/KQ_MT_Chuan");
//
async function GetDataKQXS(Model) {
    var run  = await Model.find({});
    return run;
}
class GetDataKQXSNow{
    constructor(){
    }
    
    async GetDataKQXSMB(){
        let data = await GetDataKQXS(KQXSMB);
        return data;
    }
    async GetDataKQXSMN(){
        let data = await GetDataKQXS(KQXSMN);
        return data;
    }
    async GetDataKQXSMT(){
        let data = await GetDataKQXS(KQXSMT);
        return data;
    }
}
module.exports = GetDataKQXSNow;