import { Button, Fab } from '@material-ui/core';
import React, { useEffect } from 'react';
import './TagPage.css'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { ContextData } from '../ContextProvider/ContextProvider';


const TagPage = (props) => {
   const contexts = ContextData()
   const tags = contexts.countryTags

   // const addTitle = (value) => {
   //    console.log(value)
   //    // contexts.addTagOnDataBase(value)
   // }

   return (
      <div className='tagSection'>
         <div className='text-center'>
            <h4>I am going to {props.title} </h4>
         </div>
         <div>
            <div className='tagContainer ml-n3'>
               {
                  tags && tags.map(data => {
                     return (
                        <div className='tags'>
                           <span className=''> {data} </span>
                        </div>
                     )
                  })
               }
               <span>
                  <Button 
                     className='addTag' 
                     variant="outlined"
                     onClick={() => contexts.setCountryComponent(true)}
                  >
                     + add tag
                  </Button>
                  
               </span>
            </div>
         </div>
         <Fab 
            size="medium" 
            color="primary" 
            aria-label="add" 
            className='saveActivity'
            onClick={() => props.setSaveActivity(true)}
         >
            <ArrowForwardIosIcon />
         </Fab>
      </div>
   );
};

export default TagPage;