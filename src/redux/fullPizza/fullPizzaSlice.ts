import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {EStatus, TPizzaItem} from './../types'
import {fetchFullPizza} from './asyncActions'
import {IFullPizzaState} from './types'

const initialState: IFullPizzaState = {
  fullPizza: {} as TPizzaItem,
  status: EStatus.LOADING,
}

export const fullPizzaSlice = createSlice({
  name: 'fullPizza',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFullPizza.pending, (state) => {
      state.status = EStatus.LOADING
      state.fullPizza = {} as TPizzaItem
    })
    builder.addCase(fetchFullPizza.fulfilled, (state, action: PayloadAction<TPizzaItem>) => {
      state.fullPizza = action.payload
      state.status = EStatus.SUCCESS
    })
    builder.addCase(fetchFullPizza.rejected, (state) => {
      state.status = EStatus.ERROR
      state.fullPizza = {} as TPizzaItem
    })
  },
})

export default fullPizzaSlice.reducer
