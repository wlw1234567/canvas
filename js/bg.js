(function() {
  let Bg = function() {
    this.x = 0
    this.w = 288
    this.h = 512
    this.step = 1
  }
  window.Bg = Bg

  // 更新
  Bg.prototype.update = function() {
    this.x -= this.step
    // 临界值判断
    if(this.x < -this.w) {
      this.x = 0
    }
  }
  // 渲染
  Bg.prototype.render = function() {
    // 将图片按原尺寸放在画布上
    game.draw.drawImage(game.R["bg_day"], this.x, game.canvas.height - this.h)
    game.draw.drawImage(game.R["bg_day"], this.x + this.w, game.canvas.height - this.h)
    game.draw.drawImage(game.R["bg_day"], this.x + this.w * 2, game.canvas.height - this.h)
    // 画个填充矩形把天空补齐
    game.draw.fillStyle = "#4ec0ca"
    game.draw.fillRect(0, 0, game.canvas.width, game.canvas.height - this.h)
  }
})()