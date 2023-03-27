import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import PizzasErrorBlock from '../Components/PizzasErrorBlock/PizzasErrorBlock'
import {fetchPizzaItem, selectPizzaItemData} from '../redux/slices/pizzaItemSlice'

const PizzaItem = () => {
  const dispatch = useDispatch()
  const {id} = useParams()
  const {pizzaItem, status} = useSelector(selectPizzaItemData)

  useEffect(() => {
    dispatch(fetchPizzaItem(id))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  return (
    <div className='container'>
      {status === 'error' ? (
        <PizzasErrorBlock />
      ) : (
        <>
          <div>
            <img src={pizzaItem.imageUrl} alt={pizzaItem.title} />
            <h1>{pizzaItem.title}</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, esse quia expedita labore
              libero ducimus temporibus enim exercitationem nihil voluptas, eos aut dicta corporis explicabo
              suscipit a, odio facere rem.
            </p>
          </div>
        </>
      )}
    </div>
  )
}

export default PizzaItem
