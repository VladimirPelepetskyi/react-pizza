import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {TPizzaItem, TStatusLoading} from './../types'
import {fetchFullPizza} from './asyncActions'

interface IFullPizzaState {
  fullPizza: TPizzaItem
  status: TStatusLoading
}

const initialState: IFullPizzaState = {
  fullPizza: {} as TPizzaItem,
  status: 'loadind',
}

export const fullPizzaSlice = createSlice({
  name: 'fullPizza',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFullPizza.pending, (state) => {
      state.status = 'loadind'
      state.fullPizza = {} as TPizzaItem
    })
    builder.addCase(fetchFullPizza.fulfilled, (state, action: PayloadAction<TPizzaItem>) => {
      state.fullPizza = action.payload
      state.status = 'success'
    })
    builder.addCase(fetchFullPizza.rejected, (state) => {
      state.status = 'error'
      state.fullPizza = {} as TPizzaItem
    })
  },
})

export default fullPizzaSlice.reducer
