import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './cart/cartSlice'
import filterReducer from './filter/filterSlice'
import fullPizzaReducer from './fullPizza/fullPizzaSlice'
import pizzaReducer from './pizza/pizzaSlice'

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    cart: cartReducer,
    pizza: pizzaReducer,
    fullPizza: fullPizzaReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
