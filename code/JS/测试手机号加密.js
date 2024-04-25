let tel = 18877771252;

// 方案一
console.log((tel + "").replace((tel + "").substring(3, 7), "****"), '方案一');

// 方案二
console.log((tel + "").replace(/(\d{3})(\d{4})(\d{4})/, "$1****$3"), '方案二');
