import React from 'react'
import {Route, Routes, useLocation} from 'react-router-dom'
import Header from './Components/Header/Header'
import Cart from './pages/Cart'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

import './scss/app.scss'

function App() {
  const location = useLocation()
  const isMainPage = location.pathname === '/'

  return (
    <div className='wrapper'>
      <Header withSearch={isMainPage} />
      <div className='content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
