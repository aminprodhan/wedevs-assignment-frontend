import { all, put, takeEvery, call } from 'redux-saga/effects';
import { polyfill } from 'es6-promise';
import ProductRepository from '~/repositories/ProductRepository';
import {
    actionTypes,
    getProductsError,
    getProductsSuccess,
    getSingleProductsSuccess,
} from './action';
polyfill();

function* getProducts({ payload }) {
    try {
        const data = yield call(ProductRepository.get, payload);
        yield put(getProductsSuccess(data));
    } catch (err) {
        yield put(getProductsError(err));
    }
}
function* getProductById({ id }) {
    try {
        const product = yield call(ProductRepository.getProductsById, id);
        yield put(getSingleProductsSuccess(product));
    } catch (err) {
        yield put(getProductsError(err));
    }
}

export default function* rootSaga() {
    yield all([takeEvery(actionTypes.GET_PRODUCTS, getProducts)]);
    yield all([takeEvery(actionTypes.GET_PRODUCT_BY_ID, getProductById)]);
}
