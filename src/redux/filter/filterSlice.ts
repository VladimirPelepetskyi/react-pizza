import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {IFilterState, TFilters, TSort} from './types'

const initialState: IFilterState = {
  categoryId: 0,
  currentPage: 1,
  pageSize: 4,
  sortType: {name: 'популярности  ↑', sortProperty: 'rating'},
  searchValue: '',
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId: (state, action: PayloadAction<number>) => {
      state.categoryId = action.payload
      state.currentPage = 1
    },
    setSortType: (state, action: PayloadAction<TSort>) => {
      state.sortType = action.payload
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload
    },
    setFilters: (state, action: PayloadAction<TFilters>) => {
      state.categoryId = Number(action.payload.categoryId)
      state.currentPage = Number(action.payload.currentPage)
      state.sortType = action.payload.sortType
    },
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload
    },
  },
})

export const {setCategoryId, setSortType, setCurrentPage, setFilters, setSearchValue} = filterSlice.actions

export default filterSlice.reducer
