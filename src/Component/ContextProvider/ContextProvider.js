import React, { createContext, useContext, useEffect, useState } from 'react'
import countryData from '../countries+states.json'


// Create Auth Context
const AuthContext = createContext()
export const ContextData = () => useContext(AuthContext)

// Create Provider For AuthContext
export const ContextProvider = (props) => {
   const auth = AllContexts()
   return <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
}


const AllContexts = () => {
   const [countryComponent, setCountryComponent] = useState(false)

   const [countryName, setCountryName] = useState('')
   const countryNameArry = countryData && countryData.map(countryData => countryData.name)
   const countries = countryNameArry && countryNameArry.filter(data => {
      return data.toLocaleLowerCase().includes(countryName.toLocaleLowerCase())
   })

   const [countryTags, setCountryTags] = useState([])
   useEffect(() => {
      fetch('http://localhost:3005/get-tags', {
         method: 'GET',
         headers: { 
            'Content-Type': 'application/json'
         },
      })
      .then(response => response.json())
      .then(result => {
         console.log(result)
         if (result) {
            const data = result.map(data => data.tags)
            setCountryTags(data)
         }
      })
   }, [])

   const addTagOnDataBase = (country) => {
      fetch('http://localhost:3005/add-tags', {
         method: 'POST',
         headers: { 
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({tags:country})
      })
      .then(response => response.json())
      .then(result => {
         console.log(result.data.tags)
         setCountryTags([...countryTags, result.data.tags])
      })
   }

   
   return {
      countryComponent, 
      setCountryComponent,
      setCountryName,
      countries,
      countryTags,
      setCountryTags,
      addTagOnDataBase,
   }
}