import { useContext } from "react";
import TasksContext from "../contexts/TasksContext";
import {FaTimes} from "react-icons/fa";


const Task = ({text, day, id, reminder}) => {
    const {deleteTask, toggleReminder} = useContext(TasksContext);
    return (
        <div className={`task ${reminder ? "reminder" : ""}`} onDoubleClick={() => toggleReminder(id)}>
            <h3>
                {text} 
                <FaTimes style={{color:"red", cursor:"pointer"}} onClick={() => deleteTask(id)}/>
            </h3>
            <p>{day}</p>
        </div>
    );
}

export default Task
