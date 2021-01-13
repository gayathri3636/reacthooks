import React,{useState} from 'react'

export default function RenderList() {
    const [items, setItems] = useState([
        { itemName: 'item 1', quantity: 1, isSelected: false },
        { itemName: 'item 2', quantity: 3, isSelected: true },
        { itemName: 'item 3', quantity: 2, isSelected: false },
    ]);
    return (
        <div>
            {items.map((item)=>{
                <ul>
                <li>{item.itemName}</li>
                <li>{item.quantity}</li>
            </ul>
            })}
        </div>
    )
}
