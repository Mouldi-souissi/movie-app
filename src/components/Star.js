import React, { Component } from "react";

const stars = "★★★★★★★★★★";

export default class Star extends Component {
	render() {
		return (
			<p>
				<span className='coloredStars'>
					{stars.substr(0, this.props.rating)}
				</span>
				<span className='blankStars'>
					{stars.substr(0, 10 - this.props.rating)}
				</span>
			</p>
		);
	}
}
