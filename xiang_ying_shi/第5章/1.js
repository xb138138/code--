var canvas = document.getElementById("cavsElem");
var ctx = canvas.getContext("2d");
var ys = document.getElementById("ys");
canvas.width = 1620;
canvas.height = 600;

// 绘制三角形

ctx.beginPath(); // 开始绘制
ctx.moveTo(0, 0); // 移动到(0,0)
ctx.lineTo(1620, 0);
ctx.lineTo(1620, 600);
ctx.lineTo(0, 600);
ctx.closePath();
ctx.stroke();
ctx.fill();

canvas.onmousedown = function (e) {
    var x = e.clientX-canvas.getBoundingClientRect().left;
    var y = e.clientY-canvas.getBoundingClientRect().top;
    ctx.strokeStyle = ys.value;
    ctx.beginPath();
    ctx.moveTo(x, y);
    canvas.onmousemove = function (e) {
        var x = e.clientX-canvas.getBoundingClientRect().left;
        var y = e.clientY-canvas.getBoundingClientRect().top;
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

canvas.onmouseup = function () {
    canvas.onmousemove = null;
}

