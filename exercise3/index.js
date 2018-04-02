window.onload = function () {

  function active(offset) {
    if ($(".main").position().left == -(imgwidth * 2 / 3) && offset == imgwidth) {
      var newLeft = $(".main").position().left + offset - imgwidth * itemlistlength;
    }
    else if ($(".main").position().left == -(imgwidth * itemlistlength - imgwidth / 3) & offset == -imgwidth) {
      var newLeft = $(".main").position().left + offset + imgwidth * itemlistlength;
    }
    else {
      var newLeft = $(".main").position().left + offset;
    }
    $(".main").css({ left: newLeft + "px" })
  }

  var timer

  var itemlistlength = $(".item").length - 2
  var imgwidth = $("img").width()

  function play() {
    timer = setInterval(function () {
      active(-imgwidth)
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
    active(imgwidth)
  })
  $(".next").click(function () {
    active(-imgwidth)
  })
}