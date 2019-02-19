console.log("playerTest")

function Player(game, x, y, player) {

    this.game = game;

    this.img = new Image();

    if (player === 1) {
        this.img.src = 'images/player1.png';
    } else {
        this.img.src = 'images/player2.png';
    };

    // Players Width and Height

    this.w = 60;

    this.h = 110;

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
            this.game.player2.y -= 45;
        } else if (event.keyCode == this.game.keys.DOWN_ARROW) {
            this.game.player2.y += 45;
        } else if (event.keyCode === this.game.keys.W) {
            this.game.player1.y -= 45;
        } else if (event.keyCode === this.game.keys.S) {
            this.game.player1.y += 45;
        }
    }.bind(this);

};