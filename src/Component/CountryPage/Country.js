import React, { useState } from 'react';
import { Paper } from '@material-ui/core';
import './Country.css'
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import { ContextData } from '../ContextProvider/ContextProvider';

const Country = () => {
   const contexts = ContextData()
   const countries = contexts.countries

   const [countryTagName, setCountryTagName] = useState([])
   const tagValue = (country) => {
      setCountryTagName([...countryTagName, country])
      contexts.addTagOnDataBase(country)
   }

   return (
      <Paper id='countryDiv' className='col-md-4' elevation={3}>
         <CloseIcon 
            className='closeIcon' 
            onClick={() => contexts.setCountryComponent(false)} 
         />
         <input 
            className='searchBox'
            placeholder="Country Name"
            onChange={(e) => contexts.setCountryName(e.target.value)}
            name="country"
         />
         <div className='countrySection'>
         {
            countries && countries.map(country => {
               return (
                  <ul className='list-unstyled px-3'>
                     <li id='list'>
                        {country}
                        <AddIcon 
                           onClick={() => tagValue(country)} 
                           className='addIcon' 
                        />
                     </li>
                  </ul>
               )
            })
         }
         </div>
         <div className='countryTagDiv ml-n3'>
            {
               countryTagName && countryTagName.map(tag => {
                  return (
                     <div className='countryTagName'>
                        <span className=''> {tag} </span>
                     </div>
                  )
               })
            }
         </div>
      </Paper>
   );
};

export default Country;