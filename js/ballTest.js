console.log("ballTest")

function Ball(game, x, y) {

    this.game = game;

    this.img = new Image();

    this.img.src = 'images/ball.png'

    // Players Width and Height

    this.w = 30;

    this.h = 30;

    // Ball Frame Position

    this.x = x / 2

    this.y = y / 2

    // Ball Velocity

    this.velocityX = 5;

    this.velocityY = 5;

    this.speed = 7

};

// Draw Ball

Ball.prototype.draw = function() {



    this.game.ctx.drawImage(this.img, this.x, this.y, this.w, this.h)

    this.velocity()


};

// Velocity Ball

Ball.prototype.velocity = function() {

    this.x += this.velocityX;

    this.y += this.velocityY;

}