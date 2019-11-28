import React, { Component } from "react";
const stars = "★★★★★★★★★★";

export default class StarsSearch extends Component {
	// constructor(props) {
	// 	super(props);

	// 	this.state = {
	// 		rating: 0
	// 	};
	// }

	// handlestars = e => {
	// 	// e.target.parentNode.style.color = "black";
	// 	e.target.style.color === "red"
	// 		? (e.target.style.color = "black")
	// 		: (e.target.style.color = "red");
	// 	// for (let i = Number(e.target.id) + 1; i === 1; i--) {
	// 	// 	e.target.previousSibling.style.color = "red";
	// 	// 	// e.target = e.target.previousSibling;
	// 	// }

	// 	// e.target.parentNode.style.color = "black";
	// 	// e.target.previousSibling.style.color = "red";

	// 	this.setState({
	// 		rating: Number(e.target.id) + 1
	// 	});
	// };
	// handleblur = e => {
	// 	e.target.style.color = "black";
	// };
	render() {
		return (
			<div className='stars' onClick={this.props.handleStarRating}>
				{stars.split("").map((el, i) => (
					<span key={i} id={i}>
						{el}
					</span>
				))}
			</div>
		);
	}
}
