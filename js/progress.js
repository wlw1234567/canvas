let Progress = function(draw, x, y, w, h) {
  console.log(this,11111)
  this.draw = draw
  this.x = x
  this.y = y
  this.w = w
  this.h = h
}

Progress.prototype.update = function(w) {
  this.w = w
}

Progress.prototype.render = function() {
  this.draw.fillStyle = "red"
  this.draw.fillRect(this.x, this.y, this.w, this.h)
  
}