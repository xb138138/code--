var lrc = `
    [00:00.00]我和我的祖国 - 李谷一 
    [00:15.87]词：张藜
    [00:31.75]曲：秦咏城
    [00:47.63]我和我的祖国一刻也不能分割
    [00:57.69]无论我走到哪里都流出一首赞歌
    [01:08.02]我歌唱每一座高山我歌唱每一条河
    [01:18.52]袅袅炊烟小小村落路上一道辙
    [01:42.17]你用你那母亲的脉搏和我诉说
    [01:52.28]我的祖国和我像海和浪花一朵
    [02:02.49]浪是海的赤子海是那浪的依托
    [02:13.03]每当大海在微笑我就是笑的旋涡
    [02:23.39]我分担着海的忧愁分享海的欢乐
    [02:46.65]永远给我碧浪清波心中的歌
    [02:57.09]啦啦
    [03:10.12]永远给我碧浪清波心中的歌
`

// 创建歌词对象
function getContent(data){
    var obj = []
    // 字符串切割
    var lines = data.split('\n')
    // 正则表达式匹配
    var reg = /\[(\d{2})\:(\d{2})\.(\d{2})\]s*(.+)/
    for (var i = 0; i < lines.length; i++) {
        var line = lines[i]
        var matches = reg.exec(line)
        if (matches) {
            var m = parseFloat(matches[1])
            var s = parseFloat(matches[2])
            var ms = parseFloat(matches[3])
            var content = matches[4]
            var time = m * 60 * 1000 + s * 1000 + ms
            var obj1 = {
                content,
                time
            }
            obj.push(obj1)
        }
    }
    return obj
}
// 调用
var lyircArr = getContent(lrc)
console.log(lyircArr);
// 网络数据传输json字符串
var json = {ok: true, data: lyircArr}
// 
// 将歌词放在页面上
function writContent() {
    if(json.ok){
        var html = json.data
        var t = -1
        var htmlstr = ''
        html.forEach(function (value) {
            htmlstr += `<div class="up">${value.content}
            <p class="up_box"></p>
            </div>`
        })
        $('.music_word').append(htmlstr)
        // 将.up放在对象
        var lines = document.querySelectorAll('.up')
        var len = lines.length

        // 切换和暂停
        var flag = true
        // 播放
        $('#music_play').click(function () {
            if(flag){
                // 播放
                $('#myAudio')[0].play()
                // 旋转
                $('.music_pic').addClass('rotate')
                
                // 指针
                $('.music_ico_1').css('transform', 'rotate(10deg)')
                // 换图
                $('#music_ico').attr('src', 'img/play.png')
                // 提词
                time4 = setInterval(time4Fun,value.time)
                function time4Fun(){
                    t++
                    $('progress').val(value.time)
                    for(let i = 0;i < len;i++){
                        lines[i].Style.fontSize = '18px'
                        lines[i].style.color = 'white'
                        lines[i].style.transition = 'all 0.5s'
                        // 
                        lines[i].style.color = 'rgba(251,224,1,1)'
                        lines[i].style.fontSize = '20px'
                        lines[i].style.transition = 'all 0.5s'
                    }
                    $('.music_word').css('transform','translateY(-'+$t*line_height+'px)')
                }
                flag = false
            }else{
                $('#myAudio')[0].pause()
                $('.music_pic').removeClass('rotate')
                $('#music_ico').attr('src', 'img/paused.png')
                flag = true
            }
        })
    }
}

writContent()