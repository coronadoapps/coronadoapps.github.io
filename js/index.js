var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ballRadius = 10;
var x = canvas.width/2;
var y = canvas.height/2;
var dx = 2;
var dy = -2;
var ballColor = changeColor();

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = ballColor;
    ctx.fill();
    ctx.closePath();
}

function changeColor(){
    var color = '#';    
    color += Math.floor(Math.random()*16777215).toString(16);
      return color;
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
        ballColor = changeColor();
    }
    if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
        dy = -dy;
        ballColor = changeColor();
    }
    
    x += dx;
    y += dy;
}

setInterval(draw, 10);