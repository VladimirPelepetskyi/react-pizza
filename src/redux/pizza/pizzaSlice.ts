import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {TPizzaItem} from '../types'
import {fetchPizzas} from './asyncActions'
import {IPizzaState} from './types'

const initialState: IPizzaState = {
  items: [],
  status: 'loadind',
}

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.status = 'loadind'
      state.items = []
    })
    builder.addCase(fetchPizzas.fulfilled, (state, action: PayloadAction<TPizzaItem[]>) => {
      state.items = action.payload
      state.status = 'success'
    })
    builder.addCase(fetchPizzas.rejected, (state) => {
      state.status = 'error'
      state.items = []
    })
  },
})

export default pizzaSlice.reducer
