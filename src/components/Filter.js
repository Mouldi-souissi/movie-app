import React, { Component } from "react";

export default class Filter extends Component {
	// constructor() {
	// 	super();

	// 	this.state = {
	// 		movie: ""
	// 	};
	// }

	// handleChange = e => {
	// 	this.setState({
	// 		movie: e.target.value
	// 	});
	// };
	// handlesubmit = e => {
	// 	e.preventDefault();
	// };
	render() {
		return (
			<form
				className='searchform group'
				onChange={this.props.handleFilter}
				// onChange={() => this.props.handleFilter(this.state.movie)}
				// onSubmit={this.handlesubmit}
			>
				<label className='search-box'>
					<span className='fa fa-2x fa-search'></span>
				</label>
				<input
					type='search'
					id='search-box'
					placeholder='Search'
					onChange={this.handleChange}></input>
				/>
			</form>
		);
	}
}
