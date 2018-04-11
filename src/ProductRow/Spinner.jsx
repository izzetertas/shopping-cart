import React, { Component } from 'react';

const Spinner = ({ quantity, onUserChange }) => {
	
	function handleIncrease(quantity) {
		onUserChange( quantity + 1 );
	}

	function handleDecrease(quantity) {
		if (quantity > 1) {
			onUserChange( quantity - 1 );
		}		
	}

	return (
		<span>
			<button onClick={() => handleDecrease(quantity)}>
				-
			</button>
			<input
				value={quantity}
				onChange={ e => onUserChange( e.target.value ) }
			/>
			<button
				onClick={() => handleIncrease(quantity)}>
				+
			</button>
		</span>
	)
};

export default Spinner;