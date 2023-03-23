import axios from 'axios'
import qs from 'qs'
import {useContext, useEffect, useRef, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {SearchContext} from '../App'
import Categories from '../Components/Categories/Categories'
import Pagination from '../Components/Pagination/Pagination'
import PizzaBlock from '../Components/PizzaBlock/PizzaBlock'
import SkeletonPizzaBlock from '../Components/PizzaBlock/SkeletonPizzaBlock'
import Sort, {sortList} from '../Components/Sort/Sort'
import {setCategoryId, setCurrentPage, setFilters} from '../redux/slices/filterSlice'

const Home = () => {
  const {searchValue} = useContext(SearchContext)
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const isSearch = useRef(false)
  const isMounted = useRef(false)

  const {categoryId, sortType, currentPage, pageSize} = useSelector((state) => state.filter)
  const dispatch = useDispatch()

  const navigate = useNavigate()

  //Кастыль. MockApi не дает общеее количество items
  const totalItemsCount = 10
  const totalPageCount = Math.ceil(totalItemsCount / pageSize)

  const onClickCategory = (categoryId) => {
    dispatch(setCategoryId(categoryId))
  }

  const onClickPage = (pageNumber) => {
    dispatch(setCurrentPage(pageNumber))
  }

  const fetchPizzas = () => {
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
  }

  const skeletons = [...new Array(6)].map((_, index) => <SkeletonPizzaBlock key={index} />)
  const pizzas = items.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1))

      const sortType = sortList.find((obj) => obj.sortProperty === params.sortProperty)

      dispatch(
        setFilters({
          ...params,
          sortType,
        })
      )
      isSearch.current = true
    }
  }, [dispatch])

  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify(
        {
          sortProperty: sortType.sortProperty,
          categoryId,
          currentPage,
        },
        {addQueryPrefix: true}
      )
      navigate(queryString)
    }

    isMounted.current = true
  }, [sortType, categoryId, currentPage, navigate])

  useEffect(() => {
    if (!isSearch.current) {
      fetchPizzas()
    }

    isSearch.current = false

    window.scrollTo(0, 0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortType, categoryId, searchValue, currentPage, pageSize])

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
