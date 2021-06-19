import React from 'react'
import {FaCheck} from 'react-icons/fa'

import './Filters.scss'

export default function Filters({filtersSelected, filters, setDataFilters}) {

const onChangeFilters= (event) =>{
    if(filtersSelected.includes(event.target.value)) {
        let auxFilters = [...filtersSelected];
        auxFilters.splice(auxFilters.indexOf(event.target.value),1);
        setDataFilters(auxFilters);
    }
    else setDataFilters([...filtersSelected, event.target.value]);
}
    return (
        <div className="filter-box">
          {
              filters.map( (item, index) =>{
                  

                  return(<div key={index}>
                      <h1 className="filter-box__h1-title">{item.title}</h1>
                        <Checkbox data={item} onChangeFilters={onChangeFilters}/>
                      </div>)
                  
              })
          }
        </div>
    )
}


function Checkbox({data, onChangeFilters }){

   return(<form>
       {data.values.map(item => {
        return (<div className="filter-box__checkbox" key={item}>
            <input className="filter-box__input" type="checkbox" value={item} id={item} onChange={onChangeFilters}/>
            <span className="filter-box__box" id={item} htmlFor={item}><FaCheck color="#fff" size="1rem"/></span>
            <label className="filter-box__label "htmlFor={item}>{item}</label>
        </div>)
     })}
   </form>)
}
