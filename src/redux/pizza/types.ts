import {TPizzaItem} from '../types'
import {EStatus} from './../types'

export interface IPizzaState {
  items: TPizzaItem[]
  status: EStatus
}

export type TFetchPizzasArgs = {
  category: string
  sortBy: string
  order: string
  search: string
  currentPage: number
  pageSize: number
}
