import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {culcTotalPrice} from '../../utils/culcTotalPrice'
import {getCartItemsFromLS} from '../../utils/getCartItemsFromLS'
import {ICartState, TCartItem} from './types'

const {items, totalPrice} = getCartItemsFromLS()

const initialState: ICartState = {
  items,
  totalPrice,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<TCartItem>) => {
      const findItem = state.items.find((obj) => obj.id === action.payload.id)

      if (findItem) {
        findItem.count++
      } else {
        state.items = [...state.items, action.payload]
      }

      state.totalPrice = culcTotalPrice(state.items)
    },

    minusItem: (state, action: PayloadAction<string>) => {
      const findItem = state.items.find((obj) => obj.id === action.payload)
      if (findItem && findItem.count > 1) {
        findItem.count--
      }
    },

    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((obj) => obj.id !== action.payload)

      state.totalPrice = culcTotalPrice(state.items)
    },

    clearItems: (state) => {
      state.items = []
      state.totalPrice = 0
    },
  },
})

export const {addItem, removeItem, clearItems, minusItem} = cartSlice.actions

export default cartSlice.reducer
