console.log("scoreboardTest")

function Scoreboard(game) {

    this.game = game;

    // Scoreboard Frame Positions


    this.x1 = this.game.canvas.width / 2 - 50
    this.y1 = 70

    this.x2 = this.game.canvas.width / 2 + 20
    this.y2 = 70

};

// Draw Player

Scoreboard.prototype.draw = function(text, x, y, color) {

    this.game.ctx.font = "55px arial";

    this.game.ctx.fillStyle = "WHITE";

    this.game.ctx.fillText(this.game.score.player1, this.x1, this.y1);

    this.game.ctx.fillText(this.game.score.player2, this.x2, this.y2);

};