import React from 'react'

function Title() {
    console.log('rendering title')
    return (
        <div>
            <h2>
                UseCallback hook
            </h2>
        </div>
    )
}

export default React.memo(Title)
//React.memo is a higherorder components that prevents components being re rendered if 
//its props or state do not change. so it is an optimization technique
