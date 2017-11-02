import React from "react";
import QwertyHancock from "qwerty-hancock";
/**
	this class uses the Qwerty-Hancock keyboard vs implementing an actual
	React based keyboard from scratch.
**/
export default class Keyboard extends React.Component {
	componentDidMount() {
		const keyboard = new QwertyHancock({
			id: "keyboard",
			width: 1100,
			height: 68,
			octaves: 9,
			startNote: "A0"
		});

		keyboard.keyDown = function(note, frequency) {
			this.props.onNoteChange(note);
		};
		keyboard.keyDown = keyboard.keyDown.bind(this);
	}

	render() {
		return (
			<div id="keyboard-row" className="flex-container-row">
				<div className="item label">
					Note: <span id="note-value">{this.props.note}</span>
				</div>
				<div className="item" id="keyboard-container">
					<div id="keyboard" />
				</div>
			</div>
		);
	}
}