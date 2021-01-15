import React from 'react'

function Button({handleClick, children}) {
    console.log('rendering button component', children)
    return (
        <button onClick={handleClick}>
            {children}
        </button>
    )
}

export default React.memo(Button)
//React.memo is a higherorder components that prevents components being re rendered if 
//its props or state do not change. so it is an optimization technique