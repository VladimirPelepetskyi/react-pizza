import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchPizzaItem = createAsyncThunk('pizzaItem/fetchPizzaItem', async (id) => {
  const {data} = await axios.get(`https://6416d3ce47092b8b6135b890.mockapi.io/items/${id}`)
  return data
})

const initialState = {
  pizzaItem: {},
  status: 'loadind', //loading, success, error
}

export const pizzaItemSlice = createSlice({
  name: 'pizzaItem',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPizzaItem.pending, (state) => {
      state.status = 'loadind'
      state.pizzaItem = []
    })
    builder.addCase(fetchPizzaItem.fulfilled, (state, action) => {
      state.pizzaItem = action.payload
      state.status = 'success'
    })
    builder.addCase(fetchPizzaItem.rejected, (state) => {
      state.status = 'error'
      state.pizzaItem = []
    })
  },
})

export const selectPizzaItemData = (state) => state.pizzaItem

export const {setPizzaItem} = pizzaItemSlice.actions

export default pizzaItemSlice.reducer
