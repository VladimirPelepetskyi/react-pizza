import React, {FC, useEffect, useRef, useState} from 'react'
import {useDispatch} from 'react-redux'
import {setSortType} from '../../redux/filter/filterSlice'
import {TSort} from '../../redux/filter/types'
import {AppDispatch} from '../../redux/store'

export const sortList: TSort[] = [
  {name: 'популярности  ↑', sortProperty: 'rating'},
  {name: 'популярности ↓', sortProperty: '-rating'},
  {name: 'цене ↑', sortProperty: 'price'},
  {name: 'цене ↓', sortProperty: '-price'},
  {name: 'алфавиту ↑', sortProperty: 'title'},
  {name: 'алфавиту ↓', sortProperty: '-title'},
]

const Sort: FC<TSortProps> = React.memo(({sortType}) => {
  const [isOpen, setIsOpen] = useState(false)
  const dispatch: AppDispatch = useDispatch()
  const sortRef = useRef<HTMLDivElement>(null)

  const onClickListItem = (obj: TSort) => {
    dispatch(setSortType(obj))
    setIsOpen(false)
  }

  const handleClickOutside = (evt: MouseEvent) => {
    const path = evt.composedPath()
    if (sortRef.current && !path.includes(sortRef.current)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.body.addEventListener('click', handleClickOutside)
    return () => document.body.removeEventListener('click', handleClickOutside)
  }, [])

  return (
    <div ref={sortRef} className='sort'>
      <div className='sort__label'>
        <svg
          width='10'
          height='6'
          viewBox='0 0 10 6'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          transform={isOpen ? 'rotate(180)' : ''}
        >
          <path
            d='M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z'
            fill='#2C2C2C'
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={() => setIsOpen((prev) => !prev)}>{sortType.name}</span>
      </div>
      {isOpen && (
        <div className='sort__popup'>
          <ul>
            {sortList.map((obj, index) => (
              <li
                key={index}
                className={sortType.sortProperty === obj.sortProperty ? 'active' : ''}
                onClick={() => onClickListItem(obj)}
              >
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
})

export default Sort

//types

type TSortProps = {
  sortType: TSort
}
