export const initialState = {
  cart: [],
  total: 0,
};

export const actionType = {
  SET_CART: "SET_CART",
  SET_TOTAL: "SET_TOTAL",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionType.SET_CART:
      return {
        ...state,
        cart: [...state.cart,action.cart],
      };

    case actionType.SET_TOTAL:
      return {
        ...state,
        total: action.total,
      };

    default:
      return state;
  }
};

export default reducer;
