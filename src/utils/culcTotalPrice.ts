import {TCartItem} from './../redux/cart/types'

export const culcTotalPrice = (items: TCartItem[]) => {
  return items.reduce((sum, obj) => obj.price * obj.count + sum, 0)
}
