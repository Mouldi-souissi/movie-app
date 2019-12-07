import React, { Component } from "react";
import "./App.css";
import Filter from "./components/Filter.js";
import MovieList from "./components/Movie-list";
import BeautyStars from "beauty-stars";
import { searchStar } from "./store/actions/searchStar";
import { connect } from "react-redux";
import Modalex from "./Modalex";
class App extends Component {
	constructor() {
		super();
		this.state = {
			searchstar: 0,
			starRating: 0,
			isLoading: true
		};
	}

	// componentDidMount() {
	// 	setTimeout(() => {
	// 		this.setState({
	// 			isLoading: false
	// 		});
	// 	}, 1000);
	// }
	handlechange = e => {
		this.setState({ searchstar: e });
		this.props.searchStar(e);
	};
	render() {
		return (
			<div className='App'>
				<Filter handleFilter={this.handleFilter}></Filter>
				<BeautyStars
					value={this.state.searchstar}
					// onChange={value => this.setState({ searchstar: value })}
					onChange={this.handlechange}
					maxStars={10}
					inactiveColor={"black"}
					activeColor={"red"}
					size={20}
				/>

				<Modalex></Modalex>

				<MovieList />
			</div>
		);
	}
}

export default connect(null, { searchStar })(App);
