import * as Types from './../constants/ActionTypes';
let initialState = [];

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_PRODUCTS:
            state = action.products;
            return [...state]
        default:
            return state;
    }
}

export default productsReducer;