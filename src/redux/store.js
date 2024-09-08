import { configureStore } from "@reduxjs/toolkit";
import personFavoriteReducer from "./personFavorite/personFavoriteSlice";
import { setLocalStorage } from "../utils/localStoraage";

const store = configureStore({
  reducer: {
    personFavorite: personFavoriteReducer,
  },
});

store.subscribe(() => {
  setLocalStorage("store", store.getState().personFavorite);
});

export default store;
