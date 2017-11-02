import React from "react";
import 'FrequencyControls.css'

export default function FrequencyControls(props) {
	return (
		<div id="controls-frequency" className="flex-container-row controls FrequencyControls">
			<div className="item label">
				Frequency: <span id="frequency-value">
					{" "}
					{props.frequency}{" "}
				</span>{" "}
				Hz
			</div>
			<div className="item item-grow ">
				<input
					type="range"
					min="28"
					max="12544"
					value={props.frequency}
					className="slider"
					id="frequency-slider"
					onChange={event => {
						props.onFrequencyChange(event.target.value);
					}}
				/>
			</div>
		</div>
	);
}