import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {ICartState, TCartItem} from './types'

const initialState: ICartState = {
  items: [],
  totalPrice: 0,
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

      state.totalPrice = state.items.reduce((sum, obj) => obj.price * obj.count + sum, 0)
    },

    minusItem: (state, action: PayloadAction<string>) => {
      const findItem = state.items.find((obj) => obj.id === action.payload)
      if (findItem && findItem.count > 1) {
        findItem.count--
      }
    },

    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((obj) => obj.id !== action.payload)

      state.totalPrice = state.items.reduce((sum, obj) => obj.price * obj.count + sum, 0)
    },

    clearItems: (state) => {
      state.items = []
      state.totalPrice = 0
    },
  },
})

export const {addItem, removeItem, clearItems, minusItem} = cartSlice.actions

export default cartSlice.reducer
