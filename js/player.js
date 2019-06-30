let video = document.getElementById("player");
let but = document.getElementById("play-ico");
let juice = document.getElementById("juice");
let sound_but = document.getElementById("snd-btn");
let sound_slider = document.getElementById('sound-ctrl');

function swap(itemName, to_remove, to_add) {
  itemName.classList.remove(to_remove);
  itemName.classList.add(to_add);
}

video.addEventListener("click", function() {
  if (video.paused) {
    video.play();
    swap(but, "fa-play", "fa-pause");
  } else {
    video.pause();
    swap(but, "fa-pause", "fa-play");
  }
});

function fullsc(){
  video.createAttribute("allowfullscreen"); 
}

sound_slider.addEventListener("change",function(){
  slider_val = sound_slider.valueAsNumber / 100;
  video.volume = slider_val;
})

video.addEventListener("timeupdate", function() {
  let vidPos = video.currentTime / video.duration;
  juice.style.width = vidPos * 100 + "%";
});

function mute() {
  if (video.muted) {
    video.muted = false;
    swap(sound_but, "fa-volume-mute", "fa-volume-up");
  } else {
    video.muted = true;

    swap(sound_but, "fa-volume-up", "fa-volume-mute");
  }
}

function back() {
  video.currentTime -= 5;
}

function forw() {
  video.currentTime += 5;
}

function playPause() {
  if (video.paused) {
    video.play();
    swap(but, "fa-play", "fa-pause");
  } else {
    video.pause();
    swap(but, "fa-pause", "fa-play");
  }
}

document.getElementById("bar").addEventListener("click", function(e) {
  var x = e.pageX - this.offsetLeft, // or e.offsetX (less support, though)
    y = e.pageY - this.offsetTop, // or e.offsetY
    bar = document.getElementById("bar"),
    clickedValue = (x * this.max) / this.offsetWidth;

  let positioninfo = bar.getBoundingClientRect();
  let width = positioninfo.width;

  console.log((x / width) * 100 + "%");
  percent = (x - 7) / width;
  video.currentTime = video.duration * percent;
  //console.log(x, y);
});

var elem = document.getElementById("pl"),
    fscbut = document.getElementById("fscbut");

/* View in fullscreen */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
    fscbut.setAttribute('onclick','closeFullscreen()')
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
    fscbut.setAttribute('onclick','closeFullscreen()')
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();
    fscbut.setAttribute('onclick','closeFullscreen()')
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
    fscbut.setAttribute('onclick','closeFullscreen()')
  }
}

/* Close fullscreen */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
    fscbut.setAttribute('onclick','openFullscreen()')
  } else if (document.mozCancelFullScreen) { /* Firefox */
    document.mozCancelFullScreen();
    fscbut.setAttribute('onclick','openFullscreen()')
  } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
    document.webkitExitFullscreen();
    fscbut.setAttribute('onclick','openFullscreen()')
  } else if (document.msExitFullscreen) { /* IE/Edge */
    document.msExitFullscreen();
    fscbut.setAttribute('onclick','openFullscreen()')
  }
}