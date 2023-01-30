import { SET_PRODUCTS, SELECTED_PRODUCTS, ADD_PRODUCTS } from "./actions"

const initialState = {
  products: [],
}

const reducer = (state = initialState, { type, payload }) => {
  console.log(state,"its me");
  switch (type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: payload,
      }
    case ADD_PRODUCTS:
      const newproducts = [...state.products,payload]
      return {
        ...state,
        products: newproducts,
      }
    case SELECTED_PRODUCTS:
      return state
    default:
      return state
  }
}

export default reducer
