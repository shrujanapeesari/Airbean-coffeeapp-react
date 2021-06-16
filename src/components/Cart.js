import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import bag from '../assets/bag.png';

function Cart() {
	const cart = useSelector((state) => {
		return state.cart;
	});

	console.log(cart);

	// let items = cart.content.length;

	// useEffect(() => {
	// 	items = cart.items.length;
	// }, [cart]);

	return (
		<div id="cart">
			<div id="cart-container">
				<img src={bag} alt="cart" />
			</div>
			<div id="cart-items">
				<p>{cart.content.length}</p>
			</div>
		</div>
	);
}

export default Cart;