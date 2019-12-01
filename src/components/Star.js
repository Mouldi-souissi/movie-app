import React, { Component } from "react";
// import { thisExpression } from "@babel/types";

const stars = "★★★★★★★★★★";

export default class Star extends Component {
	render() {
		return (
			<div>
				<span className='coloredStars'>
					{stars.substr(0, this.props.rating)}
				</span>
				<span className='blankStars'>
					{stars.substr(0, 10 - this.props.rating)}
				</span>
			</div>
		);
	}
}
