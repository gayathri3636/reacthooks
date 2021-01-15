import './App.css';
import React from 'react';
import DataFetchingOne from './components/useReducer/DataFetchingOne';
// import ComponentA from './components/useReducer/ComponentA';
// import ComponentB from './components/useReducer/ComponentB';
// import ComponentC from './components/useReducer/ComponentC';

// export const countContext = React.createContext()
// const initialState = 0;
// const reducer = (state, action) => {
//   switch(action){
//       case 'increment':
//           return state+1;
//       case 'decrement':
//           return state-1;
//       case 'reset':
//           return initialState
//       default:
//           return state;
//   }
// }

// function App() {
//   const [count, dispatch] = useReducer(reducer, initialState)
//   return (
//     <countContext.Provider value={{countState:count, countDispatch:dispatch}}>
//       <div className="App">
//         <h1>count in App.js- {count}</h1>
//         <ComponentA />
//         <ComponentB />
//         <ComponentC />
//       </div>
//     </countContext.Provider>
//   );
// }

// export default App;

function App(){
  return(
    <div>
      <DataFetchingOne />
    </div>
  )
}
export default App;