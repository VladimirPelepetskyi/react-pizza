import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {EStatus, TPizzaItem} from '../types'
import {fetchPizzas} from './asyncActions'
import {IPizzaState} from './types'

const initialState: IPizzaState = {
  items: [],
  status: EStatus.LOADING,
}

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.status = EStatus.LOADING
      state.items = []
    })
    builder.addCase(fetchPizzas.fulfilled, (state, action: PayloadAction<TPizzaItem[]>) => {
      state.items = action.payload
      state.status = EStatus.SUCCESS
    })
    builder.addCase(fetchPizzas.rejected, (state) => {
      state.status = EStatus.ERROR
      state.items = []
    })
  },
})

export default pizzaSlice.reducer
