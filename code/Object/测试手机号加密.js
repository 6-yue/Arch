// 方案一
// let tel = 18877771252;
// console.log(tel)
// var ary = (tel+"").split("");
// ary.splice(3,4,"****");
// var tell = ary.join("");
// console.log(tell);

// 方案二
// let tel = 188777799999;
// tel = tel + ""
// var tell = tel.substr(0,3)+"****"+tel.substr(7)
// console.log(tell);

// 方案三
// let tel = 18877779555;
// tel = tel + "";
// var tell = tel.replace(tel.substring(3,7),"****")
// console.log(tell);

// 方案四
let tel = 18877776666;
let reg = /(\d{3})(\d{4})(\d{4})/;
let tell = (tel + "").replace(reg, "$1****$3")
console.log(tell);
// let tel = 18877776666;
// tel = tel + "";
// // var reg = /(\d{3})/;
// var reg = /(\d{3})(\d{4})(\d{4})/;
// var tell = tel.replace(reg, "$1****$3")
// console.log(tell);