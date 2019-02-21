console.log("goalMessageTest")

// Goal Message Function

function GoalMessage(game) {

    this.game = game;

    this.show = false;

    // Scoreboard Frame Positions

    this.x = this.game.canvas.width / 3;

    this.y = this.game.canvas.height / 2;

};

// Draw Scoreboard

GoalMessage.prototype.draw = function(text, x, y, color) {

    if (this.show) {

        this.game.ctx.font = "150px arial bold";

        this.game.ctx.fillStyle = "#f4b609";

        this.game.ctx.shadowOffsetX = 5;

        this.game.ctx.shadowOffsetY = 5;

        this.game.ctx.shadowColor = "BLACK";

        this.game.ctx.fillText(this.game.goalText, this.x + 15, this.y + 35);

        if (this.game.score.player1) {

            this.game.ctx.font = "30px arial";

            this.game.ctx.fillStyle = "#393939";

            this.game.ctx.shadowOffsetX = 0;

            this.game.ctx.shadowOffsetY = 0;

            this.game.ctx.fillText("Player 1 Scores!", this.x, this.y - 190);

        } else {

            this.game.ctx.font = "30px arial";

            this.game.ctx.fillStyle = "WHITE";

            this.game.ctx.shadowOffsetX = 0;

            this.game.ctx.shadowOffsetY = 0;

            this.game.ctx.fillText("Player 2 Scores!", this.x + 260, this.y - 190);

        };

    };

};