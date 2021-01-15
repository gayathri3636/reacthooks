import React,{useState, useMemo} from 'react'

function Counter() {
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const handleCounterOne = () => {
        setCounterOne(counterOne+1)
    }
    const handleCounterTwo = () => {
        setCounterTwo(counterTwo + 1)
    }
    
    const isEven = useMemo(()=>{
        let i=0
        while(i<200000000) i++
        return counterOne%2 === 0
    },[counterOne])

    return (
        <div>
            <button onClick={handleCounterOne}>CounterOne--{counterOne}</button>
            <span>{isEven ? 'Even': 'odd'}</span>
            <button onClick = {handleCounterTwo}>CounterTwo--{counterTwo}</button>
        </div>
    )
}

export default Counter
