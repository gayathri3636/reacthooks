import React, { useState, useEffect } from 'react'

export default function FunctionalCounter() {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count+1)
    }
    useEffect(()=> {
        document.title = `clicked ${count} times`
    })
    return (
        <div>
            <button onClick={handleClick}>Click{count}</button>
        </div>
    )
}
