import * as Types from './../constants/ActionTypes';
import callApi from './../utils/apiCaller';

export const actFetchProductsRequest = (page = 1, limit = 5) => {
    return (dispatch) => {
        return callApi(`products?page=${page}&limit=${limit}`, 'GET', null).then(res => {
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

/*============== */

export const actDeleteProductRequest = (id) => {
    return (dispatch) => {
        return callApi(`products/${id}`, 'DELETE', null).then(res => {
            dispatch(actDeleteProduct(id));
        })
    }
}

export const actDeleteProduct = (id) => {
    return {
        type: Types.DELETE_PRODUCT,
        id
    }
}

/* ============= */
export const pagingTask = (optionPaging) => {
    return {
        type: Types.PAGING_PRODUCT, // giá trị bên file constants
        optionPaging
    }
}