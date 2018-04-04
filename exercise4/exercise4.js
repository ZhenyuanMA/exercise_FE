function Box (w, h, c) {
  this.box = document.createElement('div')
  this.box.className = "box"
  this.box.style.width = w + "px"
  this.box.style.height = h + "px"
  this.box.style.backgroundColor = c
}

Box.prototype.addTo = function (name) {
  var newBox = this.box.cloneNode()
  var position = document.getElementsByTagName(name)
  for (var i = 0; i < position.length; i++) {
    position[i].appendChild(newBox)
  }
  return this
}

Box.prototype.delay = function (time) {
  setInterval(function () {}, time*1000)
  return this
}

Box.prototype.remove = function () {
  var boxes = document.getElementsByClassName("box")
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].style.display = "none"
  }
  return this
}


var b = new Box(100, 100, "red").addTo("body").addTo("body").delay(3).remove()