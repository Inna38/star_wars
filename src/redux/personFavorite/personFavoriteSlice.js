import { createSlice } from "@reduxjs/toolkit";
import { omit } from "lodash";
import { getLocalStorage } from "../../utils/localStoraage";

const personFavoriteSlice = createSlice({
  name: "personFavorite",
  initialState: getLocalStorage("store"),
  reducers: {
    setPersonToFavorite(state, { payload }) {
      const favorite = { ...state, ...payload };

      return favorite;
    },
    removePersonFromFavorite(state, { payload }) {
      return omit(state, [payload]);
    },
  },
});

export const { setPersonToFavorite, removePersonFromFavorite } =
  personFavoriteSlice.actions;

export default personFavoriteSlice.reducer;
