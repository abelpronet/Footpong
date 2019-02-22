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

        this.game.ctx.shadowOffsetX = 4;

        this.game.ctx.shadowOffsetY = 4;

        this.game.ctx.shadowColor = "BLACK";

        this.game.ctx.fillText(this.game.goalText, this.x - 5, this.y + 35);

        if (this.game.whoScore === 'p1') {

            this.game.ctx.font = "20px press";

            this.game.ctx.fillStyle = "#f4b609"; // Color: Gold

            // this.game.ctx.fillStyle = "#393939"; // Color: Grey

            this.game.ctx.shadowOffsetX = 2;

            this.game.ctx.shadowOffsetY = 2;

            this.game.ctx.shadowColor = "BLACK";

            this.game.ctx.fillText("Player 1 Scores!", this.x - 120, this.y - 170);

            this.game.ctx.shadowOffsetX = 0;

            this.game.ctx.shadowOffsetY = 0;

        } else {

            this.game.ctx.font = "20px press";

            this.game.ctx.fillStyle = "#f4b609"; // Color: Gold

            // this.game.ctx.fillStyle = "WHITE"; // Color: White

            this.game.ctx.shadowOffsetX = 2;

            this.game.ctx.shadowOffsetY = 2;

            this.game.ctx.shadowColor = "BLACK";

            this.game.ctx.fillText("Player 2 Scores!", this.x + 240, this.y - 170);

            this.game.ctx.shadowOffsetX = 0;

            this.game.ctx.shadowOffsetY = 0;

        };

    };

};