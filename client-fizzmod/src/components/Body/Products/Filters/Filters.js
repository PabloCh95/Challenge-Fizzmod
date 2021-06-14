import React,{ useEffect, useState } from 'react'

import './Filters.scss'

export default function Filters({filters, setDataFilters}) {
//tengo que rehacer esto porque aumenta su complejidad y puede hacerlo lento
const onChangeFilters= (event) =>{
    event.preventDefault()
    setDataFilters(event.target.value);
}
    return (
        <div>
          {
              filters.map( item =>{
                  

                  return(<div>
                      <h1>{item.title}</h1>
                        <Checkbox data={item} onChangeFilters={onChangeFilters}/>
                      </div>)
                  
              })
          }
        </div>
    )
}


function Checkbox({data, onChangeFilters }){

   return( data.values.map(item => {
        return (<div>
            <input type="checkbox" value={item} name={item} onChange={onChangeFilters}/>
            <label>{item}</label>
        </div>)
     }))
}
