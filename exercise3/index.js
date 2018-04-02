window.onload = function () {

  function active(offset) {
    if ($(".main").position().left == -480 && offset == 720) {
      var newLeft = $(".main").position().left + offset - 3600;
    }
    else if ($(".main").position().left == -3360 & offset == -720) {
      var newLeft = $(".main").position().left + offset + 3600;
    }
    else {
      var newLeft = $(".main").position().left + offset;
    }
    $(".main").css({ left: newLeft + "px" })
  }

  var timer

  function play() {
    timer = setInterval(function () {
      active(-720)
    }, 2000)
  }

  function stop() {
    clearInterval(timer);
  }

  play()

  $(".carousel").mouseover(function () {
    stop()
  })

  $(".carousel").mouseout(function () {
    play()
  })

  $(".pre").click(function () {
    active(720)
  })
  $(".next").click(function () {
    active(-720)
  })
}