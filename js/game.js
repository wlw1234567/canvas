(function() {
  console.log(this)
  let Game = window.Game = function() {
    let canvas = this.canvas = document.getElementById('canvas')
    this.draw = canvas.getContext('2d')
  
    let w = document.documentElement.clientWidth
    let h = document.documentElement.clientHeight
    

    canvas.width = w > 420 ? 420 : w
    canvas.height = h > 750 ? 750 : h

    this.R = {
      "bg_day" : "img/bg_day.png",
      "land" : "img/land.png",
      "pipe_down" : "img/pipe_down.png",
      "pipe_up" : "img/pipe_up.png",
      "bird0_0" : "img/bird0_0.png",
      "bird0_1" : "img/bird0_1.png",
      "bird0_2" : "img/bird0_2.png",
      "title" : "img/title.png",
      "button_play" : "img/button_play.png",
      "tutorial" : "img/tutorial.png",
      "shuzi0" : "img/font_048.png",
      "shuzi1" : "img/font_049.png",
      "shuzi2" : "img/font_050.png",
      "shuzi3" : "img/font_051.png",
      "shuzi4" : "img/font_052.png",
      "shuzi5" : "img/font_053.png",
      "shuzi6" : "img/font_054.png",
      "shuzi7" : "img/font_055.png",
      "shuzi8" : "img/font_056.png",
      "shuzi9" : "img/font_057.png",
      "baozha1" : "img/1.png",
      "baozha2" : "img/2.png",
      "baozha3" : "img/3.png",
      "baozha4" : "img/4.png",
      "baozha5" : "img/5.png",
      "baozha6" : "img/6.png",
      "baozha7" : "img/7.png",
      "baozha8" : "img/8.png",
      "baozha9" : "img/9.png",
      "text_game_over" : "img/text_game_over.png",
      "score_panel" : "img/score_panel.png",
      "medals_0" : "img/medals_0.png",
      "medals_1" : "img/medals_1.png",
      "medals_2" : "img/medals_2.png",
      "medals_3" : "img/medals_3.png",
    };

    let progress = new Progress(this.draw, canvas.width/2 - 150, canvas.height/3, 0, 30)

    let count = 0 // 统计已经加载的图片个数
    let total = Object.keys(this.R).length //所有图片总个数
    
    //遍历对象判断图片是否加载完成
    for( let key in this.R) {
      // 用图片的onload事件是否触发判断图片是否加载完成
      ((src) => {
        this.R[key] = new Image;
        this.R[key].src = src;
        this.R[key].onload = () => {
            count++;
            this.clear();
            progress.update((count / total) * 300);
            progress.render();
            if (count == total) {
                this.start()
            }
        }
      })(this.R[key]);
    }
  }
  Game.prototype.clear = function() {
    this.draw.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }
  Game.prototype.start = function() {
    // 开始前清屏
    
    // this.draw.fillStyle = "red"
    // this.draw.font = "40px consolas"
    // this.draw.fillText("游戏开始", 100, 200)
    this.bg = new Bg()
    this.land = new Land()
    setInterval(() => {
      // 先更新，再渲染
      this.clear()
      this.bg.update()
      this.bg.render()
      this.land.update()
      this.land.render()
    },20)
    
  }

  window.Game = Game
})()