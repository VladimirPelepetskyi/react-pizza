import axios from 'axios'
import {useEffect, useState} from 'react'
import Categories from './Components/Categories/Categories'
import Header from './Components/Header/Header'
import PizzaBlock from './Components/PizzaBlock/PizzaBlock'
import Sort from './Components/Sort/Sort'
import './scss/app.scss'

function App() {
  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
    axios.get('https://6416d3ce47092b8b6135b890.mockapi.io/items').then((res) => {
      setPizzas(res.data)
    })
  }, [])

  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <div className='container'>
          <div className='content__top'>
            <Categories />
            <Sort />
          </div>
          <h2 className='content__title'>Все пиццы</h2>
          <div className='content__items'>
            {pizzas.map((pizza) => (
              <PizzaBlock key={pizza.id} {...pizza} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
