import React, { useEffect, useState } from 'react';
import {Card} from 'react-bootstrap';
import Home from './Home';
import FlagDetail from './flagDetail'; 

export default function Flagslist(props) {
    const [value, setvalue] = useState([]);
    const [searchTerm, setSearchTerm] = useState("")

    const formbody = {
        // query:`query {
        //     Flag{
        //     _id    
        //     svgFile
        //     country{
        //       name
        //     }
        //   }
        // }`
        query:`
        query {
            Flag{
            _id
            svgFile
            country{
              area
              capital
              location{
                longitude
                latitude
              }
              name
              population
              timezones{
                _id
              }
              borders{
                subregion{
                  name
                }
              }
            }
          }
        }
        `
    }

    useEffect(()=>{
        handleFetch()
    },[])

   const handleDetail = (item) => {
        props.history.push({
            pathname: "flaglist/"+ item._id,
            state:item
        })
    }
    
    const handleFetch = () => {
        fetch('https://countries-274616.ew.r.appspot.com/', {
            method:"POST",
            body:JSON.stringify(formbody),
            headers:{'content-Type': 'application/json'},
        })
        .then((resdata)=>resdata.json())
        .then((da)=>{
            
            setvalue(da.data.Flag)
        })
        .catch((err)=>console.log(err));
    }
    return (
        <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap', width:'100%', justifyContent: "space-around"}}>
            {value && value.length!== 'undefined'?
            value.map((item)=>(
        <div onClick={()=> handleDetail(item)} >
            <Card key={item._id} border="primary" style={{margin: "10px", width:'20rem'}} >
                <Card.Header>
                    <h3 style={{textAlign:'center'}}>{item.country.name}</h3>
                </Card.Header>
                <Card.Body>
                    <img style={{width:'16rem', maxWidth:'16rem', height:'13.6rem', maxHeight:'13.6rem'}} src={item.svgFile} />
                </Card.Body>
            </Card>
        </div>
        ))    
        :null}
        </div>
    )
}
