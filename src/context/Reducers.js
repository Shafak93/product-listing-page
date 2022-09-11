export const initialState = {
}
export const cartReducer = (state, action) => {
    switch (action.type) {
        case 'CHECK_TO_ADDCART':
            return {
                ...state,
                cart : [...state.cart,{...action.payload,qty:1}]
            }
        case 'UNCHECK_FROM_ADDCART':
            return {
                ...state,
                cart : state.cart.filter(ct => ct.id !== action.payload.id)
            }
        default:
           return state;
    }
}
