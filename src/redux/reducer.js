import { SET_PRODUCTS, SELECTED_PRODUCTS } from "./actions"

const initialState = {
  products: [],
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: payload,
      }
    case SELECTED_PRODUCTS:
      return state
    default:
      return state
  }
}

export default reducer
