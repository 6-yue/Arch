
for (var i = 0; i < 5; i++) {
  (function () {
    setTimeout(function () {
      console.log(i)
    }, i * 1000)
  })(i)
}
