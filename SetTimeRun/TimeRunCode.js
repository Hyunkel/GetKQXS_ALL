var mongoose = require("mongoose");
var CronJob = require("cron").CronJob;
var  _ = require("lodash");
//cau truc
var cautruc = require("../MongoDB/cautrucgiai");
var convert = require("../MongoDB/convertTime");
var loop = require("./loopdata");
//model KQ chuan
var ModelChuan = require("../MongoDB/Model/ModelKQ_Chuan/KQ_MB_Chuan");
//Model XSMB
var ModelMB = require("../MongoDB/Model/ModelMB/ModelXSMB");
        //XSMB=KETQUA.NET
var MBKQN = require("../Data/Ketqua.net/KQXSMB/KQSXMB");
var DataMB = new MBKQN;
        //XSMB=KETQUA.VN
var MBKQVN = require("../Data/Ketqua.vn/KQXSMB/KQXSMB_KQVN");
var DataMB2 = new MBKQVN;
        //XSMB=XOSO.ME
var MBXSM = require("../Data/Xoso.me/KQXSMB/KQXSMB_XSM");
var DataMB3 = new MBXSM;
        // XS 24H
var MBKQ24H = require("../Data/Ketqua24h/KQXSMB");
var DataMB4 = new MBKQ24H;
class SetTime{
    constructor(){
    }
    async  CreatDocumentNewDayForKQ_MT() {
        let a = new CronJob({
          cronTime: '00 14 18 * * *',
          onTick:  async function() {
            var id = await convert.ConvertTime(); // id dang ngay thang nam cho 1 ban ghi
            let run = await ModelChuan.insertMany({_id:id});
            let create = await ModelMB.insertMany({_id:id});
            console.log('Tao Document Cho KQXSMienBac',id);
          },
          start: true,
          timeZone: 'Asia/Ho_Chi_Minh'
        });
      }
    // Run Code XSMB
    async timeRun_XSMB() {
        let a = new CronJob({   
      cronTime: '00 15 18 * * *',
      onTick:  async function() {
        // let create = await ModelMB.insertMany({_id:id});
        // let create2 = await ModelChuan.insertMany({_id:id});
        let check =[];
        let X =0;
        var intervalObject = setInterval(async function () { 
                var id = await convert.ConvertTime();
                let a =  loop.loop2(await DataMB.KQXSMB());
                let b =  loop.loop2(await DataMB2.KQXSMB());
                let c =  await DataMB3.KQXSMB();
                let d = loop.loop2(await DataMB4.KQXSMB());
                let data = {KetQuaXSMB_kqn :a,KetQuaXSMB_kqvn:b,KetQuaXSMB_xsm:c,KetQuaXSMB_kq24h:d};
                let run = await ModelMB.findByIdAndUpdate(id,data);
                check = loop.check(a,b,c,d);
                console.log('check',check);
                let data2 = cautruc.Cautrucgiai27(check);
                console.log('data2',data2)
                let run2 = await ModelChuan.findByIdAndUpdate(id,{KetQuaXSMB_Chuan:data2});
                console.log("Dang Cap Nhat KQXSMB...");
                let tonum = _.pullAll(check,['',' ',""," "]);
                X = tonum.length;
                if(X == 27){
                console.log('Update KQXSMB ThanhCong');
                clearInterval(intervalObject); 
                } 
            }, 8000);
      },
      start: true,
      timeZone: 'Asia/Ho_Chi_Minh'
    });
    }
    async Run(){
            this.CreatDocumentNewDayForKQ_MT();
            this.timeRun_XSMB();
    }
}
module.exports = SetTime;