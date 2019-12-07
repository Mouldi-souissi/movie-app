/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { addMovie } from "./store/actions/addMovie";
import { connect } from "react-redux";
const Modalex = props => {
	const { buttonLabel, className } = props;

	const [modal, setModal] = useState(false);
	// mein state
	const [title, setTitle] = useState("");
	const [img, setimg] = useState("");
	const [rating, setrating] = useState("");

	const toggle = () => setModal(!modal);

	const handleAdd = () => {
		props.addMovie({ title, img, rating });
	};
	return (
		<div>
			<Button color='danger' onClick={toggle} className='addbtn'>
				{buttonLabel}+
			</Button>
			<Modal isOpen={modal} toggle={toggle} className={className}>
				<ModalHeader toggle={toggle}>add movie</ModalHeader>
				<ModalBody>
					<input
						type='text'
						placeholder='title'
						onChange={e => {
							setTitle(e.target.value);
						}}></input>
					<input
						type='text'
						placeholder='image url'
						onChange={e => {
							setimg(e.target.value);
						}}></input>
					<input
						type='text'
						placeholder='rating'
						onChange={e => {
							setrating(e.target.value);
						}}></input>
				</ModalBody>
				<ModalFooter>
					<Button color='primary' onClick={handleAdd}>
						Add movie
					</Button>{" "}
					<Button color='secondary' onClick={toggle}>
						Cancel
					</Button>
				</ModalFooter>
			</Modal>
		</div>
	);
};

export default connect(null, { addMovie })(Modalex);
