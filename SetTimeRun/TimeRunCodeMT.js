var mongoose = require("mongoose");
var CronJob = require("cron").CronJob;
var _ = require("lodash");
//cau truc
var cautruc = require("../MongoDB/cautrucgiai");
var convert = require("../MongoDB/convertTime");
var loop = require("./loopdata");
//
        //XSAG=KETQUA.NET
var KQN = require("../Data/Ketqua.net/KQXSMT/KQXSMT_KQN");
var DataKQN = new KQN;
        //XSAG=KETQUA.VN
var KQVN = require("../Data/Ketqua.vn/KQSXMT/KQXSMT_KQVN");
var DataKQVN = new KQVN;
        //XSAG=XOSO.ME
var XSM = require("../Data/Xoso.me/KQXSMT/KQXSMT_XMS");
var DataXSM = new XSM;
        /// XOSO 24H
var KQ24H = require("../Data/Ketqua24h/KQXSMT");
var Data24h = new KQ24H;
//model KQ chuan
var ModelChuan_MT = require("../MongoDB/Model/ModelKQ_Chuan/KQ_MT_Chuan");
//Model XSMT
var ModelBD = require("../MongoDB/Model/ModelMT/ModelBinhDinh");
var ModelDL = require("../MongoDB/Model/ModelMT/ModelDakLak");
var ModelDNO = require("../MongoDB/Model/ModelMT/ModelDakNong");
var ModelDNA = require("../MongoDB/Model/ModelMT/ModelDaNang");
var ModelGL = require("../MongoDB/Model/ModelMT/ModelGiaLai");
var ModelKH = require("../MongoDB/Model/ModelMT/ModelKhanhHoa");
var ModelKT = require("../MongoDB/Model/ModelMT/ModelKonTum");
var ModelNT = require("../MongoDB/Model/ModelMT/ModelNinhThuan");
var ModelPY = require("../MongoDB/Model/ModelMT/ModelPhuYen");
var ModelQB = require("../MongoDB/Model/ModelMT/ModelQuangBinh");
var ModelQNA = require("../MongoDB/Model/ModelMT/ModelQuangNam");
var ModelQN = require("../MongoDB/Model/ModelMT/ModelQuangNgai");
var ModelQT = require("../MongoDB/Model/ModelMT/ModelQuangTri");
var ModelTTH = require("../MongoDB/Model/ModelMT/ModelThuaThienHue");

