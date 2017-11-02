import React from "react";

export default class Oscilloscope extends React.Component {
	render() {
		return (
			<div id="oscilloscope-container">
				{/* width of canvas is set dynamically */}
				<canvas id="oscilloscope-canvas" height="68" width="500" />
			</div>
		);
	}

	componentDidMount() {
		this.drawOscilloscope(this.props.oscillator, "#oscilloscope-container");
	}

	drawOscilloscope(oscillator, canvasContainerId) {
		const canvasContainer = document.querySelector(canvasContainerId);
		this.canvasContainer = canvasContainer;
		this.canvas = canvasContainer.querySelectorAll("canvas")[0];
		var canvas = this.canvas;
		var canvasCtx = canvas.getContext("2d");
		var height = canvas.height;
		//width calculated dynamically based on container width
		var width = canvasContainer.offsetWidth;
		canvas.setAttribute("width", width);
		//clear canvas
		canvasCtx.clearRect(0, 0, width, height);

		// defining the draw function in here is necessary so as to
		// be able to recursively pass it to requestAnimationFrame.
		// Note: This function is adapted from code in the MDN Web Audio Api docs:
		// https://developer.mozilla.org/en-US/docs/Web/API
		// /Web_Audio_API/Visualizations_with_Web_Audio_API
		var draw = function() {
			var drawVisual = requestAnimationFrame(draw);
			//get audio data to display
			var dataArray = oscillator.getAudioDataBuffer();
			//setup canvas
			canvasCtx.fillStyle = "rgb(200, 200, 200)";
			canvasCtx.fillRect(0, 0, canvas.width, canvas.height);
			canvasCtx.lineWidth = 2;
			canvasCtx.strokeStyle = "rgb(0, 0, 0)";
			canvasCtx.beginPath();
			//plot the data
			var bufferLength = dataArray.length;
			var sliceWidth = canvas.width * 1.0 / bufferLength;
			var x = 0;
			for (var i = 0; i < bufferLength; i++) {
				var v = dataArray[i] / 128.0;
				var y = v * canvas.height / 2;
				if (i === 0) {
					canvasCtx.moveTo(x, y);
				} else {
					canvasCtx.lineTo(x, y);
				}
				x += sliceWidth;
			}
			canvasCtx.lineTo(canvas.width, canvas.height / 2);
			canvasCtx.stroke();
		};

		//plots the waveform
		draw();

		window.addEventListener(
			"resize",
			function(event) {
				this.updateWidth();
			}.bind(this)
		);
	}

	/**
  updates the oscilloscope's width based on the parent container's
  width allowing the oscilloscope to be dynamically resized.
  **/
	updateWidth() {
		this.canvas.setAttribute("width", this.canvasContainer.offsetWidth);
	}
}
