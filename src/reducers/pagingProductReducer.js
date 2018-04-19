import * as types from './../constants/ActionTypes';

let initialState = {
    activePage: 1,
    boundaryRange: 1,
    siblingRange: 1,
    showEllipsis: true,
    showFirstAndLastNav: true,
    showPreviousAndNextNav: true,
    totalPages: 20,
    limitItem: 5
}

const myReducer = (state = initialState, action) => {
    let iPageNguyen;
    let iPageDu;
    if(action.products){
        iPageNguyen = Math.floor(action.products.length/state.limitItem);
        iPageDu = action.products.length%state.limitItem;
        if(iPageDu !== 0){
            iPageNguyen++;
        }
    }
    switch (action.type) {
        
        case types.PAGING_PRODUCT:
            state.activePage = action.optionPaging.activePage;
            return {...state};
        case types.SET_TOTAL_ITEM:
            state.totalPages = iPageNguyen;
            return {...state};
        default:
            return state;
    }
}

export default myReducer;