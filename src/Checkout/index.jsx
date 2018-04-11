import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductRow from '../ProductRow/index';
import CheckoutFooter from './footer';
import { addItem, removeItem, changeQuantity } from './actions';

class Checkout extends Component {
	handleChange = (id, quantity) => {
		const product = this.props.products.filter(i => i.id === id);
		if (quantity > 0) {
			this.props.change(id, quantity);
		} else {
			this.props.remove(id);
		}
	}

  render() {
		const { products } = this.props;
		let totalPrice = 0;
		let rows = null;
		if (products && products.length > 0) {
			totalPrice = products.reduce((acc, p) => acc + (p.quantity * parseInt(p.price)), 0 ).toFixed(2);
			rows = products.map(product => (
				<ProductRow	
					product={product}
					key={product.id}
					onChange={this.handleChange}
				/>
			));
		}   

    return (
			<div>
				<table>
					<tr>
						<th></th>
						<th>Product</th>
						<th>Quantity</th>
						<th>Total</th>
						<th>Remove</th>
					</tr>
					{rows}
					<tfoot>
						<tr>
							<td colspan="5" className="totalPrice">Total: {totalPrice}</td>
						</tr>
					</tfoot>
				</table>
			</div>
		);
  }
}

const mapStateToProps = state => ({
	products : state.checkOut.products
});

const mapDispatchToProps = dispatch => ({
		add: (item) =>  dispatch(addItem(item)),
		remove: (id) => dispatch(removeItem(id)),
		change: (id, quantity) => dispatch(changeQuantity(id, quantity))
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
