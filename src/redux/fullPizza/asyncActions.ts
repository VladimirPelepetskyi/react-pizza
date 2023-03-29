import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import {TPizzaItem} from '../types'

export const fetchFullPizza = createAsyncThunk('pizzaItem/fetchFullPizza', async (id: string) => {
  const {data} = await axios.get<TPizzaItem>(`https://6416d3ce47092b8b6135b890.mockapi.io/items/${id}`)
  return data
})
