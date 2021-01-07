import React, {useState} from 'react';

export default function AddList() {
    const [item, setItem]= useState("")
    const [addTasks, setAddTasks] = useState([])
    const handleChange=(e)=>{
        setItem(e.target.value)
    }
    const handleSubmit = (e) => {
        // let p= addTasks;
       // p.push(item)
        //setAddTasks([...p]);
        setAddTasks([...addTasks, item])
    }
    return (
        <div>
            <input type="text" name="addTasks" onChange={handleChange} placeholder="Add task" />
            <button onClick = {handleSubmit} type="primary">Add task</button>
            <button  >Clear Task</button>
            <p>{addTasks.map(item => <li key={item.id}>{item}</li>)}</p>
        </div>
    )
}
