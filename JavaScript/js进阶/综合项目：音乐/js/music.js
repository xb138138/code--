let musics_id = 0;
// 歌词
function parseLyric(lrc) {
    let lines = lrc.split('\n');
    let lyrics = [];
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];
        let time = line.match(/\[(\d+):(\d+).(\d+)\]/);
        if (time) {
            // 时间以秒为单位
            let t = parseInt(time[1]) * 60 + parseInt(time[2]) + parseInt(time[3]) / 1000;
            let content = line.replace(/\[(\d+):(\d+).(\d+)\]/, '');
            lyrics.push({ time: t, content: content });
        }
    }
    return lyrics;
}
 let lyrics = parseLyric(musics_obj[musics_id].lrc);
 console.log(musics_obj[musics_id]);
 
 //渲染到页面
 let ul = document.querySelector('.pageLyrics ul')
 let addMusic = () => {
    let documentFragment = document.createDocumentFragment();
    ul.innerHTML = '';
    for(let i = 0; i < lyrics.length; i++){
        let li = document.createElement('li');
        li.textContent = lyrics[i].content;
        documentFragment.appendChild(li);
    }
    ul.appendChild(documentFragment);
}
addMusic();
//收藏
let collectBtn = document.querySelector('.collect');
let toCollect = false
collectBtn.addEventListener('click', function () {
    if (toCollect) {
        collectBtn.src = '../images/public/MaterialSymbolsLightFavoriteOutline(0).svg';
    } else {
        collectBtn.src = '../images/public/MaterialSymbolsLightFavorite.svg';
    }
    toCollect = !toCollect
})
collectBtn.addEventListener('mouseover', function () {
    if (toCollect == false) {
        collectBtn.src = '../images/public/MaterialSymbolsLightFavoriteOutline.svg';
    }
})
collectBtn.addEventListener('mouseout', function () {
    if (toCollect == false) {
        collectBtn.src = '../images/public/MaterialSymbolsLightFavoriteOutline(0).svg';
    }
})

// 播放
let playBtn = document.querySelector('.play');
let myAudio = document.querySelector('#myAudio');
let time1 = document.querySelector('#time1');
let time2 = document.querySelector('#time2');
let progress = document.querySelector('#progress');
let toPlay = true
playBtn.addEventListener('click', function () {
    if (toPlay) {
        playBtn.src = '../images/public/MaterialSymbolsPauseCircleRounded.svg';
        myAudio.play();
    } else {
        playBtn.src = '../images/public/MaterialSymbolsPlayCircleRounded.svg';
        myAudio.pause();
    }
    toPlay = !toPlay;
});
let pageLyrics = document.querySelector('.pageLyrics');
let currentIndex = 0;
// 根据时间来获取当前需要显示的条数
const getMusicIndex = () => {
    let time = myAudio.currentTime;
    for(let i = 0;i < lyrics.length; i++) {
        let musicTime = lyrics[i].time;
        if(time < musicTime){
            return i-1;
        }
    }
    return musicObj.length - 1;
}
myAudio.addEventListener('timeupdate', function () {
    // 获取歌曲时长
    time2.textContent = musics_obj[0].songDuration;
    // 当前播放进度
    let currentTime = myAudio.currentTime;
    let m1 = Math.floor(currentTime / 60);
    let s1 = Math.floor(currentTime % 60);
    let currentTime1 = (m1 < 10 ? '0' + m1 : m1) + ':' + (s1 < 10 ? '0' + s1 : s1);
    time1.textContent = currentTime1;
    // 进度条
    progress.value = (currentTime / myAudio.duration) * 100;

    currentIndex = getMusicIndex(); //当前高亮的歌词下标
    let pageLyricsHeight = pageLyrics.clientHeight; //Container高度
    let liHeight = ul.children[0].clientHeight; // 每个li标签的高度
    let movePx = liHeight * currentIndex + liHeight*4 - pageLyricsHeight/2 ; //需要移动的
    let maxMove = ul.clientHeight - pageLyricsHeight/2;
    
    // 范围判断
    if(movePx < 0){
        movePx = 0;
    }
    if(movePx > maxMove){
        movePx = maxMove;
    }
    // 取消前面的高亮
    let activeLi = ul.querySelector('.active');
    if(activeLi){
        activeLi.classList.remove("active");
    }
    // 实现高亮
    let currentLi = ul.children[currentIndex];
    if(currentLi){
        currentLi.classList.add('active');
    }
    // 移动
    ul.style.transform = `translateY(-${movePx + 8}px)`;
});
// 上一首
let prevBtn = document.querySelector('.prev');
prevBtn.addEventListener('click', function () {
    if (musics_id > 0) {
        myAudio.currentTime = 0;
        musics_id--;
        myAudio.src = `../audio/${musics_obj[musics_id].songName}.m4a`;
        lyrics = parseLyric(musics_obj[musics_id].lrc)
        addMusic();
        myAudio.play();
    }
});
// 下一首
let nextBtn = document.querySelector('.next');
nextBtn.addEventListener('click', function () {
    if (musics_id < musics_obj.length - 1) {
        myAudio.currentTime = 0;
        musics_id++;
        myAudio.src = `../audio/${musics_obj[musics_id].songName}.m4a`;
        lyrics = parseLyric(musics_obj[musics_id].lrc)
        addMusic();
        myAudio.play();
    }
});

// 写真
let switchBtn = document.querySelector('.switch');
let toSwitch = false
switchBtn.addEventListener('click', function () {
    if (toSwitch) {
        switchBtn.src = '../images/public/LineMdSwitchOff.svg';
        document.querySelector('.lyrics').style.color = '#a39998';
    } else {
        switchBtn.src = '../images/public/LineMdSwitchOffToSwitchTransition.svg';
        document.querySelector('.lyrics').style.color = '#00cc65';
    }
    toSwitch = !toSwitch
})