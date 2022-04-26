/** @format */
import { useContext, useState, useEffect } from "react";
import Footer from "./Footer";

import TasksList from "./TasksList";
import AddTask from "./AddTask";
import TasksContext from "../contexts/TasksContext";
import FormContext from "../contexts/FormContext";
import * as http from "../HTTP/easyHTTP";

const Home = () => {
	const { showAddTask } = useContext(FormContext);

	const [tasks, setTasks] = useState([]);

	const fetchTasks = () => {
		http.get("http://localhost:5000/tasks")
			.then((data) => setTasks(data))
			.catch((error) => console.log(error.message));
	};
	// no dependency argument - first render and any state change
	// [] - only first render
	// [certainState/s] - first render and only certain state/s change
	useEffect(() => {
		fetchTasks();
	}, []);

	const deleteTask = (id) => {
		http.del(`http://localhost:5000/tasks/${id}`);
		setTasks(tasks.filter((task) => id !== task.id));
	};

	const addTask = (task) => {
		http.post("http://localhost:5000/tasks", task);
		setTasks([...tasks, { ...task, id: tasks.length + 1 }]);
	};
	const toggleReminder = (id) => {
		let toggledTask;
		setTasks(
			tasks.map((task) => {
				if (task.id !== id) {
					return task;
				} else {
					toggledTask = { ...task, reminder: !task.reminder };
					return toggledTask;
				}
			})
		);
		http.put(`http://localhost:5000/tasks/${id}`, toggledTask);
	};

	return (
		<>
			<TasksContext.Provider
				value={{
					tasks,
					setTasks,
					deleteTask,
					toggleReminder,
					addTask,
				}}
			>
				{/* && is the ternary expression for an only if without else */}
				{showAddTask && <AddTask />}
				{tasks.length > 0 ? <TasksList /> : "No tasks to show!"}
			</TasksContext.Provider>
			<Footer />
		</>
	);
};

export default Home;
