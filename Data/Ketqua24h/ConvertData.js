function ConvertData18(data) {
    let a = data.splice(0,9);
       let x = a[3];
       let y = a[4];
       let z = a[6];
       let D=[];
       let gba1 = x.slice(0,5);
       let gba2 = x.slice(6,11);
       let gtu1 = y.slice(0,5);
       let gtu2 = y.slice(6,11);
       let gtu3 = y.slice(12,17);
       let gtu4 = y.slice(18,23);
       let gtu5 = y.slice(24,29);
       let gtu6 = y.slice(30,35);
       let gtu7 = y.slice(36,41);
       let gsau1 = z.slice(0,4);
       let gsau2 = z.slice(5,9);
       let gsau3 = z.slice(10,14);
        D.push(a[0],a[1],a[2],gba1,gba2,gtu1,gtu2,gtu3,gtu4,gtu5,gtu6,gtu7,a[5],gsau1,gsau2,gsau3,a[7],a[8]);
        return D;
}
function ConvertData27(data) {
    let a = data.splice(0,8);
    let D =[];
    let a2 = a[2];
    let gnhi1 = a2.slice(0,5);
    let gnhi2 = a2.slice(6,11);
    let a3 = a[3];
    let gba1 = a3.slice(0,5);
    let gba2 = a3.slice(6,11);
    let gba3 = a3.slice(12,17);
    let gba4 = a3.slice(18,23);
    let gba5 = a3.slice(24,29);
    let gba6 = a3.slice(30,35);
    let a4 =a[4];
    let gtu1 = a4.slice(0,4);
    let gtu2 = a4.slice(5,9);
    let gtu3 = a4.slice(10,14);
    let gtu4 = a4.slice(15,19);
    let a5 = a[5];
    let gnam1 = a5.slice(0,4);
    let gnam2 = a5.slice(5,9);
    let gnam3 = a5.slice(10,14);
    let gnam4 = a5.slice(15,19);
    let gnam5 = a5.slice(20,24);
    let gnam6 = a5.slice(25,29);
    let a6 = a[6];
    let gsau1 = a6.slice(0,3);
    let gsau2 = a6.slice(4,7);
    let gsau3 = a6.slice(8,11);
    let a7 =a[7];
    let gbay1 = a7.slice(1,3);
    let gbay2 = a7.slice(4,6);
    let gbay3 = a7.slice(7,9);
    let gbay4 = a7.slice(10,12);
    D.push(a[0],a[1],gnhi1,gnhi2,gba1,gba2,gba3,gba4,gba5,gba6,gtu1,gtu2,gtu3,gtu4,gnam1,
    gnam2,gnam3,gnam4,gnam5,gnam6,gsau1,gsau2,gsau3,gbay1,gbay2,gbay3,gbay4);
    return D;
}
module.exports = {ConvertData18,ConvertData27};