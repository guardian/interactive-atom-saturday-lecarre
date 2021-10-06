// // add position sticky to audio player when once user has interacted with it. Also adjusts top position on sticky images
// const audioPlayer = document.getElementById('player');



// RAIN
var $ = require( "jquery" );

var makeItRain = function() {
    //clear out everything
    $('.rain').empty();
  
    var increment = 0;
    var drops = "";
    var backDrops = "";
  
    while (increment < 100) {
      //couple random numbers to use for various randomizations
      //random number between 98 and 1
      var randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
      //random number between 5 and 2
      var randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
      //increment
      increment += randoFiver;
      //add in a new raindrop with various randomizations to certain CSS properties
      drops += '<div class="drop" style="left: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
      backDrops += '<div class="drop" style="right: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
    }
  
    $('.rain.front-row').append(drops);
    $('.rain.back-row').append(backDrops);
  }
  
  makeItRain();





  // audio player

const audioPlayer = document.querySelector(".audio-player");
const audio = new Audio(
  "<%= path %>/silverview-chapter-one.mp3"
);

console.log(audio)

audio.addEventListener(
  "loadeddata",
  () => {
    audioPlayer.querySelector(".time .length").textContent = getTimeCodeFromNum(
      audio.duration
      );
      console.log("working 1")
  },
  false
);

//click on timeline to skip around
const timeline = audioPlayer.querySelector(".timeline");
timeline.addEventListener("click", e => {
  const timelineWidth = window.getComputedStyle(timeline).width;
  const timeToSeek = e.offsetX / parseInt(timelineWidth) * audio.duration;
  audio.currentTime = timeToSeek;
}, false);

//check audio percentage and update time accordingly
setInterval(() => {
  const progressBar = audioPlayer.querySelector(".progress");
  progressBar.style.width = audio.currentTime / audio.duration * 100 + "%";
  audioPlayer.querySelector(".time .current").textContent = getTimeCodeFromNum(
    audio.currentTime
  );
}, 500);

console.log("working 2")

//toggle between playing and pausing on button click

const playBtn = document.querySelector(".toggle-play");
console.log("playbutton" + playBtn)
playBtn.addEventListener(
  "click",
  () => {
    console.log("clicked play")
    if (audio.paused) {
      playBtn.classList.remove("play");
      playBtn.classList.add("pause");
      audio.play();
    } else {
      playBtn.classList.remove("pause");
      playBtn.classList.add("play");
      audio.pause();
    }
  },
  false
);


function getTimeCodeFromNum(num) {
  let seconds = parseInt(num);
  let minutes = parseInt(seconds / 60);
  seconds -= minutes * 60;
  const hours = parseInt(minutes / 60);
  minutes -= hours * 60;

  if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
  return `${String(hours).padStart(2, 0)}:${minutes}:${String(
    seconds % 60
  ).padStart(2, 0)}`;
}

const audioWrapper = document.querySelector('.audio-wrapper')
const inlineImage = document.querySelector('.inline-pic.stick-me')

playBtn.addEventListener('click', (event) => {
    console.log(audioPlayer + "playing")
    audioWrapper.classList.add('stick-me')
    inlineImage.style.top = '58px'
})

const analyticsCallback = () => {
  window.guardian.ophan.record({
      component: 'lecarre : play button',
      value: 1
  });
  playBtn.removeEventListener('click', analyticsCallback);
}

playBtn.addEventListener('click', analyticsCallback)
