import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const initialState = {
  products: [],
  isLoading: false,
}

const url = "https://api.storerestapi.com/products"

export const getProducts = createAsyncThunk("product/getProducts", () => {
  return fetch(url)
    .then((resp) => resp.json())
    .catch((err) => console.log(err))
})

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const cartItem = action.payload
      state.products.push(cartItem)
    },
    showProduct: (state, action) => {
      const product = state.products.find((item) => item.id === action.payload)
      return product
    },
    removeProduct: (state, action) => {
      const productId = action.payload
      state.products = state.products.filter((item) => item.id !== productId)
    },
  },
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.isLoading = true
    },
    [getProducts.fulfilled]: (state, action) => {
      state.isLoading = false
      state.products = action.payload.data
    },
    [getProducts.pending]: (state) => {
      state.isLoading = false
    },
  },
})

export default productSlice.reducer

export const { addProduct, showProduct, removeProduct } = productSlice.actions
