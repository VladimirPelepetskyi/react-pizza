import axios from 'axios'
import {useEffect, useState} from 'react'
import Categories from '../Components/Categories/Categories'
import PizzaBlock from '../Components/PizzaBlock/PizzaBlock'
import SkeletonPizzaBlock from '../Components/PizzaBlock/SkeletonPizzaBlock'
import Sort from '../Components/Sort/Sort'

const Home = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [categoryId, setCategoryId] = useState(0)
  const [sortType, setSortType] = useState({name: 'популярности  ↑', sortProperty: 'rating'})

  useEffect(() => {
    setIsLoading(true)
    const category = categoryId > 0 ? `category=${categoryId}` : ''
    const sortBy = sortType.sortProperty.replace('-', '')
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc'

    axios
      .get(`https://6416d3ce47092b8b6135b890.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`)
      .then((res) => {
        setItems(res.data)
      })
      .catch(() => console.warn(`Some problems with mockAPI, please reload the page`))
      .finally(() => setIsLoading(false))
    window.scrollTo(0, 0)
  }, [sortType, categoryId])

  return (
    <div className='container'>
      <div className='content__top'>
        <Categories value={categoryId} onClickCategory={setCategoryId} />
        <Sort value={sortType} onClickSortType={setSortType} />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>
        {isLoading
          ? [...new Array(6)].map((_, index) => <SkeletonPizzaBlock key={index} />)
          : items.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)}
      </div>
    </div>
  )
}

export default Home
