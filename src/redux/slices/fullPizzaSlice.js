import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchFullPizza = createAsyncThunk('pizzaItem/fetchFullPizza', async (id: string) => {
  const {data} = await axios.get(`https://6416d3ce47092b8b6135b890.mockapi.io/items/${id}`)
  return data
})

const initialState = {
  fullPizza: {},
  status: 'loadind', //loading, success, error
}

export const fullPizzaSlice = createSlice({
  name: 'fullPizza',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchFullPizza.pending, (state) => {
      state.status = 'loadind'
      state.fullPizza = []
    })
    builder.addCase(fetchFullPizza.fulfilled, (state, action) => {
      state.fullPizza = action.payload
      state.status = 'success'
    })
    builder.addCase(fetchFullPizza.rejected, (state) => {
      state.status = 'error'
      state.fullPizza = []
    })
  },
})

export const selectFullPizzaData = (state) => state.fullPizza

export default fullPizzaSlice.reducer
