import React, { Component } from 'react';

import Spinner from './Spinner';

export default class ProductRow extends Component {  
	constructor(props) {
		super(props);
		this.state = {
			quantity: props.product.quantity
		};
	}

	handleUserChange = (quantity) => {
		this.setState({ quantity: quantity });
		this.props.onChange(this.props.product.id, quantity);
	}

	render() {
		const { product } = this.props; 
		if (this.state.quantity == 0 ) {
			return false;
		} else {
			var totalPrice = (product.price * this.state.quantity).toFixed(2);
			return (
				<tr>
					<td>
						<img src={product.image}/>
					</td>
					<td>
						<h3 className="title4">
							{product.name}
						</h3>
						<strong>{product.price} €</strong>
					</td>
					<td>
						<Spinner quantity={this.state.quantity} onUserChange={this.handleUserChange}/>
					</td>
					<td>
						<strong> {totalPrice} €</strong>
					</td>
					<td>
						<button onClick={() => this.handleUserChange(0) }>-</button>
						</td>
				</tr>
			)
		}
	}
}	
