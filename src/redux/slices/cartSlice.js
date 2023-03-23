import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  items: [],
  totalPrice: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const findItem = state.items.find((obj) => obj.title === action.payload.title)

      if (findItem) {
        findItem.count++
      } else {
        state.items = [...state.items, action.payload]
      }

      state.totalPrice = state.items.reduce((sum, obj) => obj.price * obj.count + sum, 0)
    },

    removeItem: (state, action) => {
      state.items = state.items.filter((obj) => obj.title !== action.payload.title)

      state.totalPrice = state.items.reduce((sum, obj) => obj.price * obj.count + sum, 0)
    },

    clearItems: (state) => {
      state.items = []
      state.totalPrice = 0
    },

    plusCartItemCount: (state, action) => {
      // eslint-disable-next-line array-callback-return
      state.items.map((item) => {
        if (item.id === action.payload) {
          return item.count++
        }
      })
    },
    minusCartItemCount: (state, action) => {
      // eslint-disable-next-line array-callback-return
      state.items.map((item) => {
        if (item.id === action.payload) {
          item.count--
        }
      })
    },
  },
})

export const {addItem, removeItem, clearItems, plusCartItemCount, minusCartItemCount} = cartSlice.actions

export default cartSlice.reducer

// console.log('slice', cartSlice)
// window.cartSlice = cartSlice
