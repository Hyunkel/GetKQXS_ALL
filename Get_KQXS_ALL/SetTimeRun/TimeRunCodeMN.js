var mongoose = require("mongoose");
var CronJob = require("cron").CronJob;
var _ = require("lodash");
//cau truc
var cautruc = require("../MongoDB/cautrucgiai");
var convert = require("../MongoDB/convertTime");
var loop = require("./loopdata");
//model KQ chuan
var ModelChuan_MN = require("../MongoDB/Model/ModelKQ_Chuan/KQ_MN_Chuan");
        //XSAG=KETQUA.NET
var KQN = require("../Data/Ketqua.net/KQXSMN/KQXSMN_KQN");
var DataKQN = new KQN;
        //XSAG=KETQUA.VN
var KQVN = require("../Data/Ketqua.vn/KQXSMN/KQSXMN_KQVN");
var DataKQVN = new KQVN;
        //XSAG=XOSO.ME
var XSM = require("../Data/Xoso.me/KQXSMN/KQXSMN_XSM");
var DataXSM = new XSM;
      //
var kq24h = require("../Data/Ketqua24h/KQXSMN");
var DataKQ24H = new kq24h;
//Model XSMN
var ModelAG = require("../MongoDB/Model/ModelMN/ModelAnGiang");
var ModelBL = require("../MongoDB/Model/ModelMN/ModelBacLieu");
var ModelBTr = require("../MongoDB/Model/ModelMN/ModelBenTre");
var ModelBD = require("../MongoDB/Model/ModelMN/ModelBinhDuong");
var ModelBP = require("../MongoDB/Model/ModelMN/ModelBinhPhuoc");
var ModelBThuan = require("../MongoDB/Model/ModelMN/ModelBinhThuan");
var ModelCM = require("../MongoDB/Model/ModelMN/ModelCaMau");
var ModelCT = require("../MongoDB/Model/ModelMN/ModelCanTho");
var ModelDL = require("../MongoDB/Model/ModelMN/ModelDaLat");
var ModelDN = require("../MongoDB/Model/ModelMN/ModelDongNai");
var ModelDT = require("../MongoDB/Model/ModelMN/ModelDongThap");
var ModelHG = require("../MongoDB/Model/ModelMN/ModelHauGiang");
var ModelHCM = require("../MongoDB/Model/ModelMN/ModelHoChiMinh");
var ModelKG = require("../MongoDB/Model/ModelMN/ModelKienGiang");
var ModelLA = require("../MongoDB/Model/ModelMN/ModelLongAn");
var ModelST = require("../MongoDB/Model/ModelMN/ModelSocTrang");
var ModelTN = require("../MongoDB/Model/ModelMN/ModelTayNinh");
var ModelTG = require("../MongoDB/Model/ModelMN/ModelTiengGiang");
var ModelTV = require("../MongoDB/Model/ModelMN/ModelTraVinh");
var ModelVL = require("../MongoDB/Model/ModelMN/ModelVinhLong");
var ModelVungTau = require("../MongoDB/Model/ModelMN/ModelVungTau");

