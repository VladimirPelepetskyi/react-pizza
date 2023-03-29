import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import {TPizzaItem} from '../types'
import {TFetchPizzas} from './types'

export const fetchPizzas = createAsyncThunk('users/fetchPizzas', async (params: TFetchPizzas) => {
  const {category, sortBy, order, search, currentPage, pageSize} = params
  const {data} = await axios.get<TPizzaItem[]>(
    `https://6416d3ce47092b8b6135b890.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}${search}&page=${currentPage}&limit=${pageSize}`
  )

  return data
})
