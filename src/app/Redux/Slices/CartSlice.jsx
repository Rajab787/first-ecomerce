import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        isOpen: false,
    },
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const exist = state.items.find((p) => p.id === item.id);

            if (exist) {
                exist.quantity += 1;
            } else {
                state.items.push({ ...item, quantity: 1 });
            }
           

        },

        openCart: (state) => {
            state.isOpen = true;
        },
        closeCart: (state) => {
            state.isOpen = false;
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter((p) => p.id !== action.payload)
        },
        clearCart: (state) => {
            state.items = [];
        }
    }
})
export const { addToCart, removeFromCart, clearCart, openCart, closeCart } = cartSlice.actions
export default cartSlice.reducer