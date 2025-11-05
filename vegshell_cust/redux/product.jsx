import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: null,
  error: null,
  message: null,
  loading: true,
};

const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    getAllProducts: (state, action) => {
      product = action.payload.data;
      loading = false;
    },
    requestFailure: (state, action) => {
      loading = false;
      message = action.payload;
    },
    requestProduct: (state, action) => {
      loading = true;
    },
  },
});

export default productSlice.reducer;
