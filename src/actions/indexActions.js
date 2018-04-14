import * as Types from './../constants/ActionTypes';
import callApi from './../utils/apiCaller';

export const actFetchProductsRequest = () => {
    return (dispatch) => {
        return callApi('products', 'GET', null).then(res => {
            dispatch(actFetchProduct(res.data));
        })
    }
}

export const actFetchProduct = (products) => {
    return {
        type: Types.FETCH_PRODUCTS,
        products
    }
}