let video = document.getElementById('video');
let time1 = document.getElementById('time1');
let time2 = document.getElementById('time2');
let progress = document.getElementById('progress');
let bofang = document.getElementsByClassName('bofang');
let yinliang = document.getElementsByClassName('yinliang');


// 进度条
video.ontimeupdate = function () {
    let value = (video.currentTime / video.duration) * 100;
    progress.value = value;
    // 时间进度
    let m = Math.floor(video.currentTime / 60);
    let s = Math.floor(video.currentTime % 60);
    let time = (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s);
    time1.textContent = time;
    
}
// 点击进度条
progress.onclick = function (e) {
    let value = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = value;
}

// 播放/暂停
bofang[0].onclick = function () {
    if (video.paused) {
        video.play();
        // 暂停
        bofang[0].className = 'iconfont icon-24gl-pauseCircle bofang';
    } else {
        video.pause();
        // 播放
        bofang[0].className = 'iconfont icon-bofang bofang';
    }
}

// 音量开关
yinliang[0].onclick = function () {
    if (video.volume > 0) {
        video.volume = 0;
        yinliang[0].className = 'iconfont icon-jingyin yinliang';
    } else {
        video.volume = 1;
        yinliang[0].className = 'iconfont icon-yinliang yinliang';
    }
}
