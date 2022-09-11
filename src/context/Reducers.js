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
        case 'QUANTITY':
            return {
                ...state,
                cart: state.cart.filter(ct => ct.id !== action.payload.id ? (ct.qty = action.payload.qty) : ct.qty
                
                )
            }
        default:
           return state;
    }
}

export const filterReducer = (state, action) => {
    switch (action.type) {
        case 'BY_CATEGORY':
            
            return {
                ...state,
                byCategory: action.payload
                    // state.products.filter(cat => cat.category === action.payload) 
            }
        case 'BY_BRAND':
            
            return {
                ...state,
                byBrand : action.payload
            }
        case 'BY_SEARCH':
            
            return {
                ...state,
                bySearch : action.payload
            }
        case 'RESET':
            
            return {
                byCategory: "",
                byBrand: "",
                reset: '',
                bySearch: ""
            }
    
        default:
            break;
    }
    
}
