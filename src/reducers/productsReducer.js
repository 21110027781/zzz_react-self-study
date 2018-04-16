import * as Types from './../constants/ActionTypes';
import _ from 'lodash';
let initialState = [];

const productsReducer = (state = initialState, action) => {
    var index = -1;

    switch (action.type) {
        case Types.FETCH_PRODUCTS:
            state = action.products;
            return [...state];
        case Types.DELETE_PRODUCT:
            index = _.findIndex(state, function(o) { return o.id === action.id; })
            state.splice(index, 1);
            return [...state];
        default:
            return state;
    }
}

export default productsReducer;