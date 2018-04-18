import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import pagingProductReducer from './pagingProductReducer';

const appReducers = combineReducers({
    productsReducer,
    pagingProductReducer
})

export default appReducers;