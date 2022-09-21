import { DELETE_CART, ADD_CART } from "./Constant";

export const initState = {
  carts: [],
  totalPrice: null,
};

function reducer(state, action) {
  switch (action.type) {
    case DELETE_CART:
      const newCarts = [...state.carts];
      newCarts.splice(action.playload, 1);
      return {
        ...state,
        carts: newCarts,
      };
    case ADD_CART:
      return {
        ...state,
        carts: [...state.carts,{...action.playload}],
      };
    default:
      throw new Error(action.type + " is not supported");
  }
}

export default reducer;
