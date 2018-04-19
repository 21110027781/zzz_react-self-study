import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import pagingProductReducer from './pagingProductReducer';
import updateProductReducer from './updateProductReducer';
import modalProductReducer from './modalProductReducer';

const appReducers = combineReducers({
    productsReducer,
    pagingProductReducer,
    updateProductReducer,
    modalProductReducer
})

export default appReducers;