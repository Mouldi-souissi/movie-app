import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export class MovieDesc extends Component {
	render() {
		return (
			<div className='desccard'>
				<div>
					<img
						src={
							this.props.movies.filter(
								el => el.title === this.props.titleDesc
							)[0].img
						}
						alt='img'></img>
					<div style={{ color: "white" }}>
						{
							this.props.movies.filter(
								el => el.title === this.props.titleDesc
							)[0].desc
						}
					</div>
				</div>

				<Link to='/'>Go home</Link>
			</div>
		);
	}
}
const mapStateToProps = state => ({
	movies: state.movies,
	titleDesc: state.titleDesc
});
export default connect(mapStateToProps)(MovieDesc);
