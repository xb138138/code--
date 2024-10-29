let canvas = document.getElementById("myCanvas");//1
// canvas = 877*672;
canvas.width = 877;
canvas.height = 672;
let context = canvas.getContext("2d");//2
let image = new Image();
let radius = 50;
image.src = "../images/pic.png";
image.onload = function (e) {
    initCanVas();//调用初始化画布方法
    
}

function initCanVas() {
    // 画个圆:圆心，半径
    Region={
        x:Math.random()*canvas.width - radius,
        y:Math.random()*canvas.height - radius,
        r:radius
    };
    // 调用画圆的方法
    draw(Region)
}

function draw(Region) {
    context.clearRect(0, 0, canvas.width, canvas.height);//4
    context.save();
    // 调用一个截切圆形区域的方法
    setRegion(Region);
    // 绘制图片
    context.drawImage(image, 0, 0);
    // 洗笔
    context.restore();
}

function setRegion(Region) {
    context.beginPath();//3
    // 圆形区域边界
    context.arc(Region.x, Region.y, Region.r, 0, 2 * Math.PI, false);
    // 裁剪
    context.clip();
}
// 当a标签的href属性值为空时，自动调用onload方法
function reset() {
    radius += 20;
    if (radius > 200) {
        radius = 50;
    }
    initCanVas();
}

// 打开红包
function open() {
    Region.r = 2*Math.max(canvas.width, canvas.height);
    draw(Region);
}