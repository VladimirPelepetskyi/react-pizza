import {useSelector} from 'react-redux'
import CartBlock from '../Components/CartBlock/CartBlock'
import CartEmptyBlock from '../Components/CartEmptyBlock/CartEmptyBlock'
import {cartSelector} from '../redux/slices/cartSlice'

const Cart = () => {
  const {items} = useSelector(cartSelector)
  return <>{items.length ? <CartBlock /> : <CartEmptyBlock />}</>
}

export default Cart
