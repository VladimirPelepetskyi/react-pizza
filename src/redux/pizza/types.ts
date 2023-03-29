import {TPizzaItem, TStatusLoading} from '../types'

export interface IPizzaState {
  items: TPizzaItem[]
  status: TStatusLoading
}

export type TFetchPizzas = {
  category: string
  sortBy: string
  order: string
  search: string
  currentPage: number
  pageSize: number
}
