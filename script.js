function Clock(options) {
  var clock = document.getElementById('clock');
  this.start = function start () {
    var
      date = new Date(),
      time = '',
      h = date.getHours(),
      m = date.getMinutes(),
      s = date.getSeconds();
    m = (m < 10 ? '0' + m : m);
    s = (s < 10 ? '0' + s : s);
    if (options.format != 12) {
      time = (h < 10 ? '0' + h : h) + ':' + m + ':' + s;
    } else {
      if (h > 12) {
        time = (h - 12) + ':' + m + ':' + s + ' PM';
      } else {
        time = h + ':' + m + ':' + s + ' AM';
      }
    }
    clock.innerHTML = time;
    setTimeout(start, 1000);
  };

  this.stop = function stop (){
    clock.onclick = function () {
      alert('Paused! Close to resume.');
    }
  };
}

var clock = new Clock({
  format: '12' // 12 or default 24
});

clock.start();
clock.stop();