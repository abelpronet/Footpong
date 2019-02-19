console.log("gameTest")

var Game = {

    // Properties Definition

    canvas: undefined,
    ctx: undefined,
    fps: 60,
    scoreboard: undefined,
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

    // Iniciation Game Method

    init: function(id) {

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
            this.drawAll()
            this.collisionField()
            this.update()
        }.bind(this), 1000 / this.fps)

    },

    // Stop Game Method

    stop: function() {

    },

    // Game Over Method

    gameOver: function() {

    },

    // Reset Game Method

    reset: function() {

        this.background = new Background(this);

        this.player1 = new Player(this, 10, (this.h / 2), 1);

        this.player2 = new Player(this, (this.w - 10), (this.h / 2), 2);

        this.ball = new Ball(this, (this.canvas.width - 15), (this.canvas.height - 15));

        this.scoreboard = new Scoreboard(this);


    },

    // When Player 1 or Player 2 scores, reset the ball

    resetBall: function() {
        this.ball.x = this.w / 2;
        this.ball.y = this.h / 2;
        this.ball.velocityX = -ball.velocityX;
        this.ball.speed;
    },

    // Field Collision Game Method

    collisionField: function() {

        if (this.ball.y + this.ball.h > this.canvas.height || this.ball.y - this.ball.w < 0) {
            this.ball.velocityY = -this.ball.velocityY;
        }

    },

    // Field Collision Game Method

    collisionPlayer: function(ball, player) {

        if (ball.x < player.x + player.w &&
            ball.x + ball.w > player.x &&
            ball.y < player.y + player.h &&
            ball.h + ball.y > player.y) {

            if (Math.sign(this.ball.velocityX) === 1) {
                this.ball.velocityX = Math.floor(Math.random() * 10)
            } else {
                this.ball.velocityX = -Math.floor(Math.random() * 10)
            }

            if (Math.sign(this.ball.velocityY) === 1) {
                this.ball.velocityY = Math.floor(Math.random() * 10)
            } else {
                this.ball.velocityY = -Math.floor(Math.random() * 10)
            }


            this.ball.velocityY = -this.ball.velocityY;
            this.ball.velocityX = -this.ball.velocityX;
            // collision detected!
        }



    },

    // Clear Obstacles Game Method

    update: function() {



        let player = (this.ball.x + this.ball.h < this.w / 2) ? this.player1 : this.player2;
        this.collisionPlayer(this.ball, player)

        // if (this.collisionPlayer(this.ball, player)) {

        //     this.ball.velocityX = -this.ball.velocityX;
        // }

    },

    // Clear Game Method

    clear: function() {

    },

    // Drall All Game Method

    drawAll: function() {

        this.background.draw();

        this.player1.draw();

        this.player2.draw();

        this.ball.draw();

        this.scoreboard.draw();

    },


    // Draw Score Game Method

    drawScore: function() {


    }

}


// Lista de Logica por hacer:

// 1- Colisiones con los players
// 2- Que las colisiones generen un angulo de golpe
// 3- Aumento de la velocidad del juego
// 4- Suma del marcador