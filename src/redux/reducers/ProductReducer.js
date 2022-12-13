import { GET_ALL_PRODUCT } from "../constants";

const initialState = {
  getAllProduct: [],

};

export const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCT: {
        return { ...state, getAllProduct: action.data }
    }
    default:
      return { ...state };
  }
};