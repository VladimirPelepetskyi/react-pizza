export type TCartItem = {
  id: string
  title: string
  imageUrl: string
  type: string
  count: number
  price: number
  size: number
}

export interface ICartState {
  items: TCartItem[]
  totalPrice: number
}
