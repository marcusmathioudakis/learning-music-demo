/** class used for wrapping around the Web Audio OscillatorNode 
to provide a controllable oscilaltor **/
export default class Oscillator {

  constructor(context) {
    this.context = context;
    this.frequency = 440;
    this.type = 'sine';
    this.playing = false;
    //setup analyser to get audio data - used for visualisation
    this.analyser = context.createAnalyser();
    this.analyser.fftSize = 2048;
    var bufferLength = this.analyser.frequencyBinCount;
    this.audioDataBuffer = new Uint8Array(bufferLength); 
    // setup other audio nodes
    this.gainNode = this.context.createGain();
    this.gainNode.connect(this.analyser);
    this.analyser.connect(context.destination);
  }
  
  play() {
    // we need to create a new oscillator every time as you can't
    // start an oscillator once it's been stopped
    this.oscillator = this.context.createOscillator();
    this.oscillator.type = this.type;
    this.oscillator.frequency.value = this.frequency;
    this.oscillator.connect(this.gainNode);
    // we do this to avoid a click in the audio
    this.gainNode.gain.exponentialRampToValueAtTime(0.5, this.context.currentTime + 0.1);
    this.oscillator.start();
    this.playing = true;
  }
  
  stop() {
    this.gainNode.gain.exponentialRampToValueAtTime(0.001, this.context.currentTime + 0.1);
    this.oscillator.stop(this.context.currentTime + 0.1);
    this.playing = false;
  }

  isPlaying() {
    return this.playing;
  }

  setType(type) {
    // we store type outside the oscillator to prevent it being lost
    // when the oscillator is stopped and restarted
    this.type = type;
    if (this.oscillator) {
        this.oscillator.type = type;
    }
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

  /** return a snapshot of the audio data as an Uint8Array - used for visualisation**/
  getAudioDataBuffer(){
    this.analyser.getByteTimeDomainData(this.audioDataBuffer);
    return this.audioDataBuffer;
  }

}  

