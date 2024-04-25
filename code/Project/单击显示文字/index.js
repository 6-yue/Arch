(function () {
  window.onclick = function (event) {
    var a = [
      "举杯邀明月，对影成三人",
      "欲买桂花同载酒",
      "在黎明到来之前，必须要有人稍微照亮黑暗",
      "年年今日，灯明如昼。原火不灭，愿人依旧",
      "世事易变，匪石弗转",
      "人生如戏，全靠演技"
    ];

    var heart = document.createElement("b"); //创建b元素
    heart.onselectstart = new Function('event.returnValue=false'); //防止拖动

    document.body.appendChild(heart).innerHTML = '❤' + a[~~(Math.random() * a.length)] + '❤'; //将b元素添加到页面上
    heart.style.cssText = "opacity:0"; //给b元素设置样式

    var f = 16, // 字体大小
      x = event.clientX - f / 2, // 横坐标
      y = event.clientY - f, // 纵坐标
      c = randomColor(), // 随机颜色
      a = 1, // 透明度
      s = 1.2; // 放大缩小

    var timer = setInterval(function () { //添加定时器
      if (a <= 0) {
        document.body.removeChild(heart);
        clearInterval(timer);
      } else {
        heart.style.cssText = "user-select: none;font-size:16px;cursor: default;position: fixed;color:" +
          c + ";left:" + x + "px;top:" + y + "px;opacity:" + a + ";transform:scale(" + s + ");";
        y--;
        a -= 0.010;
        s += 0.001;
      }
    }, 15);
  };
  // 随机颜色
  function randomColor() {
    return "rgb(" + (~~(Math.random() * 255)) + "," + (~~(Math.random() * 255)) + "," + (~~(Math.random() * 255)) + ")";
  }
}());