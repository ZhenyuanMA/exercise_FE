function Box (w, h, c) {
  var box = document.createElement('div')
  box.style.width = w + "px"
  box.style.height = h + "px"
  box.style.backgroundColor = c

  function addTo (name) {
    var position = document.getElementsByName(name)
    position.appendChild(box)
    return this
  }

  function delay (time) {
    setInterval(function(){}, time*1000)
    return this
  }

  function remove () {
    box.style.display = "none"
    return this
  }
}

var b = new Box(100, 100, "red")
b.addTo("body").addTo("body").delay(3).remove()