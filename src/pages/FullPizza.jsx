import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import PizzasErrorBlock from '../Components/PizzasErrorBlock/PizzasErrorBlock'
import {fetchFullPizza, selectFullPizzaData} from '../redux/slices/fullPizzaSlice'

const FullPizza = () => {
  const dispatch = useDispatch()
  const {id} = useParams()
  const {fullPizza, status} = useSelector(selectFullPizzaData)

  useEffect(() => {
    dispatch(fetchFullPizza(id))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  return (
    <div className='container'>
      {status === 'error' ? (
        <PizzasErrorBlock />
      ) : (
        <>
          <div>
            <img src={fullPizza.imageUrl} alt={fullPizza.title} />
            <h1>{fullPizza.title}</h1>
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

export default FullPizza
