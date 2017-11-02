import React, { Component } from "react";
import 'App.css';
import Synth from './Synth';

export default class App extends Component {
  render() {
    return (
      <div id="main-container" className="flex-container-column App">
        <div className="flex-container-row text">
          <div className="item">
            <h1>A Simple Synthesizer</h1>
            <h3>
              When synthesizing sounds, we often start by creating a simple wave
              that repeats itself. Waves commonly used by synthesizers include
              sine, square, triangle and sawtooth waves. How often this wave
              repeats itself is what we call the wave's 'frequency' and is
              measured in Hz, i.e. repetitions per second. The higher the
              frequency of a particular wave the higher the pitch of the note we
              hear when it reaches our ears. The simple synthesizer below shows
              you what these waves look and sound like, and how their frequency
              is related to the musical notes of the piano.
            </h3>
          </div>
        </div>
        <Synth />
      </div>
    );
  }
}

