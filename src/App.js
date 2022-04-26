/** @format */
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import FormContext from "./contexts/FormContext";

function App() {
	const [showAddTask, setShowAddTask] = useState(false);

	return (
		<Router>
			<div className="container">
				<FormContext.Provider value={{ showAddTask, setShowAddTask }}>
					<Header />
				</FormContext.Provider>
				<Switch>
					<Route path="/" exact>
						<FormContext.Provider value={{ showAddTask }}>
							<Home />
						</FormContext.Provider>
					</Route>
					<Route path="/about">
						<About />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
