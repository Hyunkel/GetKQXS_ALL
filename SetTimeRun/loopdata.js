/**
 * 
 * @param {*Chuyen Doi Mang A thanh kieu So (co the chua NaN)} A 
 */
function loop(A) {
    let B=[];
    for(let i=0;i<A.length;i++){
        B.push(parseInt(A[i]));
    }
    return B
}
/**
 * 
 * @param {*XoaKhoangTrang} B 
 */
function loop2(B) {
    let C =[];
    for(let i =0;i<B.length;i++){
        let a = B[i].toString();
        let b = a.trim();
        C.push(b)
    }
    return C;
} 
function check(A,B,C,D) {
    let D2 =[];
   for(let i=0;i<A.length;i++){
       if(B[i]==A[i] && B[i]==C[i] || B[i]==C[i] && B[i]==D[i] || B[i] == A[i] || B[i] == C[i] || B[i] == D[i]){
           D2.push(B[i]);
       }
   }
   return D2;
}
function check2(A,B,C) {
    let D2 =[];
   for(let i=0;i<A.length;i++){
       if(B[i]==A[i] && B[i]==C[i] || B[i]==C[i]){
           D2.push(B[i]);
       }else{
           D2.push(" ");
       }
   }
   return D2;
}
module.exports = {loop,loop2,check,check2};