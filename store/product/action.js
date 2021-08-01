export const actionTypes = {
    GET_PRODUCTS: 'GET_PRODUCTS',
    GET_PRODUCTS_SUCCESS: 'GET_PRODUCTS_SUCCESS',
    GET_PRODUCTS_ERROR: 'GET_PRODUCTS_ERROR',
    GET_PRODUCT_BY_ID: 'GET_PRODUCT_BY_ID',
    GET_PRODUCT_BY_ID_SUCCESS: 'GET_PRODUCT_BY_ID_SUCCESS',
};

export function getProducts(payload) {
    return { type: actionTypes.GET_PRODUCTS, payload };
}

export function getProductsSuccess(data) {
    return {
        type: actionTypes.GET_PRODUCTS_SUCCESS,
        data,
    };
}
export function getSingleProductsSuccess(data) {
    return {
        type: actionTypes.GET_PRODUCT_BY_ID_SUCCESS,
        data,
    };
}

export function getProductsError(error) {
    return {
        type: actionTypes.GET_PRODUCTS_ERROR,
        error,
    };
}
export function getProductsById(id) {
    return {
        type: actionTypes.GET_PRODUCT_BY_ID,
        id,
    };
}