var canvas = document.getElementById("canvas"); // id/class find kora 
var ctx = canvas.getContext("2d"); // kun animation chai ta nerdaron kora

ctx.fillStyle = "green"; // kono contant er baire color dibe
ctx.fillRect(10, 10, 335, 235);

ctx.lineWidth = 3;
ctx.strokeStyle = "black"; // kono contant er boder/vitore color dibe
ctx.strokeRect(12, 12, 335, 235);


var centerX = ctx.wdith / 2;
var centerY = ctx.height / 2;

ctx.beginPath();
ctx.arc(centerX, centerY, 80, 0, 2 * Math.PI, false);
ctx.fillStyle = "red";
ctx.fill();
ctx.strokeStyle = "white";
ctx.stroke();