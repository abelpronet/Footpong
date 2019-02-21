console.log("backgrounTest")

// Background Function

function Background(game) {

    // Background Image

    this.game = game;

    this.img = new Image();

    this.img.src = 'images/footballFieldv3.jpg';

    // Backgroun Position

    this.x = 0;

    this.y = 0;

};

// Draw Background

Background.prototype.draw = function() {

    this.game.ctx.drawImage(this.img, this.x, this.y, this.game.canvas.width, this.game.canvas.height);

};