class SetTime{
    constructor(){

    }
    async  CreatDocumentNewDayForKQ_Chuan() {
      let a = new CronJob({
        cronTime: '00 14 16 * * *',
        onTick:  async function() {
          var id = await convert.ConvertTime();
          let run = await ModelChuan_MN.insertMany({_id:id});
          let create1 = await ModelAG.insertMany({_id:id});
          let create2 = await ModelBL.insertMany({_id:id});
          let create3 = await ModelBTr.insertMany({_id:id});
          let create4 = await ModelBD.insertMany({_id:id});
          let create5 = await ModelBP.insertMany({_id:id});
          let create6 = await ModelBThuan.insertMany({_id:id});
          let create7 = await ModelCM.insertMany({_id:id});
          let create8 = await ModelCT.insertMany({_id:id});
          let create9 = await ModelDL.insertMany({_id:id});
          let create10 = await ModelDN.insertMany({_id:id});
          let create11 = await ModelDT.insertMany({_id:id});
          let create12 = await ModelHG.insertMany({_id:id});
          let create13 = await ModelHCM.insertMany({_id:id});
          let create14 = await ModelKG.insertMany({_id:id});
          let create15 = await ModelLA.insertMany({_id:id});
          let create16 = await ModelST.insertMany({_id:id});
          let create17 = await ModelTN.insertMany({_id:id});
          let create18 = await ModelTG.insertMany({_id:id});
          let create19 = await ModelTV.insertMany({_id:id});
          let create20 = await ModelVL.insertMany({_id:id});
          let create21 = await ModelVungTau.insertMany({_id:id});
          console.log('Tao Document KQXS_MN_CHUAN',id);
        },
        start: true,
        timeZone: 'Asia/Ho_Chi_Minh'
      });
    }
    // Run Code XS An giang
    async timeRun_XSAnGiang() {
        let a = new CronJob({
      cronTime: '00 15 16 * * 4',
      onTick:  async function() {
        
        let check =[];
        let X =0;
        var intervalObject = setInterval(async function () {
          var id = await convert.ConvertTime(); 
          let a2 =  (loop.loop2(await DataKQN.KQXSAnGiang()))
          let b2 =  loop.loop2(await DataKQVN.KQXSAnGiang());
          let c2=  (await DataXSM.KQXSAnGiang());
          let d2 =loop.loop2(await DataKQ24H.KQXSAnGiang());
          let data3 = {KetQuaXSAG_kqn :a2,KetQuaXSAG_kqvn:b2,KetQuaXSAG_xsm:c2,KetQuaXSAG_kq24h:d2};
          let run3 = await ModelAG.findByIdAndUpdate(id,data3);
          check = loop.check(a2,b2,c2,d2).reverse();
          console.log('check2',check)
          let data4 = cautruc.Cautrucgiai18(check);
          console.log('data',data4)
          let run4 = await ModelChuan_MN.findByIdAndUpdate(id,{KetQuaXSAnGiang_Chuan:data4});
          let tonum = _.pullAll(check,[""," "]);
          X = tonum.length;
          console.log("Dang Cap nhat KQXS AnGiang...");
          if(X == 18){
            console.log("Cap nhat KQXS AnGiang ThanhCong");
          clearInterval(intervalObject);
          } 
      }, 9000);
      },
      start: true,
      timeZone: 'Asia/Ho_Chi_Minh'
    });
    }
    // Run Code XS Bac Lieu
    async timeRun_XSBacLieu() {
        let a = new CronJob({
      cronTime: '00 15 16 * * 2',
      onTick:  async function() {
        let check =[];
        let X =0;
        var intervalObject = setInterval(async function () { 
          var id = await convert.ConvertTime();
          let a =  (loop.loop2(await DataKQN.KQXSBacLieu()))
          let b =  loop.loop2(await DataKQVN.KQXSBacLieu())
          let c =  (await DataXSM.KQXSBacLieu());
          let d = loop.loop2(await DataKQ24H.KQXSBacLieu());
          let data = {KetQuaXSBacLieu_kqn :a,KetQuaXSBacLieu_kqvn:b,KetQuaXSBacLieu_xsm:c,KetQuaXSBacLieu_kq24h:d};
          let run = await ModelBL.findByIdAndUpdate(id,data);
          check = loop.check(a,b,c,d);
          console.log('check',check);
          let data2 = cautruc.Cautrucgiai18(check.reverse());
          console.log('BacLieu',data2);
          let run2 = await ModelChuan_MN.findByIdAndUpdate(id,{KetQuaXSBacLieu_Chuan:data2});
          let tonum = _.pullAll(check,[""," "]);
          X = tonum.length;
          console.log("Dang Cap Nhat KQXS BacLieu")
          if(X == 18){
            console.log(" Cap Nhat KQXS BacLieu ThanhCong")
            clearInterval(intervalObject);
          } 
      }, 9000);
      },
      start: true,
      timeZone: 'Asia/Ho_Chi_Minh'
    });
    }
    // Run Code XS Ben tre
    async timeRun_XSBenTre() {
        let a = new CronJob({
      cronTime: '00 15 16 * * 2',
      onTick:  async function() {
        let check =[];
        let X =0;
        var intervalObject = setInterval(async function () {
          var id = await convert.ConvertTime(); 
          let a = (loop.loop2(await DataKQN.KQXSBenTre()))
          let b =  loop.loop2(await DataKQVN.KQXSBenTre())
          let c =  (await DataXSM.KQXSBenTre());
          let d = loop.loop2(await DataKQ24H.KQXSBenTre());
          let data = {KetQuaXSBenTre_kqn :a,KetQuaXSBenTre_kqvn:b,KetQuaXSBenTre_xsm:c,KetQuaXSBenTre_kq24h:d};
          let run = await ModelBTr.findByIdAndUpdate(id,data);
          check = loop.check(a,b,c,d);
          console.log('check',check);
          let data2 = cautruc.Cautrucgiai18(check.reverse());
          console.log("BenTre",data2);
          let run2 = await ModelChuan_MN.findByIdAndUpdate(id,{KetQuaXSBenTre_Chuan:data2});
          let tonum = _.pullAll(check,[""," "]);
          X = tonum.length;
          console.log("Dang Cap Nhat KQXS BenTre")
          if(X == 18){
            console.log(" Cap Nhat KQXS OK BenTre ThanhCong")
            clearInterval(intervalObject);
          } 
      }, 9000);
      },
      start: true,
      timeZone: 'Asia/Ho_Chi_Minh'
    });
    }
    // Run Code XS Binh Duong ..........................................
    async timeRun_XSBinhDuong() {
        let a = new CronJob({
      cronTime: '00 15 16 * * 5',
      onTick:  async function() {
        console.log("OK");
        let check =[];
        let X =0;
        var intervalObject = setInterval(async function () {
          var id = await convert.ConvertTime();
          let a =  (loop.loop2(await DataKQN.KQXSBinhDuong()));
          let b =  loop.loop2(await DataKQVN.KQXSBinhDuong());
          let c =  await DataXSM.KQXSBinhDuong();
          let data = {KetQuaXSBinhDuong_kqn :a,KetQuaXSBinhDuong_kqvn:b,KetQuaXSBinhDuong_xsm:c};
          let run = await ModelBD.findByIdAndUpdate(id,data);
          check = loop.check(a,b,c);
          console.log('check',check);
          let data2 = cautruc.Cautrucgiai18(check.reverse());
          console.log("BinhDuong",data2);
          console.log(data2);
          let run2 = await ModelChuan_MN.findByIdAndUpdate(id,{KetQuaXSBinhDuong_Chuan:data2});
          let tonum = _.pullAll(check,[""," "]);
          X = tonum.length;
          console.log("Dang Cap nhat KQXS BinhDuong...");
          if(X == 18){
            console.log(" Cap nhat KQXS BinhDuong ThanhCong");
            clearInterval(intervalObject); 
          } 
      }, 9000);
      },
      start: true,
      timeZone: 'Asia/Ho_Chi_Minh'
    });
    }
    // Run Code XS Binh Phuoc
    async timeRun_XSBinhPhuoc() {
        let a = new CronJob({
      cronTime: '00 15 16 * * 6',
      onTick:  async function() {
        let check =[];
        let X =0;
        var intervalObject = setInterval(async function () {
          var id = await convert.ConvertTime();
          let a =  (loop.loop2(await DataKQN.KQXSBinhPhuoc()))
          let b =  loop.loop2(await DataKQVN.KQXSBinhPhuoc())
          let c =  (await DataXSM.KQXSBinhPhuoc())
          let d =  loop.loop2(await DataKQ24H.KQXSBinhPhuoc());
          let data = {KetQuaXSBinhPhuoc_kqn :a,KetQuaXSBinhPhuoc_kqvn:b,KetQuaXSBinhPhuoc_xsm:c,KetQuaXSBinhPhuoc_kq24h:d};
          let run = await ModelBP.findByIdAndUpdate(id,data);
          check = loop.check(a,b,c,d);
          console.log('check',check);
          let data2 = cautruc.Cautrucgiai18(check.reverse());
          console.log('BinhPhuoc',data2);
          let run2 = await ModelChuan_MN.findByIdAndUpdate(id,{KetQuaXSBinhPhuoc_Chuan:data2});
          let tonum = _.pullAll(check,[""," "]);
          X = tonum.length;
          console.log("Dang Cap nhat KQXS  BinhPhuoc..");
          if(X == 18){
          // let n = cautruc.Cautrucgiai18c(check.reverse())
          // let runx = await ModelChuan_MN.findByIdAndUpdate(id,{KetQuaXSBinhPhuoc_Chuan:n});
          console.log("Cap nhat KQXS BinhPhuoc ThanhCong");
          clearInterval(intervalObject); 
          } 
      }, 9000);
      },
      start: true,
      timeZone: 'Asia/Ho_Chi_Minh'
    });
    }
    // Run Code XS Binh Phuoc
    async timeRun_XSBinhThuan() {
        let a = new CronJob({
      cronTime: '40 13 17 * * 4',
      onTick:  async function() {
        let check =[];
        let X =0;
        var intervalObject = setInterval(async function () {
          var id = await convert.ConvertTime(); 
          let a = (loop.loop2(await DataKQN.KQXSBinhThuan()))
          let b =  loop.loop2(await DataKQVN.KQXSBinhThuan())
          let c =  await DataXSM.KQXSBinhThuan()
          let d =  loop.loop2(await DataKQ24H.KQXSBinhThuan());
          let data = {KetQuaXSBinhThuan_kqn :a,KetQuaXSBinhThuan_kqvn:b,KetQuaXSBinhThuan_xsm:c,KetQuaXSBinhThuan_kq24h:d};
          let run = await ModelBThuan.findByIdAndUpdate(id,data);
          check = loop.check(a,b,c,d);
          console.log('check',check);
          let data2 = cautruc.Cautrucgiai18(check.reverse());
          console.log("BinhThuan",data2);
          let run2 = await ModelChuan_MN.findByIdAndUpdate(id,{KetQuaXSBinhThuan_Chuan:data2});
          let tonum = _.pullAll(check,[' ']);
          X = tonum.length;
          console.log("Dang Cap nhat KQXS BinhThuan..");
          console.log(X);
          if(X == 18){ 
          console.log("Cap nhat KQXS BinhThuan...ThanhCong");
          clearInterval(intervalObject); 
          } 
      }, 9000);
      },
      start: true,
      timeZone: 'Asia/Ho_Chi_Minh'
    });
    }  
    // Run Code XS ca Mau
    async timeRun_XSCaMau() {
        let a = new CronJob({
      cronTime: '02 15 16 * * 1',
      onTick:  async function() {       
        let check =[];
        let X =0;
        var intervalObject = setInterval(async function () {
          var id = await convert.ConvertTime(); 
          let a = (loop.loop2(await DataKQN.KQXSCaMau()));
          let b =  loop.loop2(await DataKQVN.KQXSCaMau());
          let c =  await DataXSM.KQXSCaMau();
          let d =  loop.loop2(await DataKQ24H.KQXSCaMau());
          let data = {KetQuaXSCaMau_kqn :a,KetQuaXSCaMau_kqvn:b,KetQuaXSCaMau_xsm:c,KetQuaXSCaMau_kq24h:d};
          let run = await ModelCM.findByIdAndUpdate(id,data);
          check = loop.check(a,b,c,d);
          console.log('check',check);
          let data2 = cautruc.Cautrucgiai18(check.reverse());
          console.log("CaMau",data2);
          let run2 = await ModelChuan_MN.findByIdAndUpdate(id,{KetQuaXSCaMau_Chuan:data2});
          let tonum = _.pullAll(check,[""," "]);
          X = tonum.length;
          console.log("Dang Cap Nhat KQXS CaMau.");
          if(X == 18){
          // let n = cautruc.Cautrucgiai18c(check.reverse())
          // let runx = await ModelChuan_MN.findByIdAndUpdate(id,{KetQuaXSCaMau_Chuan:n});
          console.log("Cap Nhat KQXS CaMau Thanh Cong");
          clearInterval(intervalObject); 
          } 
      }, 9000);
      },
      start: true,
      timeZone: 'Asia/Ho_Chi_Minh'
    });
    }   
        // Run Code XS Can Tho
    async timeRun_XSCanTho() {
      let a = new CronJob({
    cronTime: '00 15 16 * * 3',
    onTick:  async function() {
      
      let check =[];
      let X =0;
      var intervalObject = setInterval(async function () {
        var id = await convert.ConvertTime();
        let a =  (loop.loop2(await DataKQN.KQXSCanTho()));
        let b =  loop.loop2(await DataKQVN.KQXSCanTho());
        let c =  await DataXSM.KQXSCanTho();
        let d =  loop.loop2(await DataKQ24H.KQXSCanTho());
        let data = {KetQuaXSCanTho_kqn :a,KetQuaXSCanTho_kqvn:b,KetQuaXSCanTho_xsm:c,KetQuaXSCanTho_kq24h:d};
        let run = await ModelCT.findByIdAndUpdate(id,data);
        check = loop.check(a,b,c,d);
        let data2 = cautruc.Cautrucgiai18(check.reverse());
        console.log("KQXS CanTho Update...",data2)
        let run2 = await ModelChuan_MN.findByIdAndUpdate(id,{KetQuaXSCanTho_Chuan:data2});
        let tonum = _.pullAll(check,[""," "]);
        X = tonum.length;
        console.log("Dang Cap nhat KQXS CanTho..");
          if(X == 18){ 
            // let n = cautruc.Cautrucgiai18c(check.reverse())
            // let runx = await ModelChuan_MN.findByIdAndUpdate(id,{KetQuaXSCanTho_Chuan:n});
            console.log("Cap nhat KQXS CanTho ThanhCong");
            clearInterval(intervalObject); 
        } 
    }, 9000);
    },
    start: true,
    timeZone: 'Asia/Ho_Chi_Minh'
  });
  }   
       // Run Code XS DaLat
      async timeRun_XSDaLat() {
        let a = new CronJob({
      cronTime: '00 15 16 * * 0',
      onTick:  async function() {
        
        let check =[];
        let X =0;
        var intervalObject = setInterval(async function () {
          var id = await convert.ConvertTime();
          let a = (loop.loop2(await DataKQN.KQXSDaLat()))
          let b =  loop.loop2(await DataKQVN.KQXSDaLat())
          let c =  (await DataXSM.KQXSDaLat());
          let data = {KetQuaXSDaLat_kqn :a,KetQuaXSDaLat_kqvn:b,KetQuaXSDaLat_xsm:c};
          let run = await ModelDL.findByIdAndUpdate(id,data);
          check = loop.check(a,b,c);
          console.log('check',check);
          let data2 = cautruc.Cautrucgiai18(check.reverse());
          console.log("DaLat",data2);
          let run2 = await ModelChuan_MN.findByIdAndUpdate(id,{KetQuaXSDaLat_Chuan:data2});
          let tonum = _.pullAll(check,[""," "]);
          console.log("Dang Cap Nhat KQXS DaLat...");
          X = tonum.length;
          if(X == 18){ 
            // let n = cautruc.Cautrucgiai18c(check.reverse())
            // let runx = await ModelChuan_MN.findByIdAndUpdate(id,{KetQuaXSDaLat_Chuan:n});
            console.log("Cap Nhat KQXS DaLat ThanhCong");
            clearInterval(intervalObject); 
          } 
      }, 9000);

      },
      start: true,
      timeZone: 'Asia/Ho_Chi_Minh'
    });
    }
       // Run Code XS DongNai
      async timeRun_XSDongNai() {
        let a = new CronJob({
      cronTime: '00 15 16 * * 3',
      onTick:  async function() {
       
        let check =[];
        let X =0;
        var intervalObject = setInterval(async function () {
          var id = await convert.ConvertTime();
          console.log("Dang Cap Nhat KQXS DongNai...");
          let a =  (loop.loop2(await DataKQN.KQXSDongNai()))
          let b =  loop.loop2(await DataKQVN.KQXSDongNai())
          let c =  (await DataXSM.KQXSDongNai());
          let d = loop.loop2(await DataKQ24H.KQXSDongNai());
          let data = {KetQuaXSDongNai_kqn :a,KetQuaXSDongNai_kqvn:b,KetQuaXSDongNai_xsm:c,KetQuaXSDongNai_kq24h:d};
          let run = await ModelDN.findByIdAndUpdate(id,data);
          check = loop.check(a,b,c,d);
          console.log(check);
          let data2 = cautruc.Cautrucgiai18(check.reverse());
          console.log('data DongNai:',data2);
          let run2 = await ModelChuan_MN.findByIdAndUpdate(id,{KetQuaXSDongNai_Chuan:data2});
          let tonum = _.pullAll(check,[""," "]);
          X = tonum.length;
          if(X == 18){ 
            // let n = cautruc.Cautrucgiai18c(check.reverse())
            // let runx = await ModelChuan_MN.findByIdAndUpdate(id,{KetQuaXSDongNai_Chuan:n});
            console.log("Cap Nhat KQXS DongNai Thanh Cong")
            clearInterval(intervalObject); 
          } 
      }, 9000);
      },
      start: true,
      timeZone: 'Asia/Ho_Chi_Minh'
    });
    }
           // Run Code XS DongThap
      async timeRun_XSDongThap() {
        let a = new CronJob({
      cronTime: '01 15 16 * * 1',
      onTick:  async function() {     
        let check =[];
        let X =0;
        var intervalObject = setInterval(async function () { 
          var id = await convert.ConvertTime();
          let a =  (loop.loop2(await DataKQN.KQXSDongThap()));
          let b =  loop.loop2(await DataKQVN.KQXSDongThap());
          let c =  (await DataXSM.KQXSDongThap());
          let d = loop.loop2(await DataKQ24H.KQXSDongThap());
          let data = {KetQuaXSDongThap_kqn :a,KetQuaXSDongThap_kqvn:b,KetQuaXSDongThap_xsm:c,KetQuaXSDongThap_kq24h:d};
          let run = await ModelDT.findByIdAndUpdate(id,data);
          check = loop.check(a,b,c,d);
          console.log('check',check);
          let data2 = cautruc.Cautrucgiai18(check.reverse());
          console.log("DongThap:",data2);
          let run2 = await ModelChuan_MN.findByIdAndUpdate(id,{KetQuaXSDongThap_Chuan:data2});
          let tonum = _.pullAll(check,[""," "]);
          X = tonum.length;
          console.log("Dang Cap Nhat KQXS DongThap..");
          if(X == 18){
            // let n = cautruc.Cautrucgiai18c(check.reverse())
            // let runx = await ModelChuan_MN.findByIdAndUpdate(id,{KetQuaXSDongThap_Chuan:n});
            console.log(" Cap Nhat KQXS DongThap Thanh Cong");
            clearInterval(intervalObject); 
          } 
      }, 9000);
      },
      start: true,
      timeZone: 'Asia/Ho_Chi_Minh'
    });
    }
   // Run Code XS HauGiang
      async timeRun_XSHauGiang() {
        let a = new CronJob({
      cronTime: '00 15 16 * * 6',
      onTick:  async function() {
        
        let check =[];
        let X =0;
        var intervalObject = setInterval(async function () {
          var id = await convert.ConvertTime();
          let a =  (loop.loop2(await DataKQN.KQXSHauGiang()));
          let b =  loop.loop2(await DataKQVN.KQXSHauGiang());
          let c =  (await DataXSM.KQXSHauGiang());
          let d = loop.loop2(await DataKQ24H.KQXSHauGiang());
          let data = {KetQuaXSHauGiang_kqn :a,KetQuaXSHauGiang_kqvn:b,KetQuaXSHauGiang_xsm:c,KetQuaXSHauGiang_kq24h:d};
          let run = await ModelHG.findByIdAndUpdate(id,data);
          check = loop.check(a,b,c,d);
          console.log('check',check);
          let data2 = cautruc.Cautrucgiai18(check.reverse());
          console.log("HauGiang",data2);
          let run2 = await ModelChuan_MN.findByIdAndUpdate(id,{KetQuaXSHauGiang_Chuan:data2});
          let tonum = _.pullAll(check,[""," "]);
          console.log("Dang Cap Nhat KQXS HauGiang")
          X = tonum.length;
        if(X == 18){
          console.log("Cap Nhat KQXS HauGiang ThanhCong");
          clearInterval(intervalObject); 
          } 
      }, 9000);
      },
      start: true,
      timeZone: 'Asia/Ho_Chi_Minh'
    });
    }
   // Run Code XS HoChiMinh
      async timeRun_XSHoChiMinh() {
        let a = new CronJob({
      cronTime: '00 15 16 * * 1-6',
      onTick:  async function() {
        
        let check =[];
        let X =0;
        var intervalObject = setInterval(async function () {
          var id = await convert.ConvertTime(); 
          let a =  (loop.loop2(await DataKQN.KQXSHoChiMinh()));
          let b =  loop.loop2(await DataKQVN.KQXSHoChiMinh());
          let c =  (await DataXSM.KQXSHoChiMinh());
          let d = loop.loop2(await DataKQ24H.KQXSHoChiMinh());
          let data = {KetQuaXSHoChiMinh_kqn :a,KetQuaXSHoChiMinh_kqvn:b,KetQuaXSHoChiMinh_xsm:c,KetQuaXSHoChiMinh_kq24h:d};
          let run = await ModelHCM.findByIdAndUpdate(id,data);
          check = loop.check(a,b,c,d);
          console.log('check',check);
          let data2 = cautruc.Cautrucgiai18(check.reverse());
          console.log("TPHCM:",data2);
          let run2 = await ModelChuan_MN.findByIdAndUpdate(id,{KetQuaXSHoChiMinh_Chuan:data2});
          let tonum = _.pullAll(check,[""," "]);
          X = tonum.length;
          console.log("Dang Cap Nhat KQXS HoChiMinh..");
          if (X == 18) { 
             console.log('Cap nhat Thanh Cong KQXS TPHCM');
            clearInterval(intervalObject); 
          } 
      }, 9000);
      },
      start: true,
      timeZone: 'Asia/Ho_Chi_Minh'
    });
    }
    ////////////////////////////
 // Run Code XS KienGiang
    async timeRun_XSKienGiang() {
      let a = new CronJob({
    cronTime: '00 15 16 * * 0',
    onTick:  async function() {
      
      let check =[];
      let X =0;
      var intervalObject = setInterval(async function () {
        var id = await convert.ConvertTime(); 
        let a =  (loop.loop2(await DataKQN.KQXSKienGiang()));
        let b =  loop.loop2(await DataKQVN.KQXSKienGiang());
        let c =  (await DataXSM.KQXSKienGiang());
        let d = loop.loop2(await DataKQ24H.KQXSKienGiang());
        let data = {KetQuaXSKienGiang_kqn :a,KetQuaXSKienGiang_kqvn:b,KetQuaXSKienGiang_xsm:c,KetQuaXSKienGiang_kq24h:d};
        let run = await ModelKG.findByIdAndUpdate(id,data);
        check = loop.check(a,b,c,d);
        console.log('check',check);
        let data2 = cautruc.Cautrucgiai18(check.reverse());
        console.log("KienGiang",data2);
        let run2 = await ModelChuan_MN.findByIdAndUpdate(id,{KetQuaXSKienGiang_Chuan:data2});
        let tonum = _.pullAll(check,[""," "]);
        console.log("Dang Cap Nhat KQXS KienGiang...")
        X = tonum.length;
        if(X == 18){
          console.log("Cap Nhat KQXS KienGiang Thanh Cong")
          clearInterval(intervalObject); 
        } 
    }, 9000);
    },
    start: true,
    timeZone: 'Asia/Ho_Chi_Minh'
    });
    }
           // Run Code XS LongAn
      async timeRun_XSLongAn() {
        let a = new CronJob({
      cronTime: '00 15 16 * * 6',
      onTick:  async function() {
        
        let check =[];
        let X =0;
        var intervalObject = setInterval(async function () {
          var id = await convert.ConvertTime(); 
          let a =  (loop.loop2(await DataKQN.KQXSLongAn()));
          let b =  loop.loop2(await DataKQVN.KQXSLongAn());
          let c =  (await DataXSM.KQXSLongAn());
          let d = loop.loop2(await DataKQ24H.KQXSLongAn());
          let data = {KetQuaXSLongAn_kqn :a,KetQuaXSLongAn_kqvn:b,KetQuaXSLongAn_xsm:c,KetQuaXSLongAn_kq24h:d};
          let run = await ModelLA.findByIdAndUpdate(id,data);
          check = loop.check(a,b,c,d);
          console.log("check",check)
          let data2 = cautruc.Cautrucgiai18(check.reverse());
          console.log("LongAn",data2);
          let run2 = await ModelChuan_MN.findByIdAndUpdate(id,{KetQuaXSLongAn_Chuan:data2});
          let tonum = _.pullAll(check,[""," "]);
          console.log("Dang Cap Nhat KQXS LongAn...")
          X = tonum.length;
          if(X == 18){
            console.log("Cap Nhat KQXS LongAn ThanhCong")
            clearInterval(intervalObject); 
          } 
      }, 9000);
      },
      start: true,
      timeZone: 'Asia/Ho_Chi_Minh'
    });
    }
      // Run Code XS SocTrang
      async timeRun_XSSocTrang() {
        let a = new CronJob({
      cronTime: '00 15 16 * * 3',
      onTick:  async function() {
        let check =[];
        let X =0;
        var intervalObject = setInterval(async function () {
          var id = await convert.ConvertTime(); 
          console.log("Dang Cap Nhat KQXS SocTrang...")
          let a = (loop.loop2(await DataKQN.KQXSSocTrang()));
          let b =  loop.loop2(await DataKQVN.KQXSSocTrang());
          let c =  (await DataXSM.KQXSSocTrang());
          let d = loop.loop2(await DataKQ24H.KQXSSocTrang());
          let data = {KetQuaXSSocTrang_kqn :a,KetQuaXSSocTrang_kqvn:b,KetQuaXSSocTrang_xsm:c,KetQuaXSSocTrang_kq24h:d};
          let run = await ModelST.findByIdAndUpdate(id,data);
          check = loop.check(a,b,c,d);
          let data2 = cautruc.Cautrucgiai18(check.reverse());
          console.log("KQXS SocTrang Update...",data2);
          let run2 = await ModelChuan_MN.findByIdAndUpdate(id,{KetQuaXSSocTrang_Chuan:data2});
          let tonum = _.pullAll(check,[""," "]);
          console.log("Dang Cap Nhat KQXS SocTrang...")
          X = tonum.length; 
          if(X == 18){
            console.log("Cap Nhat KQXS SocTrang Thanh Cong")
            clearInterval(intervalObject); 
          } 
      }, 9000);
      },
      start: true,
      timeZone: 'Asia/Ho_Chi_Minh'
    });
    }
    ////////////////////////////////
 // Run Code XS TayNinh
    async timeRun_XSTayNinh() {
      let a = new CronJob({
    cronTime: '00 15 16 * * 4',
    onTick:  async function() {
      
      let check =[];
      let X =0;
      var intervalObject = setInterval(async function () {
        var id = await convert.ConvertTime(); 
        let a =  (loop.loop2(await DataKQN.KQXSTayNinh()));
        let b =  loop.loop2(await DataKQVN.KQXSTayNinh());
        let c =  (await DataXSM.KQXSTayNinh());
        let d = loop.loop2(await DataKQ24H.KQXSTayNinh());
        let data = {KetQuaXSTayNinh_kqn :a,KetQuaXSTayNinh_kqvn:b,KetQuaXSTayNinh_xsm:c,KetQuaXSTayNinh_kq24h:d};
        let run = await ModelTN.findByIdAndUpdate(id,data);
        check = loop.check(a,b,c,d);
        console.log('check',check);
        let data2 = cautruc.Cautrucgiai18(check.reverse());
        console.log("TayNinh",data2);
        let run2 = await ModelChuan_MN.findByIdAndUpdate(id,{KetQuaXSTayNinh_Chuan:data2});
        let tonum = _.pullAll(check,[""," "]);
        X = tonum.length;
        if(X == 18){
          clearInterval(intervalObject); 
        } 
    }, 9000);
    },
    start: true,
    timeZone: 'Asia/Ho_Chi_Minh'
    });
    }  
    //////////////////////////
 // Run Code XS TienGiang
    async timeRun_XSTienGiang() {
      let a = new CronJob({
    cronTime: '00 15 16 * * 0',
    onTick:  async function() {
     
      let check =[];
      let X =0;
      var intervalObject = setInterval(async function () {
        var id = await convert.ConvertTime(); 
        let a =  (loop.loop2(await DataKQN.KQXSTienGiang()));
        let b =  loop.loop2(await DataKQVN.KQXSTienGiang());
        let c =  (await DataXSM.KQXSTienGiang());
        let d = loop.loop2(await DataKQ24H.KQXSTienGiang());
        let data = {KetQuaXSTienGiang_kqn :a,KetQuaXSTienGiang_kqvn:b,KetQuaXSTienGiang_xsm:c,KetQuaXSTienGiang_kq24h:d};
        let run = await ModelTG.findByIdAndUpdate(id,data);
        check = loop.check(a,b,c,d);
        console.log('check',check);
        let data2 = cautruc.Cautrucgiai18(check.reverse());
        console.log("TienGiang",data2);
        let run2 = await ModelChuan_MN.findByIdAndUpdate(id,{KetQuaXSTienGiang_Chuan:data2});
        let tonum = _.pullAll(check,[""," "]);
        console.log("Dang Cap Nhat KQXS TienGiang...")
        X = tonum.length;
        if(X == 18){
          console.log("Cap Nhat KQXS TienGiang ThanhCong")
          clearInterval(intervalObject); 
        } 
    }, 9000);
    },
    start: true,
    timeZone: 'Asia/Ho_Chi_Minh'
    });
    }
    ///////////////////////
    // Run Code XS TraVinh
    async timeRun_XSTraVinh() {
      let a = new CronJob({
    cronTime: '00 15 16 * * 5',
    onTick:  async function() {
      
      let check =[];
      let X =0;
      var intervalObject = setInterval(async function () {
        var id = await convert.ConvertTime(); 
        let a =  (loop.loop2(await DataKQN.KQXSTraVinh()));
        let b =  loop.loop2(await DataKQVN.KQXSTraVinh());
        let c =  (await DataXSM.KQXSTraVinh());
        let d = loop.loop2(await DataKQ24H.KQXSTraVinh());
        let data = {KetQuaXSTraVinh_kqn :a,KetQuaXSTraVinh_kqvn:b,KetQuaXSTraVinh_xsm:c,KetQuaXSTraVinh_kq24h:d};
        let run = await ModelTV.findByIdAndUpdate(id,data);
        check = loop.check(a,b,c,d);
        console.log('check',check);
        let data2 = cautruc.Cautrucgiai18(check.reverse());
        console.log("TraVinh",data2);
        let run2 = await ModelChuan_MN.findByIdAndUpdate(id,{KetQuaXSTraVinh_Chuan:data2});
        let tonum = _.pullAll(check,[""," "]);
        console.log("Dang Cap Nhat KQXS TraVinh...")
        X = tonum.length;
        if(X == 18){
          console.log("Cap Nhat KQXS TraVinh ThanhCong");
          clearInterval(intervalObject); 
        } 
    }, 9000);
    },
    start: true,
    timeZone: 'Asia/Ho_Chi_Minh'
    });
    }
    //////////////////////
 // Run Code XS VinhLong
    async timeRun_XSVinhLong() {
      let a = new CronJob({
    cronTime: '00 15 16 * * 5',
    onTick:  async function() {
      
      let check =[];
      let X =0;
      var intervalObject = setInterval(async function () {
        var id = await convert.ConvertTime();
        let a =  (loop.loop2(await DataKQN.KQXSVinhLong()));
        let b = loop.loop2(await DataKQVN.KQXSVinhLong());
        let c =  (await DataXSM.KQXSVinhLong());
        let d = loop.loop2(await DataKQ24H.KQXSVinhLong());
        let data = {KetQuaXSVinhLong_kqn :a,KetQuaXSVinhLong_kqvn:b,KetQuaXSVinhLong_xsm:c,KetQuaXSVinhLong_kq24h:d};
        let run = await ModelVL.findByIdAndUpdate(id,data);
        check = loop.check(a,b,c,d);
        console.log('check',check);
        let data2 = cautruc.Cautrucgiai18(check.reverse());
        console.log("VinhLong",data2);
        let run2 = await ModelChuan_MN.findByIdAndUpdate(id,{KetQuaXSVinhLong_Chuan:data2});
        let tonum = _.pullAll(check,[""," "]);
        console.log("Dang Cap Nhat KQXS VinhLong...")
        X = tonum.length;
        if(X == 18){
          console.log("Cap Nhat KQXS VinhLong ThanhCong")
          clearInterval(intervalObject); 
        } 
    }, 9000);
    },
    start: true,
    timeZone: 'Asia/Ho_Chi_Minh'
    });
    }
    //////////
    // Run Code XS VungTau
    async timeRun_XSVungTau() {
      let a = new CronJob({
    cronTime: '00 15 16 * * 2',
    onTick:  async function() {
      
      let check =[];
      let X =0;
      var intervalObject = setInterval(async function () {
        var id = await convert.ConvertTime(); 
        let a =  (loop.loop2(await DataKQN.KQXSVungTau()));
        let b =  loop.loop2(await DataKQVN.KQXSVungTau());
        let c =  (await DataXSM.KQXSVungTau());
        let d = loop.loop2(await DataKQ24H.KQXSVungTau());
        let data = {KetQuaXSVungTau_kqn :a,KetQuaXSVungTau_kqvn:b,KetQuaXSVungTau_xsm:c,KetQuaXSVungTau_kq24h:d};
        let run = await ModelVungTau.findByIdAndUpdate(id,data);
        check = loop.check(a,b,c,d);
        console.log('check',check);
        let data2 = cautruc.Cautrucgiai18(check.reverse());
        console.log("VungTau",data2);
        let run2 = await ModelChuan_MN.findByIdAndUpdate(id,{KetQuaXSVungTau_Chuan:data2});
        let tonum = _.pullAll(check,[""," "]);
        X = tonum.length;
        console.log("Dang Cap Nhat KQXS VungTau")
        if(X == 18){
          console.log(" Cap Nhat KQXS VungTau ThanhCong")
          clearInterval(intervalObject); 
        } 
    }, 9000);
    },
    start: true,
    timeZone: 'Asia/Ho_Chi_Minh'
    });
    }

async  Run() {
  this.CreatDocumentNewDayForKQ_Chuan();
  this.timeRun_XSAnGiang();
  this.timeRun_XSBacLieu();
  this.timeRun_XSBenTre();
  this.timeRun_XSBinhPhuoc();
  this.timeRun_XSBinhThuan();
  this.timeRun_XSCaMau();
  this.timeRun_XSCanTho();
  this.timeRun_XSDaLat();
  this.timeRun_XSDongNai();
  this.timeRun_XSDongThap();
  this.timeRun_XSHauGiang();
  this.timeRun_XSHoChiMinh();
  this.timeRun_XSKienGiang();
  this.timeRun_XSLongAn();
  this.timeRun_XSSocTrang();
  this.timeRun_XSTayNinh();
  this.timeRun_XSTienGiang();
  this.timeRun_XSTraVinh();
  this.timeRun_XSVinhLong();
  this.timeRun_XSVungTau();
}

}

module.exports = SetTime;