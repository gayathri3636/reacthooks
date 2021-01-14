import React, { useEffect, useState } from 'react'

export default function HookMouse() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logPosition = (e) => {
        console.log('Mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(()=>{
        console.log('useeffect called')
        window.addEventListener('mousemove', logPosition)
    },[])
    return (
        <div>
           Hooks X-{x} Y- {y} 
        </div>
    )
}
