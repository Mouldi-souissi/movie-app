import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import Star from "./Star";
export default class MovieCard extends Component {
	render() {
		return (
			<div className='movie-card'>
				<Card>
					<Star rating={this.props.rating}></Star>
					<CardImg top width='100%' src={this.props.img} alt='Card image cap' />
					<CardBody>
						<CardTitle>{this.props.title}</CardTitle>
						<CardText></CardText>
					</CardBody>
				</Card>
			</div>
		);
	}
}
