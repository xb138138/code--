
let playBtn = document.querySelector('.play');
let myAudio = document.querySelector('#myAudio');
let progress = document.querySelector('#progress');
// 记录播放器的播放状态
let isPlay = false;
// 点击播放器的播放按钮，开始播放歌曲
playBtn.addEventListener('click', function () {
    if (isPlay) {
        myAudio.pause();
        playBtn.src = './images/public/MaterialSymbolsPlayCircleRounded_黑.svg';
    } else {
        myAudio.play();
        playBtn.src = './images/public/MaterialSymbolsPauseCircleRounded_黑.svg';
    }
    isPlay = !isPlay
})
// 监听歌曲播放信息
myAudio.addEventListener('timeupdate', function () {
    // 获取歌曲当前播放时长
    let currentTime = myAudio.currentTime;
    let m1 = Math.floor(currentTime / 60);
    let s1 = Math.floor(currentTime % 60);
    let currentTime1 = (m1 < 10 ? '0' + m1 : m1) + ':' + (s1 < 10 ? '0' + s1 : s1);
    time1.textContent = currentTime1;
    // 获取歌曲总时长
    let duration = myAudio.duration;
    let m2 = Math.floor(duration / 60);
    let s2 = Math.floor(duration % 60);
    let duration1 = (m2 < 10 ? '0' + m2 : m2) + ':' + (s2 < 10 ? '0' + s2 : s2);
    time2.textContent = duration1;
    // 进度条
    progress.value = (currentTime / duration) * 100;
})
// 倍数选择播放
let doubleBtn = document.querySelector('#select_double');
doubleBtn.addEventListener('click', function () {
    myAudio.playbackRate = doubleBtn.value
})


// 点击播放器的歌曲图片，歌曲详情页面上升
let music_player_left = document.querySelector('.music_player_left');
let music_iframe = document.querySelector('.music_iframe');
music_player_left.addEventListener('click', function () {
    document.querySelector('.music_iframe').style.transform = 'translateY(0)';
})

// 点击添加
let addBtn = document.querySelector('.add');
let mp4Files=[]
let lrcFiles=[]
let imgFiles=[]
let lrcData=[]
addBtn.addEventListener('click',()=>{
    document.querySelector('#file').click()
})
document.querySelector('#file').addEventListener('change',(e)=>{
//     1.2 获取到'input type=file'元素的files属性，对属性里的文件对象数组进行筛选，筛选出文件名以MP4和m4a结尾的文件对象存入公共数组，将数组里文件对象的名字渲染显示到歌曲列表里。    
    console.log(e.target.files)
    mp4Files=Array.from(e.target.files).filter(item=>{return /mp4$|m4a$/.test(item.name)})
    mp4Files.forEach((item,index)=>{
        document.querySelector('#tbody').innerHTML+=`
            <tr>
                <td data-index=${index}>${item.name}</td>
                <td>未知</td>
                <td>未知</td>
                <td>未知</td>
            </tr>
        `
    })
//     1.3 筛选出文件名以lrc结尾的文件对象存入公共数组,筛选出文件类型以image开头的图片文件对象存入公共数组
    lrcFiles=Array.from(e.target.files).filter(item=>{return /lrc$/.test(item.name)})
    imgFiles=Array.from(e.target.files).filter(item=>{return /^image/.test(item.type)})
    console.log(mp4Files,lrcFiles,imgFiles)
})

document.querySelector('#tbody').addEventListener('click',(e)=>{
    if(e.target.tagName==='TD'){
        myAudio.src = mp4Files[e.target.dataset.index].webkitRelativePath
        console.log(mp4Files[e.target.dataset.index].webkitRelativePath);
        console.log(mp4Files[0].webkitRelativePath);
        
        console.log(e.target.dataset.index);
        console.log('111');
        
        document.querySelector('.music_player_left_img').src=imgFiles[e.target.dataset.index].webkitRelativePath
        // parseLrc(lrcFiles[e.target.dataset.index])
        document.querySelector('.music_name').textContent=mp4Files[e.target.dataset.index].name
        myAudio.play()
    }
})
// 点击上一首,改变当前播放的歌曲为上一首
let prevBtn = document.querySelector('.prev');
let nextBtn = document.querySelector('.next');
prevBtn.addEventListener('click', function () {
    myAudio.currentTime = 0;
    myAudio.src = mp4Files[e.target.dataset.index].webkitRelativePath
    myAudio.play()
    console.log(mp4Files[e.target.dataset.index].webkitRelativePath);
    console.log('111');
    
    
})

nextBtn.addEventListener('click', function () {
    myAudio.currentTime = 0;
    
})