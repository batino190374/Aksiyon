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

let isPlaying = true;
function togglePlayState() {
    isPlaying = !isPlaying;
    const btn = document.getElementById('play-pause-btn');
    btn.innerText = isPlaying ? '⏸' : '▶';
}

function skipTime(seconds) {
    console.log(`${seconds} saniye atlandı.`);
}

function toggleFullscreen() {
    const iframe = document.getElementById('youtube-iframe');
    if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
    }
}

function selectModule(element) {
    document.querySelectorAll('.module-widget').forEach(w => w.style.borderColor = '#e2e8f0');
    element.style.borderColor = '#00c853';
    element.style.background = '#e8f5e9';
}
