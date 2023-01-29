export const SET_PRODUCTS = "SET_PRODUCTS"
export const SELECTED_PRODUCTS = "SELECTED_PRODUCTS"

export const setProducts = (product) => {
  return {
    type: SET_PRODUCTS,
    payload: product,
  }
}
export const selectedProducts = (id, product) => {
  return {
    type: SELECTED_PRODUCTS,
  }
}
