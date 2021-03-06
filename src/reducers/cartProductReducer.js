import * as types from './../constants/ActionTypes';
import _ from 'lodash';
let cartData = JSON.parse(localStorage.getItem('cart'));
let initialState = cartData ? cartData : [];

const cartProductReducer = (state = initialState, action) => {
    let { product, quantity } = action;
    let index = -1;
    switch (action.type) {
        case types.ADD_TO_CART:
            index = _.findIndex(state, function (o) { return o.product.id === product.id; });
            if (index !== -1) {
                state[index].quantity = state[index].quantity + quantity;
            } else {
                state.push({
                    product,
                    quantity
                })
            }
            localStorage.setItem('cart', JSON.stringify(state))
            return [...state];
        case types.DELETE_PRODUCTS_IN_CART:
            index = _.findIndex(state, function (o) { return o.product.id === product.id; });
            if (index !== -1) {
                state.splice(index, 1);
                localStorage.setItem('cart', JSON.stringify(state))
            }
            return [...state];
        case types.UPDATE_PRODUCTS_IN_CART:
            
            index = _.findIndex(state, function (o) { return o.product.id === product.id; });
            if (index !== -1) {
                state[index].quantity = quantity;
                if(state[index].quantity <= 0){
                    // state.splice(index, 1)
                    state[index].quantity = 1;
                }
                localStorage.setItem('cart', JSON.stringify(state))
            }
            return [...state];
        default:
            return [...state];
    }
}

export default cartProductReducer;