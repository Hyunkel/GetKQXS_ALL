var express = require('express');
var app = express();
var curl = require("curl");
// curl.get("http://localhost:3002/kqxsmb",function (err,response,body) {
//     console.log(body);
    
// })
// curl.get("http://localhost:3002/kqxsmn/kqxsag",function (err,response,body) {
//     console.log(body);
    
// })
// curl.get("http://localhost:3002/kqxsmt/kqxskh",function (err,response,body) {
//     console.log(body);
    
// })
//connect DB
var ConnectMongoDB = require('./MongoDB/connect');
ConnectMongoDB();

var mongoose = require("mongoose");
var ModelAG = require("./MongoDB/Model/ModelMN/ModelAnGiang");

var set = require("./SetTimeRun/TimeRunCode");
var set2 = require("./SetTimeRun/TimeRunCodeMN");
var set3 = require("./SetTimeRun/TimeRunCodeMT");
var SetTimeRun1 = new set;
var SetTimeRunMN = new set2;
var SetTimeRunMT = new set3;
//
var savefile = require("./SetTimeRun/SetTimeSaveFile");
savefile.TimeRunSaveFile();
//
SetTimeRun1.Run();
SetTimeRunMN.Run();
SetTimeRunMT.Run();
//router
var KQXSMB = require("./Router/KQXSMB/MB");
var KQXSMN = require("./Router/KQXSMN/MN");
var KQXSMT = require("./Router/KQXSMT/RouterMT")
//Use Router
app.use('/kqxsmb',KQXSMB);
app.use("/kqxsmn",KQXSMN);
app.use("/kqxsmt",KQXSMT);
app.listen(3006,function () {
    console.log('Port 3005 Running');
})