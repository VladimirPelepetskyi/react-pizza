import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchPizzas = createAsyncThunk('users/fetchPizzas', async (params) => {
  const {category, sortBy, order, search, currentPage, pageSize} = params
  const {data} = await axios.get(
    `https://6416d3ce47092b8b6135b890.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}${search}&page=${currentPage}&limit=${pageSize}`
  )
  return data
})

const initialState = {
  items: [],
  status: 'loadind', //loading, success, error
}

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.status = 'loadind'
      state.items = []
    })
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.items = action.payload
      state.status = 'success'
    })
    builder.addCase(fetchPizzas.rejected, (state) => {
      state.status = 'error'
      state.items = []
    })
  },
})

export const selectPizza = (state) => state.pizza

export const {setItems} = pizzaSlice.actions

export default pizzaSlice.reducer
