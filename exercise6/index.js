var SVG_NS = 'http://www.w3.org/2000/svg'
var XLINK_NS = 'http://www.w3.org/1999/xlink'

var paper = document.querySelector('svg')

renderStar()

function use (origin) {
  var _use = document.createElementNS(SVG_NS, 'use')
  _use.setAttributeNS(XLINK_NS, 'xlink:href', '#' + origin.id)
  return _use
}

function random (min, max) {
  return min + (max - min) * Math.random()
}

function renderStar () {
  var starRef = document.getElementById('star')
  var starGroup = document.getElementById('star-group')
  var starCount = 500

  var star
  while (starCount--) {
    star = use(starRef)
    star.setAttribute('opacity', random(0.1, 0.4))
    star.setAttribute('transform', 'translate(' + random(-400, 400) + ',' + random(-300, 300) + ')' + 'scale(' + random(0.1, 0.6) + ')')
    starGroup.appendChild(star)
  }
}