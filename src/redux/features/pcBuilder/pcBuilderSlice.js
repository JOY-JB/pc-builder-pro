import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedProducts: {},
};

export const pcBuilderSlice = createSlice({
  name: "pcBuilder",
  initialState,
  reducers: {
    selectProduct: (state, action) => {
      const { category, productId } = action.payload;
      state.selectedProducts = {
        ...state.selectedProducts,
        [category]: productId,
      };
    },
  },
});

export const { selectProduct } = pcBuilderSlice.actions;

export default pcBuilderSlice.reducer;
