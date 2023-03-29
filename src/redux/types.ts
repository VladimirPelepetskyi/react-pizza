export enum EStatus {
  LOADING = 'loadind',
  SUCCESS = 'success',
  ERROR = 'error',
}

export type TPizzaItem = {
  id: string
  imageUrl: string
  title: string
  types: number[]
  sizes: number[]
  price: number
  category: number
  rating: number
}
