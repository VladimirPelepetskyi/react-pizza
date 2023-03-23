import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  categoryId: 0,
  currentPage: 1,
  pageSize: 4,
  sortType: {name: 'популярности  ↑', sortProperty: 'rating'},
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId: (state, action) => {
      state.categoryId = action.payload
    },
    setSortType: (state, action) => {
      state.sortType = action.payload
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload
    },
    setFilters: (state, action) => {
      state.categoryId = Number(action.payload.categoryId)
      state.currentPage = Number(action.payload.currentPage)
      state.sortType = action.payload.sortType
    },
  },
})

export const {setCategoryId, setSortType, setCurrentPage, setFilters} = filterSlice.actions

export default filterSlice.reducer

// console.log('slice', filterSlice)
// window.filterSlice = filterSlice
