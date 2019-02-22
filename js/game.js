console.log("gameTest")

// Game Object

var Game = {

    // Properties Definition

    canvas: undefined,
    ctx: undefined,
    fps: 60,
    intervalId: undefined,
    keys: {
        UP_ARROW: 38,
        DOWN_ARROW: 40,
        W: 87,
        S: 83
    },
    score: {
        player1: 0,
        player2: 0
    },
    whoScore: undefined,
    goal: false,
    goalText: "GOAL! ",
    winnerText: {
        player1: "Player 1 Wins",
        player2: "Player 2 Wins"
    },
    audioGoal: undefined,
    audioBallHit: undefined,
    audioFieldHit: undefined,

    // Iniciation Game Method

    init: function(id) {

        this.audioGoal = new Audio()

        this.audioGoal.src = 'audios/goal.mp3'

        this.audioBallHit = new Audio()

        this.audioBallHit.src = 'audios/ballHit.mp3'

        this.audioFieldHit = new Audio()

        this.audioFieldHit.src = 'audios/fieldHit.mp3'

        this.canvas = document.getElementById(id);

        this.ctx = this.canvas.getContext("2d");

        this.w = window.innerWidth;

        this.h = window.innerHeight;

        this.canvas.width = this.w;

        this.canvas.height = this.h;

        this.reset();

        this.start();

    },

    // Start Game Method

    start: function() {

        this.intervalId = setInterval(function() {

            this.drawAll();

            this.collisionField();

            this.update();

            this.drawScore();

            this.winner()

        }.bind(this), 1000 / this.fps)

    },

    // Drall All Game Method

    drawAll: function() {

        this.background.draw();

        this.player1.draw();

        this.player2.draw();

        this.scoreboard.draw();

        this.ball.draw();

        this.ball.draw();

        this.goalMessage.draw();

        this.winnerMessage.draw();

    },

    // Stop Game Method

    pause: function() {

    },

    // Reset Game Method

    reset: function() {

        this.background = new Background(this);

        this.player1 = new Player(this, 10, (this.h / 2), 1);

        this.player2 = new Player(this, (this.w - 20), (this.h / 2), 2);

        this.ball = new Ball(this, (this.canvas.width - 15), (this.canvas.height - 15));

        this.scoreboard = new Scoreboard(this);

        this.goalMessage = new GoalMessage(this);

        this.winnerMessage = new WinnerMessage(this);

    },

    // When Player 1 or Player 2 scores, Reset the ball Game Method

    resetBall: function() {

        setTimeout(function() {

            this.goal = false

            this.ball.x = this.canvas.width / 2;

            this.ball.y = this.canvas.height / 2;

            this.ball.velocityX = (Math.round(Math.random()) * 2 - 1) * 5;

            this.ball.velocityY = (Math.round(Math.random()) * 2 - 1) * 5;

            this.ball.speed = 1;

        }.bind(this), 5500)

    },

    // Field Collision Game Method

    collisionField: function() {

        if (this.ball.y + this.ball.h > this.canvas.height || this.ball.y - this.ball.w < 0) {

            this.ball.velocityY = -this.ball.velocityY;

            // this.audioFieldHit.play();

        };

    },

    // Player Collision Game Method

    collisionPlayer: function(ball, player) {


        if (ball.x + ball.velocityX < player.x + player.w &&
            ball.x + ball.velocityX + ball.w > player.x &&
            ball.y + ball.velocityY < player.y + player.h &&
            ball.h + ball.y + ball.velocityY > player.y) {

            this.ball.speed += 0.1;
            // console.log("speed is" + this.ball.speed);

            this.audioBallHit.play();

            if (Math.sign(this.ball.velocityX) === 1) {
                // this.ball.velocityX = Math.floor(Math.random() * 10) + 4;
                this.ball.velocityX = Math.floor(Math.random() * 10) + 4 + this.ball.speed;
            } else {
                // this.ball.velocityX = -Math.floor(Math.random() * 10) - 4;
                this.ball.velocityX = -Math.floor(Math.random() * 10) - 4 - this.ball.speed;
            };

            if (Math.sign(this.ball.velocityY) === 1) {
                // this.ball.velocityY = Math.floor(Math.random() * 10) + 4;
                this.ball.velocityY = Math.floor(Math.random() * 10) + 4 + this.ball.speed;
            } else {
                // this.ball.velocityY = -Math.floor(Math.random() * 10) - 4;
                this.ball.velocityY = -Math.floor(Math.random() * 10) - 4 - this.ball.speed;
            };

            this.ball.velocityY = -this.ball.velocityY;
            // console.log("velocity Y is " + this.ball.velocityY);

            this.ball.velocityX = -this.ball.velocityX;
            // console.log("velocity X is " + this.ball.velocityX);

        };

    },

    // Update Game Method

    update: function() {

        let player = (this.ball.x + this.ball.h < this.w / 2) ? this.player1 : this.player2;

        this.collisionPlayer(this.ball, player);

    },

    // Score Message Game Method

    manageScore: function() {

        this.goalMessage.show = true;

        setTimeout(function() {
            this.goalMessage.show = false;
        }.bind(this), 2000)

    },

    manageWinner: function() {

        this.winnerMessage.show = true;

        setTimeout(function() {
            this.winnerMessage.show = false;
            this.score.player1 = 0;
            this.score.player2 = 0;
        }.bind(this), 2000)

    },

    // Draw Score Game Method

    drawScore: function() {

        if (this.ball.x - this.ball.w > this.canvas.width && this.goal === false) {

            this.score.player1++;
            this.audioGoal.play()
            this.manageScore();
            this.whoScore = 'p1'

            this.goal = true;

            this.resetBall();

            // alert("Goal of Player 1!!!  |   Player 1 = " + this.score.player1 + "   |   Player 2 = " + this.score.player2);

        } else if (this.ball.x + this.ball.w * 2 < 0 && this.goal === false) {

            this.score.player2++;
            this.audioGoal.play()
            this.manageScore();
            this.whoScore = 'p2'

            this.goal = true;

            this.resetBall();

            // alert("Goal of Player 2!!!  |   Player 1 = " + this.score.player1 + "   |   Player 2 = " + this.score.player2);

        };

    },

    // Winner Game Method

    winner: function() {

        if (this.score.player1 === 2) {
            this.manageWinner();
            // alert("Player 1 Wins   |   Final Score = " + this.score.player1 + " - " + this.score.player2);

        } else if (this.score.player2 === 2) {
            this.manageWinner();
            // alert("Player 2 Wins   |   Final Score = " + this.score.player1 + " - " + this.score.player2);
        };

    }

}


// Lista de Logica por hacer:

// Winer: cuando el jugador llegue a 5 pts
// Alerta de goool!

// acomodar gol de player 1 y playerff