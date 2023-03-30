import {FC} from 'react'

export const PizzasErrorBlock: FC = () => {
  return (
    <div className='content__error-info'>
      <h1>Произошла ошибка 😕</h1>
      <p>
        К сожалению, не удалось получить пиццы.
        <br />
        Попробуйте повторить попытку позже.
      </p>
    </div>
  )
}
