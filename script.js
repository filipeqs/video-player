const video = document.querySelector('video');
const progressRange = document.getElementsByClassName('progress-range');
const progressBar = document.getElementsByClassName('progress-bar');
const playBtn = document.getElementById('play-btn');
const volumeIcon = document.getElementById('volume-icon');
const volumeRange = document.getElementsByClassName('volume-range');
const volumeBar = document.getElementsByClassName('volume-bar');
const currentTime = document.getElementsByClassName('time-elapsed');
const duration = document.getElementsByClassName('time-duration');
const fullscreenBtn = document.getElementsByClassName('fullscreen');

// Play & Pause ----------------------------------- //
const showPlayIcon = () => {
    playBtn.classList.replace('fa-pause', 'fa-play');
    playBtn.setAttribute('title', 'Play');
};

const togglePlay = () => {
    if (video.paused) {
        video.play();
        playBtn.classList.replace('fa-play', 'fa-pause');
        playBtn.setAttribute('title', 'Pause');
    } else {
        video.pause();
        showPlayIcon();
    }
};

// On Video End, show play button icon
video.addEventListener('ended', showPlayIcon);

// Progress Bar ---------------------------------- //

// Volume Controls --------------------------- //

// Change Playback Speed -------------------- //

// Fullscreen ------------------------------- //

// Event Listeners
playBtn.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
