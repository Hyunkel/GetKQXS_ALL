////MongoDb
var mongoose = require("mongoose");
var express = require('express');
var router = express.Router();
var Find = require("../../MongoDB/findata");
var Model = require("../../MongoDB/Model/ModelKQ_Chuan/KQ_MB_Chuan");
//
router.get('/',async function (req,res) {
    let options = {_id:0,KetQuaXSMB_Chuan:1};
    // let X = await Find.FindDataLast(Model,options);
    if(req.query.id){
    let id = req.query.id;
    console.log(id);
    let data = await Model.findById(id,options)
    res.send(data);
    }else{
        let data2 = await Model.findOne().sort({_id:-1}).select({__v:0});
        res.send(data2);
    }
})

module.exports = router;