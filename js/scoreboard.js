console.log("scoreboardTest")

// Scoreboard Function

function Scoreboard(game) {

    this.game = game;

    // Scoreboard Frame 1 Positions

    this.x1 = this.game.canvas.width / 2 - 150;

    this.y1 = 110;

    // Scoreboard Frame 2 Positions

    this.x2 = this.game.canvas.width / 2 + 95;

    this.y2 = 110;

};

// Draw Scoreboard

Scoreboard.prototype.draw = function(text, x, y, color) {

    // Draw Black Rectangles Player 1

    this.game.ctx.fillStyle = "#393939";

    this.game.ctx.fillRect(this.x1 - 25, this.y1 - 85, 100, 100);

    this.game.ctx.strokeRect(this.x1 - 25, this.y1 - 85, 100, 100);

    // Draw Black Rectangles Player 2

    this.game.ctx.fillStyle = "#393939";

    this.game.ctx.fillRect(this.x2 - 25, this.y2 - 85, 100, 100);

    this.game.ctx.strokeRect(this.x2 - 25, this.y2 - 85, 100, 100);

    // Draw Score Player 1

    this.game.ctx.font = "65px press";

    this.game.ctx.fillStyle = "#5AE31E";

    this.game.ctx.fillText(this.game.score.player1, this.x1, this.y1);

    // Draw Score Player 2

    this.game.ctx.font = "65px press";

    this.game.ctx.fillStyle = "#5AE31E";

    this.game.ctx.fillText(this.game.score.player2, this.x2, this.y2);

};