function Cautrucgiai27(C) {
    let A =[];
    for(let i =0;i<C.length;i++){
        A.push((C[i]));
    }
    var cautruc = {
        GiaiDacBiet :A[0],
        GiaiNhat : A[1],
        GiaiNhi : A[2]+','+A[3],
        GiaiBa : A[4]+','+A[5]+','+A[6]+','+A[7]+','+A[8]+','+A[9],
        GiaiTu : A[10]+','+A[11]+','+A[12]+','+A[13],
        GiaiNam : A[14]+','+A[15]+','+A[16]+','+A[17]+','+A[18]+','+A[19],
        GiaiSau : A[20]+','+A[21]+','+A[22],
        GiaiBay : A[23]+','+A[24]+','+A[25]+','+A[26],

    }   
    return  cautruc;
}
    function Cautrucgiai27c(C) {
        let A =[];
        for(let i =0;i<C.length;i++){
            A.push((C[i]).toString());
        }
        var cautruc = {
            GiaiNhat : A[0],
            GiaiNhi : A[1]+','+A[2],
            GiaiBa : A[3]+','+A[4]+','+A[5]+','+A[6]+','+A[7]+','+A[8],
            GiaiTu : A[9]+','+A[10]+','+A[11]+','+A[12],
            GiaiNam : A[13]+','+A[14]+','+A[15]+','+A[16]+','+A[17]+','+A[18],
            GiaiSau : A[19]+','+A[20]+','+A[21],
            GiaiBay : A[22]+','+A[23]+','+A[24]+','+A[25],
            GiaiDacBiet : A[26],
    
        }  
        return cautruc;
    }
    function Cautrucgiai18(C) {
        let A =[];
        for(let i =0;i<C.length;i++){
            A.push((C[i]));
        }
        var cautruc = {
            GiaiTam : A[0],
            GiaiBay : A[1],
            GiaiSau : A[2]+','+A[3]+','+A[4],
            GiaiNam : A[5],
            GiaiTu : A[6]+','+A[7]+','+A[8]+','+A[9]+','+A[10]+','+A[11]+','+A[12],
            GiaiBa : A[13]+','+A[14],
            GiaiNhi : A[15],
            GiaiNhat : A[16],
            GiaiDacBiet : A[17],
            }   
            return  cautruc;
    }
    function Cautrucgiai18c(C) {
        let A =[];
        for(let i =0;i<C.length;i++){
            A.push((C[i]));
        }
        var cautruc = {             
            GiaiDacBiet :A[0],
            GiaiNhat : A[1],
            GiaiNhi : A[2],
            GiaiBa : A[3]+','+A[4],
            GiaiTu : A[5]+','+A[6]+','+A[7]+','+A[8]+','+A[9]+','+A[10]+','+A[11],
            GiaiNam : A[12], 
            GiaiSau : A[3]+','+A[4]+','+A[5],
            GiaiBay : A[16],
            GiaiTam : A[17],
            }   
            return  cautruc;
    }

module.exports = {Cautrucgiai27,Cautrucgiai18,Cautrucgiai27c,Cautrucgiai18c}; 
