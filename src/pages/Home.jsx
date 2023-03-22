import axios from 'axios'
import {useContext, useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {SearchContext} from '../App'
import Categories from '../Components/Categories/Categories'
import Pagination from '../Components/Pagination/Pagination'
import PizzaBlock from '../Components/PizzaBlock/PizzaBlock'
import SkeletonPizzaBlock from '../Components/PizzaBlock/SkeletonPizzaBlock'
import Sort from '../Components/Sort/Sort'
import {setCategoryId, setCurrentPage} from '../redux/slices/filterSlice'

const Home = () => {
  const {searchValue} = useContext(SearchContext)
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const {categoryId, sortType, currentPage, pageSize} = useSelector((state) => state.filter)
  const dispatch = useDispatch()

  //Кастыль. MockApi не дает общеее количество items
  const totalItemsCount = 10
  const totalPageCount = Math.ceil(totalItemsCount / pageSize)

  const onClickCategory = (categoryId) => {
    dispatch(setCategoryId(categoryId))
  }

  const onClickPage = (pageNumber) => {
    dispatch(setCurrentPage(pageNumber))
  }

  useEffect(() => {
    setIsLoading(true)
    const search = searchValue ? `&title=${searchValue}` : ''
    const category = search ? '' : categoryId > 0 ? `category=${categoryId}` : ''
    const sortBy = sortType.sortProperty.replace('-', '')
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc'

    axios
      .get(
        `https://6416d3ce47092b8b6135b890.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}${search}&page=${currentPage}&limit=${pageSize}`
      )
      .then((res) => {
        setItems(res.data)
      })
      .catch(() => console.warn(`Some problems with mockAPI, please reload the page`))
      .finally(() => setIsLoading(false))
    window.scrollTo(0, 0)
  }, [sortType, categoryId, searchValue, currentPage, pageSize])

  const skeletons = [...new Array(6)].map((_, index) => <SkeletonPizzaBlock key={index} />)
  const pizzas = items.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)

  return (
    <div className='container'>
      <div className='content__top'>
        <Categories value={categoryId} onClickCategory={onClickCategory} />
        <Sort />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>{isLoading ? skeletons : pizzas}</div>
      <Pagination
        currentPage={currentPage}
        onPageChanged={onClickPage}
        pageSize={pageSize}
        totalPageCount={totalPageCount}
      />
    </div>
  )
}

export default Home
