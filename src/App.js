import React from 'react'
import Home from './Component/Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { ContextProvider } from './Component/ContextProvider/ContextProvider'

function App() {
  return (
    <div className='app'>
      <ContextProvider>
        <Home />
      </ContextProvider>
    </div>
  );
}

export default App;
