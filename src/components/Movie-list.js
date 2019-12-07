import React, { Component } from "react";
import MovieCard from "./Movie-card";

// import HOCLoader from "./HOCLoader";
import { connect } from "react-redux";

export class MovieList extends Component {
	render() {
		let filtered = this.props.movies.filter(
			el =>
				el.title
					.trim()
					.toLocaleLowerCase()
					.includes(this.props.x.trim().toLocaleLowerCase()) &&
				el.rating >= this.props.star
		);
		return (
			<div className='movie-list'>
				{filtered.map((el, key) => (
					<MovieCard key={key} movies={el} />
				))}
			</div>
		);
	}
}
const mapStateToProps = state => ({
	movies: state.movies,
	x: state.x,
	star: state.star
});
export default connect(mapStateToProps)(MovieList);
