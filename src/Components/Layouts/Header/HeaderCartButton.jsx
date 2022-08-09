import { useContext, useEffect, useState } from "react";
import CartContext from "../../../store/cart-context.js";
import CartIcon from "../../Cart/CartIcon.js";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
	const cartCtx = useContext(CartContext);
	const [btnIsHightLighted, setBtnIsHightLighted] = useState(false);
	const { items } = cartCtx;

	const numberOfCartItems = items.reduce((curNumber, item) => {
		return curNumber + item.amount;
	}, 0);

	const buttonEffect = `${classes.button} ${
		btnIsHightLighted ? classes.bump : ""
	}`;

	useEffect(() => {
		if (items.length === 0) {
			return;
		}
		setBtnIsHightLighted(true);

		// Reset the current class to reuseable effect
		const timer = setTimeout(() => {
			setBtnIsHightLighted(false);
		}, 300);

		return () => {
			clearTimeout(timer);
		}
	}, [items]);

	return (
		<button className={buttonEffect} onClick={props.onClick}>
			<span className={classes.icon}>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className={classes.badge}>{numberOfCartItems}</span>
		</button>
	);
};

export default HeaderCartButton;