class SetTimeMT{
    constructor(){

    }
    async  CreatDocumentNewDayForKQ_MT() {
      let a = new CronJob({
        cronTime: '00 14 17 * * *',
        onTick:  async function() {
          var id = await convert.ConvertTime();
          let run = await ModelChuan_MT.insertMany({_id:id});
          let create = await ModelBD.insertMany({_id:id});
          let create1 = await ModelDL.insertMany({_id:id});
          let create2 = await ModelDNO.insertMany({_id:id});
          let create3 = await ModelDNA.insertMany({_id:id});
          let create4 = await ModelGL.insertMany({_id:id});
          let create5 = await ModelKH.insertMany({_id:id});
          let create7 = await ModelNT.insertMany({_id:id});
          let create8 = await ModelPY.insertMany({_id:id});
          let create9 = await ModelQB.insertMany({_id:id});
          let create10 = await ModelQNA.insertMany({_id:id});
          let create11 = await ModelQN.insertMany({_id:id});
          let create12 = await ModelQT.insertMany({_id:id});
          let create13 = await ModelTTH.insertMany({_id:id});
          console.log('Tao Document KQXS_MT_CHUAN',id);
        },
        start: true,
        timeZone: 'Asia/Ho_Chi_Minh'
      });
    }
        // Run Code XS DakLak
      async timeRun_XSDakLak() {
          let a = new CronJob({
        cronTime: '00 15 17 * * 2',
        onTick:  async function() {
          let check =[];
          let X =0;
          var intervalObject = setInterval(async function () {
            var id = await convert.ConvertTime();
            let a =  loop.loop2(await DataKQN.KQXSDaklak());
            let b =  loop.loop2(await DataKQVN.KQXSDaklak());
            let c =  (await DataXSM.KQXSDaklak());
            let d = loop.loop2(await Data24h.KQXSDakLak());
            let data = {KetQuaXSDakLak_kqn :a,KetQuaXSDakLak_kqvn:b,KetQuaXSDakLak_xsm:c,KetQuaXSDakLak_kq24h:d};
            let run = await ModelDL.findByIdAndUpdate(id,data);
            check = loop.check(a,b,c,d);
            console.log('check',check);
            let data2 = cautruc.Cautrucgiai18(check.reverse());
            console.log("DakLak:",data2);
            let run2 = await ModelChuan_MT.findByIdAndUpdate(id,{KetQuaXSDakLak_Chuan:data2});
            let tonum = _.pullAll(check,[""," "]);
            X = tonum.length;
            console.log("Dang Cap Nhat KQXS DakLak..");
            if(X == 18){
              console.log("Cap Nhat KQXS DakLak ThanhCong");
              clearInterval(intervalObject);
            }  
        }, 9000);
        },
        start: true,
        timeZone: 'Asia/Ho_Chi_Minh'
        });
        }
  // Run Code XS DakNong
    async timeRun_XSDakNong() {
        let a = new CronJob({
      cronTime: '00 15 17 * * 6',
      onTick:  async function() {
        let check =[];
        let X =0;  
    var intervalObject = setInterval(async function () {
      var id = await convert.ConvertTime();
      let a =  loop.loop2(await DataKQN.KQXSDakNong());
      let b =  loop.loop2(await DataKQVN.KQXSDakNong());
      let c =  (await DataXSM.KQXSDakNong());
      let d = loop.loop2(await Data24h.KQXSDakNong());
      let data = {KetQuaXSDakNong_kqn :a,KetQuaXSDakNong_kqvn:b,KetQuaXSDakNong_xsm:c,KetQuaXSDakNong_kq24h:d};
      let run = await ModelDNO.findByIdAndUpdate(id,data);
      check = loop.check(a,b,c,d);
      console.log('check',check);
      let data2 = cautruc.Cautrucgiai18(check.reverse());
      console.log("DakNong",data2);
      let run2 = await ModelChuan_MT.findByIdAndUpdate(id,{KetQuaXSDakNong_Chuan:data2});
      let tonum = _.pullAll(check,[""," "]);
      X = tonum.length;
      console.log("Dang Cap Nhat KQXS DakNong...");
      if(X==18){
        console.log("Cap Nhat KQXS DakNong ThanhCong");
        clearInterval(intervalObject); 
      }
      }, 9000);
      },
      start: true,
      timeZone: 'Asia/Ho_Chi_Minh'
      });
      }
  // Run Code XS DaNang
    async timeRun_XSDaNang() {

        let a = new CronJob({
      cronTime: '00 15 17 * * 3-6',
      onTick:  async function() {
        
        let check =[];
        let X =0;
        var intervalObject = setInterval(async function () {
          var id = await convert.ConvertTime();
          let a =  loop.loop2(await DataKQN.KQXSDaNang());
          let b = loop.loop2(await DataKQVN.KQXSDaNang());
          let c =  (await DataXSM.KQXSDaNang());
          let d = loop.loop2(await Data24h.KQXSDaNang());
          let data = {KetQuaXSDaNang_kqn :a,KetQuaXSDaNang_kqvn:b,KetQuaXSDaNang_xsm:c,KetQuaXSDaNang_kq24h:d};
          let run = await ModelDNA.findByIdAndUpdate(id,data);
          check = loop.check(a,b,c,d);
          console.log('check',check);
          let data2 = cautruc.Cautrucgiai18(check.reverse());
          console.log("DaNang",data2);
          let run2 = await ModelChuan_MT.findByIdAndUpdate(id,{KetQuaXSDaNang_Chuan:data2});
          let tonum = _.pullAll(check,[""," "]);
          X = tonum.length;
          console.log("Dang Cap Nhat KQXS DaNang...");
          if(X==18){
            console.log("Cap Nhat KQXS DaNang ThanhCong");
            clearInterval(intervalObject); 
          } 
      }, 9000);
      },
      start: true,
      timeZone: 'Asia/Ho_Chi_Minh'
      });
      }
      // Run Code XS GiaLai
    async timeRun_XSGiaLai() {
        let a = new CronJob({
      cronTime: '00 15 17 * * 5',
      onTick:  async function() {
        let check =[];
        let X =0;
        var intervalObject = setInterval(async function () {
          var id = await convert.ConvertTime(); 
          let a =  loop.loop2(await DataKQN.KQXSGiaLai());
          let b =  loop.loop2(await DataKQVN.KQXSGiaLai());
          let c =  (await DataXSM.KQXSGiaLai());
          let d = loop.loop2(await Data24h.KQXSGiaLai());
          let data = {KetQuaXSGiaLai_kqn :a,KetQuaXSGiaLai_kqvn:b,KetQuaXSGiaLai_xsm:c,KetQuaXSGiaLai_kq24h:d};
          let run = await ModelGL.findByIdAndUpdate(id,data);
          check = loop.check(a,b,c,d);
          console.log('check',check);
          let data2 = cautruc.Cautrucgiai18(check.reverse());
          console.log("GiaLai",data2);
          let run2 = await ModelChuan_MT.findByIdAndUpdate(id,{KetQuaXSGiaLai_Chuan:data2});
          let tonum = _.pullAll(check,[""," "]);
          X = tonum.length;
          console.log("Dang Cap Nhat KQXS GiaLai...");
          if(X==18){
            console.log("Cap Nhat KQXS GiaLai ThanhCong");
            clearInterval(intervalObject); 
          } 
      }, 9000);
      },
      start: true,
      timeZone: 'Asia/Ho_Chi_Minh'
      });
      }
      // Run Code XS KhanhHoa
    async timeRun_XSKhanhHoa() {
        let a = new CronJob({
      cronTime: '00 15 17 * * 0-3',
      onTick:  async function() {
        let check =[];
        let X =0;
        var intervalObject = setInterval(async function () {
          var id = await convert.ConvertTime(); 
          let a = loop.loop2(await DataKQN.KQXSKhanhHoa());
          let b = loop.loop2( await DataKQVN.KQXSKhanhHoa());
          let c =  (await DataXSM.KQXSKhanhHoa());
          let d = loop.loop2(await Data24h.KQXSKhanhHoa());
          let data = {KetQuaXSKhanhHoa_kqn :a,KetQuaXSKhanhHoa_kqvn:b,KetQuaXSKhanhHoa_xsm:c,KetQuaXSKhanhHoa_kq24h:d};
          let run = await ModelKH.findByIdAndUpdate(id,data);
          check = loop.check(a,b,c,d);
          console.log('check',check);
          let data2 = cautruc.Cautrucgiai18(check.reverse());
          console.log("KhanhHoa",data2);
          let run2 = await ModelChuan_MT.findByIdAndUpdate(id,{KetQuaXSKhanhHoa_Chuan:data2});
          let tonum = _.pullAll(check,[""," "]);
          X = tonum.length; 
          console.log("Dang Cap Nhat KQXS KhanhHoa...");
          if(X==18){
            // let n =  cautruc.Cautrucgiai18c(check.reverse());
            // let runx = await ModelChuan_MT.findByIdAndUpdate(id,{KetQuaXSKhanhHoa_Chuan:n});
            console.log("Cap Nhat KQXS KhanhHoa ThanhCong");
            clearInterval(intervalObject); 
          } 
      }, 9000);
      },
      start: true,
      timeZone: 'Asia/Ho_Chi_Minh'
      });
      }
  // Run Code XS KonTum
    async timeRun_XSKonTum() {
        let a = new CronJob({
      cronTime: '00 15 17 * * 0',
      onTick:  async function() {
        let check =[];
        let X =0;
        var intervalObject = setInterval(async function () {
          var id = await convert.ConvertTime();
          let a =  loop.loop2(await DataKQN.KQXSKonTum());
          let b =  loop.loop2(await DataKQVN.KQXSKonTum());
          let c =  (await DataXSM.KQXSKonTum());
          let d = loop.loop2(await Data24h.KQXSKonTum());
          let data = {KetQuaXSKonTum_kqn :a,KetQuaXSKonTum_kqvn:b,KetQuaXSKonTum_xsm:c,KetQuaXSKonTum_kq24h:d};
          let run = await ModelKT.findByIdAndUpdate(id,data);
          check = loop.check(a,b,c,d);
          console.log('check',check);
          let data2 = cautruc.Cautrucgiai18(check.reverse());
          console.log("KonTum:",data2);
          let run2 = await ModelChuan_MT.findByIdAndUpdate(id,{KetQuaXSKonTum_Chuan:data2});
          let tonum = _.pullAll(check,[""," "]);
          X = tonum.length;
          console.log("Dang Cap Nhat KQXS KonTum...");
          if(X==18){
            console.log("Cap Nhat KQXS KonTum ThanhCong");
            clearInterval(intervalObject); 
          } 
      }, 9000);
      },
      start: true,
      timeZone: 'Asia/Ho_Chi_Minh'
      });
      }
  // Run Code XS NinhThuan
    async timeRun_XSNinhThuan() {
        let a = new CronJob({
      cronTime: '00 15 17 * * 5',
      onTick:  async function() {

        let check =[];
        let X =0;
        var intervalObject = setInterval(async function () {
          var id = await convert.ConvertTime(); 
          let a =  loop.loop2(await DataKQN.KQXSNinhThuan());
          let b =  loop.loop2(await DataKQVN.KQXSNinhThuan());
          let c =  (await DataXSM.KQXSNinhThuan());
          let d = loop.loop2(await Data24h.KQXSNinhThuan());
          let data = {KetQuaXSNinhThuan_kqn :a,KetQuaXSNinhThuan_kqvn:b,KetQuaXSNinhThuan_xsm:c,KetQuaXSNinhThuan_kq24h:d};
          let run = await ModelNT.findByIdAndUpdate(id,data);
          check = loop.check(a,b,c,d);
          console.log('check',check);
          let data2 = cautruc.Cautrucgiai18(check.reverse());
          console.log("NinhThuan",data2);
          let run2 = await ModelChuan_MT.findByIdAndUpdate(id,{KetQuaXSNinhThuan_Chuan:data2});
          let tonum = _.pullAll(check,[""," "]);
          X = tonum.length;
          console.log("Dang Cap Nhat KQXS NinhThuan...");
          if(X==18){
            console.log("Cap Nhat KQXS NinhThuan ThanhCong");
              clearInterval(intervalObject); 
          } 
      }, 9000);
      },
      start: true,
      timeZone: 'Asia/Ho_Chi_Minh'
      });
      }
  // Run Code XS PhuYen
    async timeRun_XSPhuYen() {
        let a = new CronJob({
      cronTime: '00 15 17 * * 1',
      onTick:  async function() {
        let check =[];
        let X =0;
        var intervalObject = setInterval(async function () {
          var id = await convert.ConvertTime();
          let a = loop.loop2(await DataKQN.KQXSPhuYen());
          let b =  loop.loop2(await DataKQVN.KQXSPhuYen());
          let c = ( await DataXSM.KQXSPhuYen());
          let d = loop.loop2(await Data24h.KQXSPhuYen());
          let data = {KetQuaXSPhuYen_kqn :a,KetQuaXSPhuYen_kqvn:b,KetQuaXSPhuYen_xsm:c,KetQuaXSPhuYen_kq24h:d};
          let run = await ModelPY.findByIdAndUpdate(id,data);
          check = loop.check(a,b,c,d);
          console.log('check',check);
          let data2 = cautruc.Cautrucgiai18(check.reverse());
          console.log("PhuYen",data2);
          let run2 = await ModelChuan_MT.findByIdAndUpdate(id,{KetQuaXSPhuYen_Chuan:data2});
          let tonum = _.pullAll(check,[""," "]);
          X = tonum.length;
          console.log("Dang Cap Nhat KQXS PhuYen...");
          if(X == 18){
            console.log("Cap Nhat KQXS PhuYen ThanhCong");
            clearInterval(intervalObject); 
          }
      }, 9000);
      },
      start: true,
      timeZone: 'Asia/Ho_Chi_Minh'
      });
      }
  // Run Code XS QuangBinh
    async timeRun_XSQuangBinh() {
        let a = new CronJob({
      cronTime: '00 15 17 * * 4',
      onTick:  async function() {
        let check =[];
        let X =0;
        var intervalObject = setInterval(async function () {
          var id = await convert.ConvertTime();
          let a =  loop.loop2(await DataKQN.KQXSQuangBinh());
          let b = loop.loop2(await DataKQVN.KQXSQuangBinh());
          let c =  (await DataXSM.KQXSQuangBinh());
          let d = loop.loop2(await Data24h.KQXSQuangBinh());
          let data = {KetQuaXSQuangBinh_kqn :a,KetQuaXSQuangBinh_kqvn:b,KetQuaXSQuangBinh_xsm:c,KetQuaXSQuangBinh_kq24h:d};
          let run = await ModelQB.findByIdAndUpdate(id,data);   
          check = loop.check(a,b,c,d);
          console.log('check',check);
          let data2 = cautruc.Cautrucgiai18(check.reverse());
          console.log("QuangBinh",data2);
          let run2 = await ModelChuan_MT.findByIdAndUpdate(id,{KetQuaXSQuangBinh_Chuan:data2});
          let tonum = _.pullAll(check,[""," "]);
          X = tonum.length;
          console.log("Dang Cap Nhat KQXS QuangBinh...");
          if(X==18){
            console.log("Cap Nhat KQXS QuangBinh ThanhCong");
            clearInterval(intervalObject); 
          } 
      }, 9000);
      },
      start: true,
      timeZone: 'Asia/Ho_Chi_Minh'
      });
      }
  // Run Code XS QuangNam
    async timeRun_XSQuangNam() {
        let a = new CronJob({
      cronTime: '00 15 17 * * 2',
      onTick:  async function() {
        let check =[];
        let X =0;
        var intervalObject = setInterval(async function () {
          var id = await convert.ConvertTime(); 
          let a = loop.loop2(await DataKQN.KQXSQuangNam());
          let b =  loop.loop2(await DataKQVN.KQXSQuangNam());
          let c =  (await DataXSM.KQXSQuangNam());
          let data = {KetQuaXSQuangNam_kqn :a,KetQuaXSQuangNam_kqvn:b,KetQuaXSQuangNam_xsm:c};
          let run = await ModelQNA.findByIdAndUpdate(id,data);
          check = loop.check2(a,b,c);
          console.log('check',check);
          let data2 = cautruc.Cautrucgiai18(check.reverse());
          console.log("QuangNam:",data2);
          let run2 = await ModelChuan_MT.findByIdAndUpdate(id,{KetQuaXSQuangNam_Chuan:data2});
          let tonum = _.pullAll(check,[""," "]);
          X = tonum.length; 
          console.log("Dang Cap Nhat KQXS QuangNam...");
          if(X==18){
            console.log("Cap Nhat KQXS QuangNam ThanhCong");
            clearInterval(intervalObject); 
          } 
      }, 9000);
      },
      start: true,
      timeZone: 'Asia/Ho_Chi_Minh'
      });
      }
  // Run Code XS QuangNgai
    async timeRun_XSQuangNgai() {
      
        let a = new CronJob({
      cronTime: '00 15 17 * * 6',
      onTick:  async function() {
        let check =[];
        let X =0;
        var intervalObject = setInterval(async function () {
          var id = await convert.ConvertTime();
          let a =  loop.loop2(await DataKQN.KQXSQuangNgai());
          let b =  loop.loop2(await DataKQVN.KQXSQuangNgai());
          let c =  (await DataXSM.KQXSQuangNgai());
          let data = {KetQuaXSQuangNgai_kqn :a,KetQuaXSQuangNgai_kqvn:b,KetQuaXSQuangNgai_xsm:c};
          let run = await ModelQN.findByIdAndUpdate(id,data);
          check = loop.check2(a,b,c);
          console.log('check',check);
          let data2 = cautruc.Cautrucgiai18(check.reverse());
          console.log("QuangNgai",data2);
          let run2 = await ModelChuan_MT.findByIdAndUpdate(id,{KetQuaXSQuangNgai_Chuan:data2});
          let tonum = _.pullAll(check,[""," "]);
          X = tonum.length;
          console.log("Dang Cap Nhat KQXS QuangNgai..");
          if(X==18){
            console.log("Cap Nhat KQXS QUANGNGAI ThanhCong");
            clearInterval(intervalObject); 
          } 
      }, 9000);
      },
      start: true,
      timeZone: 'Asia/Ho_Chi_Minh'
      });
      }
  // Run Code XS QuangTri
 async timeRun_XSQuangTri() {
    let a = new CronJob({
  cronTime: '00 15 17 * * 4',
  onTick:  async function() {
    let check =[];
    let X =0;
    var intervalObject = setInterval(async function () {
      var id = await convert.ConvertTime();
      let a =  loop.loop2(await DataKQN.KQXSQuangTri());
      let b =  loop.loop2(await DataKQVN.KQXSQuangTri());
      let c =  (await DataXSM.KQXSQuangTri());
      let d = loop.loop2(await Data24h.KQXSQuangTri());
      let data = {KetQuaXSQuangTri_kqn :a,KetQuaXSQuangTri_kqvn:b,KetQuaXSQuangTri_xsm:c,KetQuaXSQuangTri_kq24h:d};
      let run = await ModelQT.findByIdAndUpdate(id,data);
      check = loop.check(a,b,c,d);
      console.log('check',check);
      let data2 = cautruc.Cautrucgiai18(check.reverse());
      console.log("QuangTri",data2);
      let run2 = await ModelChuan_MT.findByIdAndUpdate(id,{KetQuaXSQuangTri_Chuan:data2});
      let tonum = _.pullAll(check,[""," "]);
      X = tonum.length;
      console.log("Dang Cap Nhat KQXS QuangTri...");
      if(X==18){
        console.log("Cap Nhat KQXSQuangTri ThanhCong");
        clearInterval(intervalObject); 
      } 
  }, 9000);
  },
  start: true,
  timeZone: 'Asia/Ho_Chi_Minh'
  });
  }
  // Run Code XS ThuaThienHue
 async timeRun_XSThuaThienHue() {
   
    let a = new CronJob({
  cronTime: '00 15 17 * * 1',
  onTick:  async function() {
    let check =[];
    let X =0;
    var intervalObject = setInterval(async function () {
      var id = await convert.ConvertTime(); 
      let a =  loop.loop2(await DataKQN.KQXSThuaThienHue());
      let b =  loop.loop2(await DataKQVN.KQXSThuaThienHue());
      let c =  (await DataXSM.KQXSThuaThienHue());
      let d = loop.loop2(await Data24h.KQXSThuaThienHue());
      let data = {KetQuaXSThuaThienHue_kqn :a,KetQuaXSThuaThienHue_kqvn:b,KetQuaXSThuaThienHue_xsm:c,KetQuaXSThuaThienHue_kq24h:d};
      let run = await ModelTTH.findByIdAndUpdate(id,data);
      check = loop.check(a,b,c,d);
      console.log('check',check);
      let data2 = cautruc.Cautrucgiai18(check.reverse());
      console.log("ThuaThienHue",data2);
      let run2 = await ModelChuan_MT.findByIdAndUpdate(id,{KetQuaXSThuaThienHue_Chuan:data2});
      console.log("Dang Cap Nhat KQXS ThuaThienHue...");
      let tonum = _.pullAll(check,[""," "]);
      X = tonum.length;
      if (X == 18) { 
        console.log("Cap Nhat KQXS ThuaThienHue ThanhCong");
        clearInterval(intervalObject); 
      } 
  }, 9000); 
  },
  start: true,
  timeZone: 'Asia/Ho_Chi_Minh'
  });
  }
  async Run(){
    this.CreatDocumentNewDayForKQ_MT();
    this.timeRun_XSDakLak();
    this.timeRun_XSDakNong();
    this.timeRun_XSDaNang();
    this.timeRun_XSGiaLai();
    this.timeRun_XSKhanhHoa();
    this.timeRun_XSKonTum();
    this.timeRun_XSNinhThuan();
    this.timeRun_XSPhuYen();
    this.timeRun_XSQuangBinh();
    this.timeRun_XSQuangNam();
    this.timeRun_XSQuangNgai();
    this.timeRun_XSQuangTri();
    this.timeRun_XSThuaThienHue();
  }
}
module.exports = SetTimeMT;