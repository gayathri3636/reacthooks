// import React, {useState} from 'react';

// export default function AddList() {
//     const [item, setItem]= useState("")
//     const [addTasks, setAddTasks] = useState([])
//     const handleChange=(e)=>{
//         setItem(e.target.value)
//     }
//     const handleSubmit = (e) => {
//         // let p= addTasks;
//        // p.push(item)
//         //setAddTasks([...p]);
//         setAddTasks([...addTasks, item])
//     }
//     return (
//         <div>
//             <input type="text" name="addTasks" onChange={handleChange} placeholder="Add task" />
//             <button onClick = {handleSubmit} type="primary">Add task</button>
//             <button  >Clear Task</button>
//             <p>{addTasks.map(item => <li key={item.id}>{item}</li>)}</p>
//         </div>
//     )
// }


import React from 'react';
 
const initialList = [
  'Learn React',
  'Learn Firebase',
  'Learn GraphQL',
];
 
const ListWithAddItem = () => {
  const [value, setValue] = React.useState('');
  const [list, setList] = React.useState(initialList);
 
  const handleChange = event => {
    setValue(event.target.value);
  };
 
  const handleSubmit = event => {
    if (value) {
      setList(list.concat(value));
    }
 
    setValue('');
 
    event.preventDefault();
  };
 
  return (
    <div>
      <ul>
        {list.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
 
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChange} />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};
 
export default ListWithAddItem;
