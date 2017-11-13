import React from "react";

export default class Play extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			on: false
		};
	}

	render() {
		if (this.state.on) {
			return (
				<div
					className="button playButton"
					onClick={() => {
						this.props.onClickOff();
						this.setState({ on: false });
					}}
				>
					<i className="icon-pause icon" id="play-main" />
				</div>
			);
		} else {
			return (
				<div className="flex-container-column">
					<div
						className="button playButton"
						onClick={() => {
							this.props.onClickOn();
							this.setState({ on: true });
						}}
					>
						<i className="icon-play icon" id="play-main" />
					</div>
				</div>
			);
		}
	}
}
