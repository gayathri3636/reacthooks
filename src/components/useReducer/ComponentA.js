import React,{useContext} from 'react';
//Create main counter(global state) in App.js and consume that in components A,D,F.
import {countContext} from '../../App';

function ComponentA() {
    const CountContext = useContext(countContext)
    return (
        <div>
            <h1>ComponentA</h1>
            <button onClick={()=>CountContext.countDispatch('increment')}>Increment</button>
            <button onClick={()=>CountContext.countDispatch('decrement')}>Decrement</button>
            <button onClick={()=>CountContext.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default ComponentA
