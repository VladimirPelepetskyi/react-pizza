import {ICartState} from './../redux/cart/types'
import {culcTotalPrice} from './culcTotalPrice'

export const getCartItemsFromLS = (): ICartState => {
  const data = localStorage.getItem('cartItems')
  const items = data ? JSON.parse(data) : []
  const totalPrice = culcTotalPrice(items)

  return {
    items,
    totalPrice,
  }
}
