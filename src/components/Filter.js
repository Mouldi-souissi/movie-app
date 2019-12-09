import React, { Component } from "react";
import { search } from "../store/actions/search";
import { connect } from "react-redux";

class Filter extends Component {
	handleChange = e => {
		this.props.movies.length === 0
			? alert("No movies left")
			: this.props.search(e.target.value);
	};
	handlesubmit = e => {
		e.preventDefault();
	};
	render() {
		return (
			<form className='searchform group' onSubmit={this.handlesubmit}>
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
const mapStateToProps = state => ({
	movies: state.movies
});
export default connect(mapStateToProps, { search })(Filter);
