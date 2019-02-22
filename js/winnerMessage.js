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

        if (this.game.whoScore === 'p1') {

            this.game.ctx.font = "50px press";

            this.game.ctx.fillStyle = "#f4b609"; // Color: Gold

            // this.game.ctx.fillStyle = "#393939"; // Color: Grey

            this.game.ctx.shadowOffsetX = 2;

            this.game.ctx.shadowOffsetY = 2;

            this.game.ctx.shadowColor = "BLACK";

            this.game.ctx.fillText(this.game.winnerText.player1, this.x - 325, this.y + 225);

            this.game.ctx.shadowOffsetX = 0;

            this.game.ctx.shadowOffsetY = 0;

        } else {


            this.game.ctx.font = "50px press";

            this.game.ctx.fillStyle = "#f4b609"; // Color: Gold

            // this.game.ctx.fillStyle = "WHITE"; // Color: White

            this.game.ctx.shadowOffsetX = 3;

            this.game.ctx.shadowOffsetY = 3;

            this.game.ctx.shadowColor = "BLACK";

            this.game.ctx.fillText(this.game.winnerText.player2, this.x - 325, this.y + 225);

            this.game.ctx.shadowOffsetX = 0;

            this.game.ctx.shadowOffsetY = 0;

        }


    };

};