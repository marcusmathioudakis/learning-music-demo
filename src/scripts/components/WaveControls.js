import React from "react";
import 'WaveControls.css';

export default class WaveControls extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			type: "sine"
		};
	}

	render() {
		const types = ["sine", "sawtooth", "square", "triangle"];
		const waveButtons = types.map(type => (
			<div
				key={type}
				className={
					"button wave " + (type === this.state.type ? "active" : "")
				}
				id={type + "Button"}
				type={type}
				onClick={() => {
					this.props.setWaveType(type);
					this.setState({ type: type });
				}}
			>
				<i className="icon" id={type + "-icon"} />
			</div>
		));

		return <div className="WaveControls flex-container-row">{waveButtons}</div>;
	}
}
