import React, { Component } from 'react';
import PropTypes from 'prop-types';

const CheckoutFooter = ({ total }) => (
	<div className="totalPrice">
		<span>Total : {total}</span>
		<span>€</span>
	</div>
);

CheckoutFooter.propTypes = {
	total : PropTypes.number.isRequired
}
export default CheckoutFooter;
