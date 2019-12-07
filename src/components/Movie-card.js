import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import Star from "./Star";
import { removeMovie } from "../store/actions/removeMovie";
import { editMovie } from "../store/actions/editMovie";
import { connect } from "react-redux";
import BeautyStars from "beauty-stars";

class MovieCard extends Component {
	state = {
		isEditing: false,
		searchstar: 0,
		input: ""
	};

	render() {
		return (
			<div className='movie-card'>
				<Card>
					{this.state.isEditing ? (
						<BeautyStars
							value={this.state.searchstar}
							onChange={e => this.setState({ searchstar: e })}
							maxStars={10}
							inactiveColor={"black"}
							activeColor={"red"}
							size={15}
						/>
					) : (
						<Star rating={this.props.movies.rating}></Star>
					)}

					<CardImg
						style={{ width: "300px", height: "400px" }}
						src={this.props.movies.img}
						alt='Card image cap'
					/>
					<CardBody>
						{this.state.isEditing ? (
							<div>
								<input
									placeholder={this.props.movies.title}
									onChange={e =>
										this.setState({ input: e.target.value })
									}></input>
								<button
									onClick={() =>
										this.props.editMovie(
											this.props.movies.title,
											this.state.input,
											this.state.searchstar
										)
									}>
									Save
								</button>
							</div>
						) : (
							<CardTitle>{this.props.movies.title}</CardTitle>
						)}
						<CardText></CardText>
						<button>Show details</button>
						<button
							onClick={() =>
								this.setState({ isEditing: !this.state.isEditing })
							}>
							Edit
						</button>
						<button
							onClick={() => this.props.removeMovie(this.props.movies.title)}>
							Remove
						</button>
					</CardBody>
				</Card>
			</div>
		);
	}
}
export default connect(null, { removeMovie, editMovie })(MovieCard);
