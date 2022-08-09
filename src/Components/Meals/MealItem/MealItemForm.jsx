import { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
	const amountInputRef = useRef();
	const [amountIsValid, setAmountIsValid] = useState(false);
	const [indexMealItem, setIndexMealItem] = useState();

	const submitHandler = (event) => {
		event.preventDefault();

		const enteredAmount = amountInputRef.current.value;
		const enteredAmountNumber = +enteredAmount;

		setIndexMealItem(amountInputRef.current.id);

		if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1) {
			setAmountIsValid(false);

			return;
		}

		setAmountIsValid(true);
		props.onAddToCart(enteredAmountNumber);
	};

	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<Input
				ref={amountInputRef}
				label="Amount"
				input={{
					id: props.id,
					type: "number",
					max: "10",
					min: "1",
					defaultValue: "1",
				}}
			/>
			<button>+ Add</button>
			{indexMealItem === props.id && !amountIsValid && (
				<p style={{ color: "red" }}>Please enter a valid amount!</p>
			)}
		</form>
	);
};

export default MealItemForm;
