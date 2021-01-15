import React from 'react'

function Count({text, count}) {
    console.log('rendering count')
    return (
        <div>
           {text} - {count} 
        </div>
    )
}

export default React.memo(Count)
//React.memo is a higherorder components that prevents components being re rendered if 
//its props or state do not change. so it is an optimization technique
