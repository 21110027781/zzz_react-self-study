import * as types from './../constants/ActionTypes';

let initialState = {
    activePage: 1,
    boundaryRange: 1,
    siblingRange: 1,
    showEllipsis: true,
    showFirstAndLastNav: true,
    showPreviousAndNextNav: true,
    totalPages: 10,
    limitItem: 5
}

const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.PAGING_PRODUCT:
            state.activePage = action.optionPaging.activePage;
            return {...state};
        default:
            return state;
    }
}

export default myReducer;