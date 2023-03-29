export type TStatusLoading = 'loadind' | 'success' | 'error'

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
