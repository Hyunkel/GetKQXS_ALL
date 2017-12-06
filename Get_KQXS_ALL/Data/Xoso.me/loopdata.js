async function loopdata(loop,num) {
    let a = [];
    do {
      let data = await loop.CheckData();
      a.push(data);
    } while (a.length == num);
    return a;
  }
module.exports = loopdata;