function Box (w, h, c) {
  this.createBox = function () {
    var box = document.createElement('div')
    box.style.width = w + "px"
    box.style.height = h + "px"
    box.style.backgroundColor = c
    return box
  }
  this.box = []
  this.actions = []
  setTimeout(this.next.bind(this), 0)
}

Box.prototype.next = function () {
  var func = this.actions.shift()
  if (func) func.apply(this)
  return this
}

Box.prototype.addTo = function (name) {
  console.log('+addTo')
  this.actions.push(function () {
    console.log('addTo')
    var position = document.getElementsByTagName(name)
    for (var i = 0; i < position.length; ++i) {
      var box = this.createBox()
      this.box.push(box)
      position[i].appendChild(box)
    }
    this.next()
  })
  return this
}

Box.prototype.delay = function (time) {
  console.log('+delay')
  this.actions.push(function () {
    console.log('delay')
    setInterval(function(){ this.next() }.bind(this), time*1000)
  })
  return this
}

Box.prototype.remove = function () {
  console.log('+remove')
  this.actions.push(function () {
    console.log('remove')
    for (var j in this.box) {
      var box = this.box[j]
      box.style.display = "none"
    }
    this.next()
  })
  return this
}

var b = new Box(100, 100, "red")
b.addTo("body").addTo("body").delay(3).remove()