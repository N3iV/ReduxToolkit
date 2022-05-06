import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCocktail = createAsyncThunk(
  "cocktails/fetchCocktails",
  async () => {
    return fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
    ).then((res) => res.json());
  }
);
export const fetchCocktailDetail = createAsyncThunk(
  "cocktail/detail",
  async ({ id }) => {
    return fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    ).then((res) => res.json());
  }
);
export const fetchSearch = createAsyncThunk(
  "cocktail/search",
  async (search) => {
    return fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`
    ).then((res) => res.json());
  }
);
const cocktailSlice = createSlice({
  name: "cocktails",
  initialState: {
    cocktails: [],
    cocktail: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    [fetchCocktail.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchCocktail.fulfilled]: (state, action) => {
      state.loading = false;
      state.cocktails = action.payload.drinks;
    },
    [fetchCocktail.rejected]: (state, action) => {
      state.loading = false;
      state.cocktails = action.payload;
    },
    [fetchCocktailDetail.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchCocktailDetail.fulfilled]: (state, action) => {
      state.loading = false;
      state.cocktail = action.payload.drinks;
    },
    [fetchCocktailDetail.rejected]: (state, action) => {
      state.loading = false;
      state.cocktail = action.payload;
    },
    [fetchSearch.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchSearch.fulfilled]: (state, action) => {
      state.loading = false;
      state.cocktails = action.payload.drinks;
    },
    [fetchSearch.rejected]: (state, action) => {
      state.loading = false;
      state.cocktails = action.payload;
    },
  },
});

export default cocktailSlice.reducer;
