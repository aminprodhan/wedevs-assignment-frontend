import { all } from 'redux-saga/effects';
import AuthSaga from './auth/saga';
import ProductSaga from './product/saga';

export default function* rootSaga() {
    yield all([
        AuthSaga(),
        ProductSaga(),
    ]);
}
