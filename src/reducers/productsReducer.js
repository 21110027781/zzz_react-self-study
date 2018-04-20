import * as types from './../constants/ActionTypes';
import _ from 'lodash';
let initialState = [];

const productsReducer = (state = initialState, action) => {
    var index = -1;

    switch (action.type) {
        case types.FETCH_PRODUCTS:
            state = action.products;
            return [...state];
        case types.DELETE_PRODUCT:
            index = _.findIndex(state, function(o) { return o.id === action.id; })
            state.splice(index, 1);
            return [...state];
        case types.ADD_PRODUCT:
            return [...state];
        case types.UPDATE_PRODUCT:
            index = _.findIndex(state, function(o){return o.id === action.product.id});
            state[index] = action.product;
            return [...state];
        case types.SEARCH_PRODUCT:
            state = action.products;
            return [...state];
        default:
            return state;
    }
}

export default productsReducer;