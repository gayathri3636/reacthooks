import React, { useState, useEffect } from 'react'

export default function HookCounter2() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    const handleClick = () => {
        setCount(count+1)
    }
    const handleChanhe = (e) => {
        setName(e.target.value)
    }
    useEffect(()=> {
        console.log("useeffect---updationg title")
        document.title = `clicked ${count} times`
    },[count])
    return (
        <div>
            <input type="text" value={name} onChange={handleChanhe} />
            <button onClick={handleClick}>Click{count}</button>
        </div>
    )
}
