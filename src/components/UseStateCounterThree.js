import React, { useState } from 'react'

export default function UseStateCounterThree() {
    const [name, setName] = useState({
        firstname:'',
        lastname:''
    })
    return (
        <div>
            <input type="text" placeholder="firstname" value={name.firstname} onChange={e => setName({...name, firstname:e.target.value})} />
            <input type="text" placeholder="lastname" value={name.lastname} onChange={e => setName({...name, lastname:e.target.value})} />
            <h2>your firstname is {name.firstname}</h2>
            <h2>your lastname is {name.lastname}</h2>
        </div>
    )
}
