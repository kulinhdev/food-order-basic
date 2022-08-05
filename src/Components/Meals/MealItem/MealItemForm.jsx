import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
	return (
		<form className={classes.form}>
			<Input
				label="Amount"
				input={{
					id: `amount_${props.id}`,
					type: "number",
					max: "10",
					min: "1",
					defaultValue: "1",
				}}
			/>
			<button>+ Add</button>
		</form>
	);
};

export default MealItemForm;
