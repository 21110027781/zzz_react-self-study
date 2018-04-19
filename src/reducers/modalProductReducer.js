import * as types from './../constants/ActionTypes';

let initialState = false;

const modalProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.OPEN_MODAL_EDIT_PRODUCT:
            state = !0;
            return state;
        case types.CLOSE_MODAL_EDIT_PRODUCT:
            state = false;
            return state;
        default:
            return state;
    }
}
export default modalProductReducer;