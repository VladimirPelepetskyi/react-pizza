import React, {Suspense} from 'react'
import {Route, Routes} from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import './scss/app.scss'

const Cart = React.lazy(() => import(/*webpachChunkName: "Cart"*/ './pages/Cart'))
const FullPizza = React.lazy(() => import(/*FullPizza: "Cart"*/ './pages/FullPizza'))
const NotFound = React.lazy(() => import(/*NotFound: "Cart"*/ './pages/NotFound'))

function App() {
  return (
    <Suspense fallback={<div>Идет загрузка</div>}>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route path='' element={<Home />} />
          <Route path='pizza/:id' element={<FullPizza />} />
          <Route path='cart' element={<Cart />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
