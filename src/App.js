import {React,useState} from 'react';
import './App.css';


 function App() {
  const itemList = [
    "Мандарины",
    "Апельсины",
    "Бананы",
    "Клубника",
    "Дыня",
    "Арбуз",
    "Малина",
    "Ананас"
  ];

  const [filteredList, setFilteredList] = new useState(itemList);

  const filterBySearch = (event) => {
  
    const query = event.target.value;
    
    let updatedList = [...itemList];
    
    updatedList = updatedList.filter((item) => {
      return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    
    setFilteredList(updatedList);
  };

  return (
    <div className="App">
      <div className="search-header">
        <div className="search-text">Поиск фруктов:</div>
        <input id="search-box" onChange={filterBySearch} />
      </div>
      <div id="item-list">
        <ol>
          {filteredList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default App



                                  // Сортировка



// import {React,useState} from 'react';
// import './App.css';

// function App (){
// const data = ["1", "2", "3", "4","5","6","7","8","9",];
//   const [sortState, setSortState] = useState("none");
//   const sortMethods = {
//     none: { method: (a, b) => null },
//     ascending: { method: undefined },
//     descending: { method: (a, b) => (a > b ? -1 : 1) },
//   };
//   return (
//     <div className="main">
//       <select defaultValue={'DEFAULT'} onChange={(e) => setSortState(e.target.value)}>
        
//         <option value="ascending">По возростанию</option>
//         <option value="descending">По убыванию</option>
//       </select>
//       <ul>
//         {data.sort(sortMethods[sortState].method).map((el, i) => (
//           <li key={i}>{el}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }
    
//   export default App;



// --------------------------------------------------------------------------
// import ReactDOM from 'react-dom';
// import App from './App';
// import { useState } from 'react';
// import searchBar from './components/searchBar';

// const App = () => {
//   const [list, setList] = React.useState(['task 1', 'task 2', 'task 3']);
//   const [id, setId] = React.useState(0);

//   const handleAddClick = () => {
//     setId(id => id + 1);
//     setList(list => [...list, 'New task - ' + id]);
//   };

//   const handleClear = () => {
//     setId(0);
//     setList([]);
//   };

//   return (
//     <div>
//       <div style={{ display: 'flex'}}>
//         <button onClick={handleAddClick}>Add </button>
//         <button onClick={handleClear}>Clear </button>
//       </div>
//       <div>
//         {list.map((item) => {
//           const handleRemoveClick = () => {
//             setList(list => list.filter((entry) => entry !== item));
//           };
//           return (
//             <div key={item} style={{ display: 'flex', alignItems:'center', border: '5px solid lightgray' }}>
//               {item}
//               <div style={{ flex: 1, }} />
//               <button onClick={handleRemoveClick}>x</button>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// const root = document.querySelector('#root');
// ReactDOM.render(<App />, root);
// export default App;

// ---------------------------------------------------------
// function App() {

//   const [count,setCount] = useState(0)
//   const [quantity, setQuantity] = useState(0);

//   const handleOneChange = (e) =>{
//     setQuantity(e.target.value)
//   }

//   const handleSubtractQuantity = () => {
//     if (quantity) setCount(count - parseInt(quantity, 10));
//   };

//   const handleAddQuantity = () => {
//     if (quantity) setCount(count + parseInt(quantity, 10));
//   };

//   const handleResetCounter = () => {
//     setCount(0);
//     setQuantity(0);
//   };

//   return (
//     <div
//       id={"content-wrapper"}
//       className={"flex column vertical-align horizontal-align"}
//     >
      
//       <div
//         id={"counter-wrapper"}
//         className={"flex column vertical-align justify-sp-ev"}
//       >
//         <div className={"flex column vertical-align"}>
//           <p>{count}</p>
//           <div className={"flex row justify-sp-ar mt-10"}>
            
//           </div>
//         </div>
//         <div>
      
//           <div className={"flex row vertical-align horizontal-align"}>
//             <input
//               type="text"
//               value={quantity}
//               onChange={handleOneChange}
//               className={"mr-10"}
//             />

//             <button
//               className={"mr-5 width-40"}
//               onClick={handleSubtractQuantity}
//             >
//               -
//             </button>
//             <button className={"width-40"} onClick={handleAddQuantity}>
//               +
//             </button>
//           </div>
//         </div>
//         <button id={"counter-reset"} onClick={handleResetCounter}>
//           Reset Counter
//         </button>
//       </div>
//     </div>
//   );
  
// }