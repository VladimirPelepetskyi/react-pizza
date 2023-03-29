export type TSort = {
  name: string
  sortProperty: string
}

export type TFilters = {
  categoryId: string
  currentPage: string
  sortProperty: string
  sortType: TSort
}

export interface IFilterState {
  categoryId: number
  currentPage: number
  pageSize: number
  sortType: TSort
  searchValue: string
}
