/** @format */
import { useContext } from "react";

import Task from "./Task";
import TasksContext from "../contexts/TasksContext";

const TasksList = () => {
	const { tasks } = useContext(TasksContext);
	return (
		<>
			{tasks.map((task) => (
				<Task
					key={task.id}
					text={task.text}
					day={task.day}
					id={task.id}
					reminder={task.reminder}
				/>
			))}
		</>
	);
};

export default TasksList;
