import {FC} from 'react'
import {Link} from 'react-router-dom'
import {TPizzaItem} from '../../redux/types'

export const FullPizzaBlock: FC<TFullPizzaBlockProps> = ({fullPizza}) => {
  return (
    <div className='container container__full-pizza'>
      <p className='full-pizza__photo'>
        <img src={fullPizza.imageUrl} alt={fullPizza.title} />
      </p>
      <div className='full-pizza__wrapper'>
        <h1 className='full-pizza__title'>{fullPizza.title}</h1>
        <p className='full-pizza__desc'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, esse quia expedita labore libero
          ducimus temporibus enim exercitationem nihil voluptas, eos aut dicta corporis explicabo suscipit a,
          odio facere rem.
        </p>
        <Link className='button full-pizza__button button--black' to='/'>
          <span>Вернуться назад</span>
        </Link>
      </div>
    </div>
  )
}

//types

type TFullPizzaBlockProps = {
  fullPizza: TPizzaItem
}
