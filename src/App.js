/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Latest from './pages/Latest';
import Home from './pages/Home';

const App = () => {
  return (
    <div>
      <img src="/static/Images/email_icon_2.png"/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/latest' element={<Latest/>}/>        
      </Routes>
    </div>
  )
}

export default App