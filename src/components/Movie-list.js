import React, { Component } from "react";
import MovieCard from "./Movie-card";
import Modalex from "../Modalex";
export class MovieList extends Component {
	render() {
		return (
			<div className='movie-list'>
				{this.props.filtered.length !== 0
					? this.props.filtered.map((el, key) => (
							<MovieCard
								key={key}
								img={el.img}
								title={el.title}
								rating={el.rating}
							/>
					  ))
					: this.props.movies.map((el, key) => (
							<MovieCard
								key={key}
								img={el.img}
								title={el.title}
								rating={el.rating}
							/>
					  ))}
				<div>
					<Modalex
						handlei={this.props.handlei}
						handleAdd={this.props.handleAdd}
						handlei2={this.props.handlei2}></Modalex>
				</div>
			</div>
		);
	}
}

export default MovieList;
