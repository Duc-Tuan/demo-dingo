import { DELETE_CART, ADD_CART } from "./Constant";

export const deleteCart = playload => {
    return {
        type: DELETE_CART,
        playload
    }
}

export const addCart = playload => {
    return {
        type: ADD_CART,
        playload
    }
}