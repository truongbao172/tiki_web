import { GET_ALL_CARD_IDEAS } from "../constants";

const initialState = {
  getAllCardIdeas: []
};

export const CardIdeasReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CARD_IDEAS: {
      return { ...state, getAllCardIdeas: action.data }
    }
    default:
      return { ...state };
  }
};