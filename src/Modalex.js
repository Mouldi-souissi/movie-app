/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const Modalex = props => {
	const { buttonLabel, className } = props;

	const [modal, setModal] = useState(false);

	const toggle = () => setModal(!modal);

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
						onChange={props.handlei1}></input>
					<input
						type='text'
						placeholder='image url'
						onChange={props.handlei2}></input>
					<input
						type='text'
						placeholder='rating'
						onChange={props.handlei3}></input>
				</ModalBody>
				<ModalFooter>
					<Button color='primary' onClick={props.handleAdd}>
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

export default Modalex;
