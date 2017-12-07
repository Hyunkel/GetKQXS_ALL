var json2csv = require('json2csv');
var fs = require('fs');
var Getdata = require("./getdata");
var dataKQXS = new Getdata;
//
class SaveFileNow{
    constructor(){
        
    }
    async SaveFileKQXSMB() {
        let a = await dataKQXS.GetDataKQXSMB();
        var datakq = a;
        var fieldskq = ['_id','KetQuaXSMB_Chuan'];
        var csv = json2csv({data:datakq,fields :fieldskq});
        fs.writeFile('Data_KQXSMB.csv', csv, function(err) {
            if (err) throw err;
            console.log('file Data_KQXSMB saved');
          });
    }
    async  SaveFileKQXSMN() {
        let a = await dataKQXS.GetDataKQXSMN();
        var datakq = a;
        var fieldskq = ['_id',
            'KetQuaXSBenTre_Chuan',
            'KetQuaXSAnGiang_Chuan',
            'KetQuaXSBacLieu_Chuan',
            'KetQuaXSBinhDuong_Chuan',
            'KetQuaXSBinhPhuoc_Chuan',
            'KetQuaXSBinhThuan_Chuan',
            'KetQuaXSCaMau_Chuan',
            'KetQuaXSCanTho_Chuan',
            'KetQuaXSDaLat_Chuan',
            'KetQuaXSDongNai_Chuan',
            'KetQuaXSDongThap_Chuan',
            'KetQuaXSHauGiang_Chuan',
           'KetQuaXSHoChiMinh_Chuan',
            'KetQuaXSKienGiang_Chuan',
            'KetQuaXSLongAn_Chuan',
            'KetQuaXSSocTrang_Chuan',
            'KetQuaXSTayNinh_Chuan',
            'KetQuaXSTienGiang_Chuan',
            'KetQuaXSTraVinh_Chuan',
            'KetQuaXSVinhLong_Chuan',
            'KetQuaXSVungTau_Chuan'];
        var csv = json2csv({data:datakq,fields :fieldskq});
        fs.writeFile('Data_KQXSMN.csv', csv, function(err) {
            if (err) throw err;
            console.log('file Data_KQXSMN saved');
          });
    }
    
    async  SaveFileKQXSMT() {
        let a = await dataKQXS.GetDataKQXSMT();
        var datakq = a;
        var fieldskq = ['_id','KetQuaXSBinhDinh_Chuan','KetQuaXSDakLak_Chuan',
                        'KetQuaXSDakNong_Chuan',
                        'KetQuaXSDaNang_Chuan',
                        'KetQuaXSGiaLai_Chuan',
                        'KetQuaXSKhanhHoa_Chuan',
                        'KetQuaXSKonTum_Chuan',
                        'KetQuaXSNinhThuan_Chuan',
                        'KetQuaXSPhuYen_Chuan',
                        'KetQuaXSQuangBinh_Chuan',
                        'KetQuaXSQuangNam_Chuan',
                        'KetQuaXSQuangNgai_Chuan',
                        'KetQuaXSQuangTri_Chuan',
                        'KetQuaXSThuaThienHue_Chuan'
                    ];
        var csv = json2csv({data:datakq,fields :fieldskq});
        fs.writeFile('Data_KQXSMT.csv', csv, function(err) {
            if (err) throw err;
            console.log('file Data_KQXSMT saved');
        });
    }

}
module.exports = SaveFileNow;