/** @format */
import PropTypes from "prop-types";
import { useContext } from "react";
import FormContext from "../contexts/FormContext";

const Button = ({ text, color }) => {
	const { showAddTask, setShowAddTask } = useContext(FormContext);
	const showForm = () => setShowAddTask(!showAddTask);
	return (
		<button
			className="btn"
			style={{ backgroundColor: color }}
			onClick={showForm}
		>
			{text}
		</button>
	);
};

Button.defaultProps = {
	color: "green",
};

Button.propTypes = {
	color: PropTypes.string,
	text: PropTypes.string,
	onClick: PropTypes.func,
};

export default Button;
