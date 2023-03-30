import {FC} from 'react'
import {useSelector} from 'react-redux'
import {CartBlock, CartEmptyBlock} from '../Components/'
import {cartSelector} from '../redux/cart/selectors'

const Cart: FC = () => {
  const {items} = useSelector(cartSelector)
  return <>{items.length ? <CartBlock /> : <CartEmptyBlock />}</>
}

export default Cart
