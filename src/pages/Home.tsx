import qs from 'qs'
import {useCallback, useEffect, useRef} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {
  Categories,
  Pagination,
  PizzaBlock,
  PizzasErrorBlock,
  PizzasNotFoundBlock,
  SkeletonPizzaBlock,
  Sort,
} from '../Components/'
import {sortList} from '../Components/Sort'
import {setCategoryId, setCurrentPage, setFilters} from '../redux/filter/filterSlice'
import {selectFilter, selectSearchValue} from '../redux/filter/selectors'
import {TFilters} from '../redux/filter/types'
import {fetchPizzas} from '../redux/pizza/asyncActions'
import {selectPizzaData} from '../redux/pizza/selectors'
import {AppDispatch} from '../redux/store'

const Home = () => {
  const searchValue = useSelector(selectSearchValue)
  const {items, status} = useSelector(selectPizzaData)

  const isSearch = useRef(false)
  const isMounted = useRef(false)

  const {categoryId, sortType, currentPage, pageSize} = useSelector(selectFilter)
  const dispatch: AppDispatch = useDispatch()

  const navigate = useNavigate()

  //Кастыль. MockApi не дает общеее количество items
  const totalItemsCount = 10
  const totalPageCount = Math.ceil(totalItemsCount / pageSize)

  const onClickCategory = useCallback((categoryId: number) => {
    dispatch(setCategoryId(categoryId))
  }, [])

  const onClickPage = (pageNumber: number) => {
    dispatch(setCurrentPage(pageNumber))
  }

  const getPizzas = async () => {
    const search = searchValue ? `&title=${searchValue}` : ''
    const category = search ? '' : categoryId > 0 ? `category=${categoryId}` : ''
    const sortBy = sortType.sortProperty.replace('-', '')
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc'

    dispatch(fetchPizzas({category, sortBy, order, search, currentPage, pageSize}))

    // window.scrollTo(0, 0)
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
        } as TFilters)
      )

      isSearch.current = true
    }
  }, [])

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
      getPizzas()
    }

    isSearch.current = false

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortType, categoryId, searchValue, currentPage, pageSize])

  return (
    <div className='container'>
      <div className='content__top'>
        <Categories value={categoryId} onClickCategory={onClickCategory} />
        <Sort sortType={sortType} />
      </div>
      {status === 'error' ? (
        <PizzasErrorBlock />
      ) : items.length === 0 && status === 'success' ? (
        <PizzasNotFoundBlock />
      ) : (
        <>
          <h2 className='content__title'>Все пиццы</h2>
          <div className='content__items'>{status === 'loadind' ? skeletons : pizzas}</div>

          <Pagination
            currentPage={currentPage}
            onPageChanged={onClickPage}
            pageSize={pageSize}
            totalPageCount={totalPageCount}
          />
        </>
      )}
    </div>
  )
}

export default Home
