import { FC } from 'react';

const PizzasNotFoundBlock: FC = () => {
  return (
    <div className='content__not-found'>
      <h1>Упс, нет таких пиццек 😞</h1>
      <p>
        К сожалению, по вашему запросу ничего не найдено.
        <br />
        Попробуйте, пожалуйста, изменить параметры поиска.
      </p>
    </div>
  );
};

export default PizzasNotFoundBlock;
