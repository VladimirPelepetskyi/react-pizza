import {useSelector} from 'react-redux'
import CartBlock from '../Components/CartBlock/CartBlock'
import CartEmptyBlock from '../Components/CartEmptyBlock/CartEmptyBlock'

const Cart = () => {
  const items = useSelector((state) => state.cart.items)
  return <>{items.length ? <CartBlock /> : <CartEmptyBlock />}</>
}

export default Cart
