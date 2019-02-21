console.log("playerTest")

// Player Function

function Player(game, x, y, player) {

    // Player Image

    this.game = game;

    this.img = new Image();

    if (player === 1) {
        this.img.src = 'images/hyuga1.png';
    } else {
        this.img.src = 'images/tsubasa2.png';
    };

    // Players Width and Height

    this.w = 80;

    this.h = 140;

    // Players Frame Positions

    if (player === 1) {
        this.x = x;
    } else {
        this.x = x - this.w;
    };

    this.y = y - (this.h / 2);

    this.setListeners();
};

// Draw Player

Player.prototype.draw = function() {

    this.game.ctx.drawImage(this.img, this.x, this.y, this.w, this.h)

};

// Player Listener

Player.prototype.setListeners = function() {

    document.onkeydown = function(event) {

        if (event.keyCode === this.game.keys.UP_ARROW) {
            this.game.player2.y -= 75;
        } else if (event.keyCode == this.game.keys.DOWN_ARROW) {
            this.game.player2.y += 75;
        } else if (event.keyCode === this.game.keys.W) {
            this.game.player1.y -= 75;
        } else if (event.keyCode === this.game.keys.S) {
            this.game.player1.y += 75;
        };

    }.bind(this);

};