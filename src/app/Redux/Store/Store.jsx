
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../Slices/CartSlice'
import favouriteReducer from '../Slices/FavouriteSlice'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        favourites: favouriteReducer,
    }
})