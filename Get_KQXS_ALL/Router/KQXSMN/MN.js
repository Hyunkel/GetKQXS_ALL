////MongoDb
var mongoose = require("mongoose");
var express = require('express');
var router = express.Router();
var Model = require("../../MongoDB/Model/ModelKQ_Chuan/KQ_MN_Chuan");
//
router.get('/kqxsag',async function (req,res) {
    let options = {
        _id:0,
        KetQuaXSAnGiang_Chuan:1,
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
router.get('/kqxsbl',async function (req,res) {
    let options = {
        _id:0,
        KetQuaXSBacLieu_Chuan:1,
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
router.get('/kqxsbtr',async function (req,res) {
    let options = {
        _id:0,
        KetQuaXSBenTre_Chuan:1,
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
router.get('/kqxsbp',async function (req,res) {
    let options = {
        _id:0,
        KetQuaXSBinhPhuoc_Chuan:1,
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
router.get('/kqxsbth',async function (req,res) {
    let options = {
        _id:0,
        KetQuaXSBinhThuan_Chuan:1,
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
router.get('/kqxscm',async function (req,res) {
    let options = {
        _id:0,
        KetQuaXSCaMau_Chuan:1,
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
router.get('/kqxsct',async function (req,res) {
    let options = {
        _id:0,
        KetQuaXSCanTho_Chuan:1,
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
        KetQuaXSDaLat_Chuan:1,
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
        KetQuaXSDongNai_Chuan:1,
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
router.get('/kqxsdt',async function (req,res) {
    let options = {
        _id:0,
        KetQuaXSDongThap_Chuan:1,
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
router.get('/kqxskg',async function (req,res) {
    let options = {
        _id:0,
        KetQuaXSKienGiang_Chuan:1,
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
router.get('/kqxshcm',async function (req,res) {
    let options = {
        _id:0,
        KetQuaXSHoChiMinh_Chuan:1,
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
router.get('/kqxsla',async function (req,res) {
    let options = {
        _id:0,
        KetQuaXSLongAn_Chuan:1,
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
router.get('/kqxshg',async function (req,res) {
    let options = {
        _id:0,
        KetQuaXSHauGiang_Chuan:1,
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
router.get('/kqxstv',async function (req,res) {
    let options = {
        _id:0,
        KetQuaXSTraVinh_Chuan:1,
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
router.get('/kqxstn',async function (req,res) {
    let options = {
        _id:0,
        KetQuaXSTayNinh_Chuan:1,
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
router.get('/kqxstg',async function (req,res) {
    let options = {
        _id:0,
        KetQuaXSTienGiang_Chuan:1,
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
router.get('/kqxsvt',async function (req,res) {
    let options = {
        _id:0,
        KetQuaXSVungTau_Chuan:1,
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
router.get('/kqxsst',async function (req,res) {
    let options = {
        _id:0,
        KetQuaXSSocTrang_Chuan:1,
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
router.get('/kqxsvl',async function (req,res) {
    let options = {
        _id:0,
        KetQuaXSVinhLong_Chuan:1,
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