import React, { useEffect, useState } from 'react';
import { Paper, TextField } from '@material-ui/core';
import './Home.css'
import TagPage from '../TagPage/TagPage';
import { ContextData } from '../ContextProvider/ContextProvider';
import Country from '../CountryPage/Country';

const Home = () => {
   const contexts = ContextData()

   const [title, setTitle] = useState();
   const [saveActivity, setSaveActivity] = useState(false)
   useEffect(() => {
      if (title) {
         contexts.addTagOnDataBase(title)
      }
   }, [title])

   return (
      <div className="container">
         <div className='row'>
            <div className='col-md-4'></div>
            {
               !contexts.countryComponent && 
               <Paper className='col-md-4 mainBox' elevation={3}>
                  {
                     !title && !saveActivity &&
                     <TextField 
                        className='form-control'
                        id="standard-basic" 
                        label="write your text here" 
                        onBlur={(e) => setTitle(e.target.value)}
                     />
                  }
                  {
                     title && !saveActivity && 
                     <TagPage 
                        setSaveActivity={setSaveActivity} 
                        title={title} 
                     />
                  }
                  {
                     saveActivity && 
                     <div className='activitySaved'>
                        <span>activity saved</span>
                     </div>
                  }
               </Paper>
            }
            {
               contexts.countryComponent && <Country></Country>
            }
            <div className='col-md-4'></div>
         </div>
      </div>
   );
};

export default Home;