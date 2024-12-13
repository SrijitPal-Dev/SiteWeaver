import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Store from './pages/Store';
import Login from './pages/Login';
const App = () => {
  return (
    <>
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Store' element={<Store/>}/>
      </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App