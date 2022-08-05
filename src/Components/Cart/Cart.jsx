import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
	const cartItems = [
		{ id: "c1", name: "Sushi", amount: 2, price: 12.99 },
		{ id: "c2", name: "Ochima", amount: 3, price: 14.23 },
	];

	const cartItemsUI = (
		<ul className={classes["cart-items"]}>
			{cartItems.map((item) => (
				<li>{item.name}</li>
			))}
		</ul>
	);

	return (
		<Modal onClose={props.onClose}>
			{cartItemsUI}
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>35.62</span>
			</div>
			<div className={classes.actions}>
				<button
					className={classes["button--alt"]}
					onClick={props.onClose}
				>
					Close
				</button>
				<button className={classes.button}>Order</button>
			</div>
		</Modal>
	);
};

export default Cart;
