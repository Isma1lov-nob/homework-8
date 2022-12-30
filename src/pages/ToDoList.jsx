// import React, { useState } from "react";
// import ModalAddTask from "../components/UI/ModalAddTask";

// const tasks = [
//   { id: 1, title: "Сходить в магазин", completed: true },
//   { id: 2, title: "Убраться дома", completed: false },
// ];

// const ToDoList = () => {
//   const [state, setState] = useState(tasks);
//   const [show, setShow] = useState(false);
//   const [value, setValue] = useState('');

//   const handleDone = (id) => {
//     const newState = state.map((item) => {
//       if (item.id === id) {
//         return { ...item, completed: !item.completed };
//       } else {
//         return item;
//       }
//     });
//     setState(newState);
//   };

//   const addTask = (item) => {
//     const newState = [...state, item];
//     setState(newState);
//   };

//   const editTask = (task) => {
//     const newState = state.map((item) => {
//       if (item.id === task.id) {
//         return { ...item, title: task.title};
//       } else {
//         return item;
//       }
//     });
//     setState(newState)
//   }

//   const handleOpen = (task) => {
//     setValue(task)
//     setShow(true)
//   }


//   return (
//     <div className="flex">
//       <button onClick={() => setShow(true)}>Add new task</button>
//       {show && <ModalAddTask editTask={editTask} addTask={addTask} hide={() => setShow(false)} value={value} setValue={setValue} />}
//       {state.map((task) => (
//         <div key={task.id} className="task-item">
//           <h3 onClick={() => handleOpen(task)}>{task.title}</h3>
//           <button
//             onClick={() => handleDone(task.id)}
//             style={task.completed ? { background: "green" } : { background: "red" }}
//           >
//             done
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ToDoList;