import * as types from './../constants/ActionTypes';
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
        type: types.FETCH_PRODUCTS,
        products
    }
}

export const actFetchAllProductsRequest = () => {
    return (dispatch) => {
        return callApi('products', 'GET', null).then(res => {
            dispatch(actAllFetchProduct(res.data));
        })
    }
}

export const actAllFetchProduct = (products) => {
    return {
        type: types.SET_TOTAL_ITEM,
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
        type: types.DELETE_PRODUCT,
        id
    }
}


/* =============== */

export const actUpdateProductRequest = (product) => {
    return dispatch => {
        return callApi(`products/${product.id}`, 'PUT', product).then(res => {
            dispatch(actUpdateProduct(res.data));
        })
    }
}
export const actUpdateProduct = (product) => {
    return {
        type: types.UPDATE_PRODUCT,
        product
    }
}

export const actAddProductRequest = (product) => {
    return dispatch => {
        return callApi('products', 'POST', product).then(res => {
            dispatch(actAddProduct(res.data));
        })
    }
}

export const actAddProduct = (product) => {
    return {
        type: types.ADD_PRODUCT,
        product
    }
}

/** ========= */
export const actSearchProductRequest = (value, page, limit) => {
    return dispatch => {
        return callApi(`products?search=${value}&page=${page}&limit=${limit}`, 'GET', null).then(res => {
            dispatch(actSearchProduct(res.data));
        })
    }
}

export const actSearchProduct = (products) => {
    return {
        type: types.SEARCH_PRODUCT,
        products
    }
}



/* ======== */
export const actGetProductRequest = (id) => {
    return dispatch => {
        return callApi(`products/${id}`, 'GET', null).then(res => {
            dispatch(actGetProduct(res.data));
        })
    }
}

export const actGetProduct = (product) => {
    return {
        type: types.GET_PRODUCTS,
        product
    }
}

export const actClearProduct = () => {
    return {
        type: types.RESET_PRODUCT,
    }
}



/* ============= */
export const pagingTask = (optionPaging) => {
    return {
        type: types.PAGING_PRODUCT, // giá trị bên file constants
        optionPaging
    }
}
/* ================ */

export const openModalEditProduct = () => {
    return {
        type: types.OPEN_MODAL_EDIT_PRODUCT
    }
}

export const closeModalEditProduct = () => {
    return {
        type: types.CLOSE_MODAL_EDIT_PRODUCT
    }
}
