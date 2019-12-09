import React, { Component } from "react";
import "./App.css";
import Filter from "./components/Filter.js";
import MovieList from "./components/Movie-list";
import BeautyStars from "beauty-stars";
import { searchStar } from "./store/actions/searchStar";
import { connect } from "react-redux";
import Modalex from "./Modalex";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MovieDesc from "./MovieDesc";

class App extends Component {
	constructor() {
		super();
		this.state = {
			searchstar: 0
			// isLoading: true
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
			<Router>
				<Switch>
					<div className='App'>
						<Route path='/MovieDesc' component={MovieDesc}></Route>
						<Route
							exact
							path='/'
							component={() => (
								<>
									<Filter />
									<BeautyStars
										value={this.state.searchstar}
										onChange={this.handlechange}
										maxStars={10}
										inactiveColor={"black"}
										activeColor={"red"}
										size={20}
									/>
									<Modalex />
									<MovieList />
								</>
							)}></Route>
					</div>
				</Switch>
			</Router>
		);
	}
}

export default connect(null, { searchStar })(App);
