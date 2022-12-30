// const ModalAddTask = ({ addTask, hide, value, setValue, editTask }) => {
//     return (
//       <div className="wrapper">
//         {value.title ? (
//           <input
//             value={value.title}
//             onChange={(e) => setValue({ ...value, title: e.target.value })}
//           />
//         ) : (
//           <input value={value} onChange={(e) => setValue(e.target.value)} />
//         )}
  
//         <button
//           onClick={() => {
//             if (!value) {
//               alert("Пустая строка");
//               return;
//             }
//             hide();
//             if (value.title) {
//               editTask(value);
//             } else {
//               addTask({ id: Date.now(), title: value, completed: false });
//             }
//           }}
//         >
//           {value.title ? "Обновить" : "Добавить"}
//         </button>
//       </div>
//     );
//   };
  
//   export default ModalAddTask;