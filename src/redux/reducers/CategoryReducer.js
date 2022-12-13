
import { GET_ALL_CATEGORY, GET_ALL_DEMO_CATEGORY } from "../constants";

const initialState = {
  getAllDemoCategory: []
};

export const CategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_DEMO_CATEGORY: {
      return { ...state, getAllDemoCategory: action.data }
    }
    default:
      return { ...state };
  }
};