/** class used for wrapping around the Web Audio OscillatorNode **/
class Oscillator {

  constructor(context) {
    this.context = context;
    this.frequency = 440;
    this.type = 'sine';
    this.playing = false;
  }
  
  init_() {
    this.oscillator = this.context.createOscillator();
    this.oscillator.frequency.value = this.frequency;
    this.gainNode = this.context.createGain();
    this.oscillator.connect(this.gainNode);
    this.gainNode.connect(this.context.destination);
  }

  play(value) {
    // once you stop an oscillator, you can't start it again. Hence we create a 
    // new oscillator each time the oscillator is played.
    this.init_();
    this.gainNode.gain.setValueAtTime(0.5, this.context.currentTime);
    this.oscillator.start();
    this.playing = true;
  }
  
  stop() {
    this.gainNode.gain.exponentialRampToValueAtTime(0.001, this.context.currentTime + 1);
    this.oscillator.stop(this.context.currentTime + 1);
    this.playing = false;
  }

  isPlaying() {
    return this.playing;
  }

  setType(type) {
    this.oscillator.type = type;
  }

  getFrequency() {
    return this.frequency;
  }

  setFrequency(frequency) {
    this.frequency = frequency;
    if (this.oscillator) {
      this.oscillator.frequency.value = frequency;
    }
  }

}  