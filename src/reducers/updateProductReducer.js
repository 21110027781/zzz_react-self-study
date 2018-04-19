import * as types from './../constants/ActionTypes';
var initialState = {};

const updateProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_PRODUCTS:
            return action.product;
        case types.RESET_PRODUCT:
            state = {};
            return state;
        default:
            return state;
    }
}

export default updateProductReducer;