function handleLogin() {
    const user = document.getElementById('username-input').value.trim();
    if(user) {
        document.getElementById('display-user').innerText = user;
    }
    document.getElementById('auth-screen').style.display = 'none';
    document.getElementById('app-container').style.display = 'flex';
}

function switchView(viewName) {
    if(viewName === 'roadmap') {
        document.getElementById('roadmap-view').style.display = 'flex';
        document.getElementById('video-view').style.display = 'none';
    }
}

function openCampView(lessonTitle, dayNum, dayMonth, subjectName) {
    document.getElementById('roadmap-view').style.display = 'none';
    document.getElementById('video-view').style.display = 'flex';
    
    document.getElementById('current-lesson-title').innerText = lessonTitle;
    document.getElementById('box-day-num').innerText = dayNum;
    document.getElementById('box-day-month').innerText = dayMonth.toUpperCase();
    document.getElementById('box-subject-badge').innerText = subjectName.toUpperCase();
}

function showPopupQuestion() {
    document.getElementById('video-popup-question').style.display = 'flex';
}

function closeQuestion() {
    document.getElementById('video-popup-question').style.display = 'none';
}

const videoElem = document.getElementById('custom-html-video');
let isPlaying = false;

function togglePlayState() {
    const btn = document.getElementById('play-pause-btn');
    if (videoElem.paused) {
        videoElem.play();
        btn.innerText = '⏸';
        isPlaying = true;
    } else {
        videoElem.pause();
        btn.innerText = '▶';
        isPlaying = false;
    }
}

videoElem.addEventListener('timeupdate', () => {
    const seekBar = document.getElementById('video-seek-bar');
    const percentage = (videoElem.currentTime / videoElem.duration) * 100;
    seekBar.value = percentage || 0;
    
    const curM = Math.floor(videoElem.currentTime / 60);
    const curS = Math.floor(videoElem.currentTime % 60);
    const durM = Math.floor(videoElem.duration / 60) || 0;
    const durS = Math.floor(videoElem.duration % 60) || 0;
    
    document.getElementById('time-counter').innerText = 
        `${curM}:${curS < 10 ? '0':''}${curS} / ${durM}:${durS < 10 ? '0':''}${durS}`;
});

function skipTime(seconds) {
    videoElem.currentTime += seconds;
}

function toggleFullscreen() {
    const container = document.getElementById('video-box-wrapper');
    if (!document.fullscreenElement) {
        if (container.requestFullscreen) {
            container.requestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

function selectModule(element) {
    document.querySelectorAll('.mod-box').forEach(m => m.style.borderColor = '#e2e8f0');
    element.style.borderColor = '#00c853';
    element.style.background = '#e8f5e9';
}
