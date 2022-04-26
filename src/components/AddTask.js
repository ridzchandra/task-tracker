import {useState, useContext} from 'react';
import TasksContext from '../contexts/TasksContext';

const AddTask = () => {
    const [text, setText] = useState("");
    const [day, setDay] = useState("");
    const [reminder, setReminder] = useState(false);

    const {addTask} = useContext(TasksContext);

    const submitTask = (e) => {
        e.preventDefault();
        if(!text) {
            alert("Task fied can't be empty!");
            return;    
        }
        addTask({text, day, reminder});
        setText("");
        setDay("");
        setReminder(false);
    }

    return (
        <form className="add-form" onSubmit={submitTask}>
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder="Enter Task" value={text} onChange={e => setText(e.target.value)}/>
            </div>
            <div className="form-control">
                <label>Day & Time</label>
                <input type="text" placeholder="Enter Day & Time" value={day} onChange={e => setDay(e.target.value)}/>
            </div>
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input type="checkbox" checked={reminder} onChange={e => setReminder(e.currentTarget.checked)}/>
            </div>
            <input type="submit" value="Save Task" className="btn btn-block"/>
            
        </form>
    )
}

export default AddTask
