let music = document.getElementById('music')
let progress_bar = document.getElementById('progress_bar')
let progressed = document.getElementById('progressed')
music.volume = 0.05;
music.autoplay = true;
music.load()


music.ontimeupdate = function(e) {
    progressed.style.width = Math.floor(music.currentTime*100/music.duration)+'%';
}

progress_bar.onclick = function(e) {
    music.currentTime = ((e.offsetX/progress_bar.offsetWidth) * music.duration)
    console.log(music)
}


