console.log("winnerMessageTest")

// Winner Message Function

function WinnerMessage(game) {

    this.game = game;

    this.show = false;

    // Scoreboard Frame Positions

    this.x = this.game.canvas.width / 2;

    this.y = this.game.canvas.height / 2;

};

// Draw Scoreboard

WinnerMessage.prototype.draw = function(text, x, y, color) {

    if (this.show) {

        if (this.game.score.player1) {

            this.game.ctx.font = "60px arial";

            this.game.ctx.fillStyle = "#393939";

            this.game.ctx.fillText(this.game.winnerText.player1, this.x - 400, this.y + 225);

        } else {


            this.game.ctx.font = "60px arial";

            this.game.ctx.fillStyle = "WHITE";

            this.game.ctx.fillText(this.game.winnerText.player2, this.x + 25, this.y + 225);

        }



    };

};