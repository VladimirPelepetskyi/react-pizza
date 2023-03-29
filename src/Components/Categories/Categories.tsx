import React, {FC} from 'react'

const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

const Categories: FC<TCategoriesProps> = React.memo(({value, onClickCategory}) => {
  return (
    <div className='categories'>
      <ul>
        {categories.map((categoryName, index) => (
          <li
            key={categoryName}
            className={index === value ? 'active' : ''}
            onClick={() => onClickCategory(index)}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  )
})

export default Categories

//types

type TCategoriesProps = {
  value: number
  onClickCategory: (categoryId: number) => void
}
