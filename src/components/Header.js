/** @format */
import PropTypes from "prop-types";
import Button from "./Button";
import { useContext } from "react";
import { useLocation } from "react-router-dom";

import FormContext from "../contexts/FormContext";

const Header = ({ title }) => {
	const currentRoute = useLocation();
	const { showAddTask } = useContext(FormContext);
	return (
		<header>
			<h1>{title}</h1>
			{currentRoute.pathname === "/" && (
				<Button
					color={!showAddTask ? "green" : "red"}
					text={!showAddTask ? "ADD" : "CLOSE"}
				/>
			)}
		</header>
	);
};

Header.defaultProps = {
	title: "Task Tracker",
};

Header.propTypes = {
	title: PropTypes.string.isRequired,
};

// CSS in JS
// const headingStyle = {
//     color: "red",
//     backgroundColor: "black",
// }

export default Header;
