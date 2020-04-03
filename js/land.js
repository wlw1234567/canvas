(
  function() {
    let Land = function() {
      this.x = 0
      this.w = 336
      this.h = 112
      this.step = 1
    }
    window.Land = Land
    Land.prototype.update = function() {
      this.x -= this.step
      if(this.x < -this.w) {
        this.x = 0
      }
    }
    Land.prototype.render = function() {
      game.draw.drawImage(game.R["land"], this.x, game.canvas.height - this.h)
      game.draw.drawImage(game.R["land"], this.x + this.w, game.canvas.height - this.h)
      game.draw.drawImage(game.R["land"], this.x + this.w * 2, game.canvas.height - this.h)
    }
  }
)()