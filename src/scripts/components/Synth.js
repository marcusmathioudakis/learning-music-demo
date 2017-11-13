import React from "react";
import Teoria from "teoria";
import Oscillator from "oscillator.js";
import Play from "components/Play"
import WaveControls from "components/WaveControls"
import OscilloscopeComponent from "components/Oscilloscope"
import Keyboard from "components/Keyboard"
import FrequencyControls from "components/FrequencyControls"



export default class Synth extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			frequency: 440,
			note: "A0"
		};

		this.handleFrequencyChange = this.handleFrequencyChange.bind(this);
		this.handleNoteChange = this.handleNoteChange.bind(this);

		const context = new AudioContext();
		this.oscillator = new Oscillator(context);
	}

	handleFrequencyChange(frequency) {
		var note = Teoria.note
			.fromFrequency(frequency)
			.note.toString()
			.toUpperCase();
		// write flats as sharps to be consistent with how Qwerty-Hancock Keyboard
		// displays notes
		note = note.replace("DB", "C#");
		note = note.replace("EB", "D#");

		this.oscillator.setFrequency(frequency);
		this.setState({
			frequency: frequency,
			note: note
		});
	}

	handleNoteChange(note) {
		try {
			const noteObject = Teoria.note(note);
			const frequency = Math.round(noteObject.fq());

			this.oscillator.setFrequency(frequency);
			this.setState({
				frequency: frequency,
				note: note
			});
		} catch(err) {
			
		}
	}

	render() {
		return (
			<div className="Synth">
				<div id="controls-global" className="flex-container-row">
					<Play
						onClickOn={() => {
							this.oscillator.play();
						}}
						onClickOff={() => {
							this.oscillator.stop();
						}}
					/>
					<WaveControls
						setWaveType={type => {
							this.oscillator.setType(type);
						}}
					/>
				</div>
				<FrequencyControls
					frequency={this.state.frequency}
					onFrequencyChange={frequency => {
						this.handleFrequencyChange(frequency);
					}}
				/>
				<OscilloscopeComponent oscillator={this.oscillator} />
				<Keyboard
					note={this.state.note}
					onNoteChange={note => {
						this.handleNoteChange(note);
					}}
				/>
			</div>
		);
	}
}

