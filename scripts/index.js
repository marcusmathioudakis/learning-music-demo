var context = new AudioContext();
var oscillator = new Oscillator(context);

//PLAYBACK CONTROLS///////
// playButtons used so that different buttons that can 
// trigger playback (e.g. keyboard keys)
var playButtons = document.querySelectorAll('.playButton'); 
var mainPlayButton = document.querySelector('#play-main');
playButtons.forEach(function(playButton) {
  playButton.addEventListener('click', function() {
    if (oscillator.isPlaying()) {
      oscillator.stop();
      mainPlayButton.classList.remove('icon-pause');
      mainPlayButton.className+=" icon-play";
    } else {
      oscillator.play();
      mainPlayButton.classList.remove('icon-play');
      mainPlayButton.className+=" icon-pause";
    }
  })
})

//FREQUENCY CONTROLS//////
var frequencySlider = document.querySelector('#frequency-slider');
var frequencyValue = document.querySelector('#frequency-value');
frequencySlider.addEventListener('input', function() {
  frequencyValue.innerHTML = frequencySlider.value;
  oscillator.setFrequency(frequencySlider.value);
})

//OSCILLOSCOPE/////////
var canvasContainer = document.querySelector('#oscilloscope-container');
var oscilloscope =  new Oscilloscope(oscillator, canvasContainer);
window.onresize = function(event) {
  oscilloscope.updateWidth();
};





