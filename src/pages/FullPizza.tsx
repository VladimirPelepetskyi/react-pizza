import {FC, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import {fetchFullPizza} from '../redux/fullPizza/asyncActions'
import {selectFullPizzaData} from '../redux/fullPizza/selectors'
import {AppDispatch} from '../redux/store'
import {FullPizzaBlock, PizzasErrorBlock} from '../Components'

const FullPizza: FC = () => {
  const dispatch: AppDispatch = useDispatch()
  const {id} = useParams()
  const {fullPizza, status} = useSelector(selectFullPizzaData)

  useEffect(() => {
    if (id) {
      dispatch(fetchFullPizza(id))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  return (
    <div className='container'>
      {status === 'error' ? <PizzasErrorBlock /> : <FullPizzaBlock fullPizza={fullPizza} />}
    </div>
  )
}

export default FullPizza
