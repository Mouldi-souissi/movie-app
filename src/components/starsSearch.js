import React, { Component } from "react";
const stars = "★★★★★★★★★★";

export default class StarsSearch extends Component {
	render() {
		return (
			<div className='stars'>
				{stars.split("").map((el, i) => (
					<span key={i} id={i + 1} onClick={this.props.handleStarRating}>
						{el}
					</span>
				))}
			</div>
		);
	}
}
