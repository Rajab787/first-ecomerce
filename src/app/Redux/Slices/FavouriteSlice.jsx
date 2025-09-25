import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
  name: "favourites",
  initialState: {
    items: [],
  },
  reducers: {
    addToFavourite: (state, action) => {
      const item = action.payload;
      const exists = state.items.find((fav) => fav.id === item.id);
      if (!exists) {
        state.items.push(item);
      }
    },
    removeFromFavourite: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((fav) => fav.id !== id);
    },
  },
});

export const { addToFavourite, removeFromFavourite } = favouriteSlice.actions;
export default favouriteSlice.reducer;
