import { all, put, takeEvery } from 'redux-saga/effects';
import {notification } from 'antd';
import { actionTypes, loginSuccess, logOutSuccess,loginInfo } from './action';

const modalSuccess = type => {
    notification[type]({
        message: 'Wellcome back',
        description: 'You are login successful!',
    });
};

const modalWarning = type => {
    notification[type]({
        message: 'Good bye!',
        description: 'Your account has been logged out!',
    });
};

function* loginSaga(payload) {
    try {
        yield put(loginSuccess(payload));
        modalSuccess('success');
    } catch (err) {
        console.log(err);
    }
}

function* loginInfoSaga() {
    try {
        yield put(loginInfo());
        modalSuccess('success');
    } catch (err) {
        console.log(err);
    }
}

function* logOutSaga() {
    try {
        yield put(logOutSuccess());
        modalWarning('warning');
    } catch (err) {
        console.log(err);
    }
}

export default function* rootSaga() {
    yield all([takeEvery(actionTypes.LOGIN_REQUEST, loginSaga)]);
    yield all([takeEvery(actionTypes.LOGOUT, logOutSaga)]);
    yield all([takeEvery(actionTypes.LOGIN_INFO, loginInfoSaga)]);
}
