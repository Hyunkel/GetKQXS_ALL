var mongoose = require("mongoose");
var express = require('express');
var router = express.Router();
var Model = require("../../MongoDB/Model/ModelKQ_Chuan/KQ_MT_Chuan");
router.get('/kqxskt',async function (req,res) {
    let options = {
        _id:0,
        KetQuaXSKonTum_Chuan:1,
    }
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
router.get('/kqxsdl',async function (req,res) {
    let options = {
        _id:0,
        KetQuaXSDakLak_Chuan:1,
    }
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
router.get('/kqxsdno',async function (req,res) {
    let options = {
        _id:0,
        KetQuaXSDakNong_Chuan:1,
    }
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
router.get('/kqxsdna',async function (req,res) {
    let options = {
        _id:0,
        KetQuaXSDaNang_Chuan:1,
    }
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
router.get('/kqxsqt',async function (req,res) {
    let options = {
        _id:0,
        KetQuaXSQuangTri_Chuan:1,
    }
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
router.get('/kqxsqb',async function (req,res) {
    let options = {
        _id:0,
        KetQuaXSQuangBinh_Chuan:1,
    }
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
router.get('/kqxsqnai',async function (req,res) {
    let options = {
        _id:0,
        KetQuaXSQuangNgai_Chuan:1,
    }
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
router.get('/kqxspy',async function (req,res) {
    let options = {
        _id:0,
        KetQuaXSPhuYen_Chuan:1,
    }
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
router.get('/kqxstth',async function (req,res) {
    let options = {
        _id:0,
        KetQuaXSThuaThienHue_Chuan:1,
    }
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
router.get('/kqxskh',async function (req,res) {
    let options = {
        _id:0,
        KetQuaXSKhanhHoa_Chuan:1,
    }
    if(req.query.id){
    let id = req.query.id;
    console.log(id);
    let data = await Model.findById(id,options);
    res.send(data);
    }else{
        let data2 = await Model.findOne().sort({_id:-1}).select({__v:0});
        res.send(data2);
    }
})
router.get('/kqxsnt',async function (req,res) {
    let options = {
        _id:0,
        KetQuaXSNinhThuan_Chuan:1,
    }
    if(req.query.id){
    let id = req.query.id;
    console.log(id);
    let data = await Model.findById(id,options);
    res.send(data);
    }else{
        let data2 = await Model.findOne().sort({_id:-1}).select({__v:0});
        res.send(data2);
    }
})
router.get('/kqxsqnam',async function (req,res) {
    let options = {
        _id:0,
        KetQuaXSQuangNam_Chuan:1,
    }
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
router.get('/kqxsgl',async function (req,res) {
    let options = {
        _id:0,
        KetQuaXSGiaLai_Chuan:1,
    }
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