import { actionTypes } from './action';

export const initialState = {
    allProducts: null,
    singleProduct: null,
    error: false,
    productsLoading: true,
    productLoading: true,
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                ...{ allProducts: action.data, productsLoading: false },
            };
        case actionTypes.GET_PRODUCT_BY_ID_SUCCESS:
            return {
                ...state,
                ...{ singleProduct: action.data, productLoading: false },
            };
        case actionTypes.GET_PRODUCTS_ERROR:
            return {
                ...state,
                ...{ error: action.error },
            };
        default:
            return state;
    }
}

export default reducer;
