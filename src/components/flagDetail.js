import React, {useState, useEffect} from 'react'
import {Card} from 'react-bootstrap';

export default function FlagDetail(props) {
    const [items, setItems] = useState(props.location.state)
    console.log(items)
    return (
        <div>
            <Card>
                 <Card.Header>
                     <h2 style={{textAlign:'center'}}>{items.country.name}</h2>
                 </Card.Header>
                 <Card.Body>
                     <div style={{textAlign:'center'}}>
                         {<img style={{width:'200px', height:'200px'}} src={items.svgFile} />}
                         <h3>Country Details</h3>
                         <p><b>Area code: </b>{items.country.area}</p>
                         <p><b>capital:</b> {items.country.capital}</p>
                         <p><b>Longitude:</b>{items.country.location.longitude}</p>
                         <p><b>Latitude:</b>{items.country.location.latitude}</p>
                         <p><b>Population:</b>{items.country.population}</p>
                     </div>
                 </Card.Body>
            </Card>
        </div>
    )
}

