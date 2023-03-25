const PizzasErrorBlock = () => {
  return (
    <div className='content__error-info'>
      <h1>
        Произошла ошибка <icon>😕</icon>
      </h1>
      <p>
        К сожалению, не удалось получить пиццы.
        <br />
        Попробуйте повторить попытку позже.
      </p>
    </div>
  )
}

export default PizzasErrorBlock
