export const actionTypes = {
    LOGIN_REQUEST: 'LOGIN_REQUEST',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_INFO: 'LOGIN_INFO',
    LOGOUT: 'LOGOUT',
    LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
    CHECK_AUTHORIZATION: 'CHECK_AUTHORIZATION',
};
export function getSessionUser() {
    return JSON.parse(localStorage.getItem('login')) || [];
}
export function login() {
    return { type: actionTypes.LOGIN_REQUEST };
}
export function loginInfo() {
    return { type: actionTypes.LOGIN_INFO };
}

export function loginSuccess(payload) {
    return { type: actionTypes.LOGIN_SUCCESS,payload:payload };
}

export function logOut() {
    return { type: actionTypes.LOGOUT };
}

export function logOutSuccess() {
    return { type: actionTypes.LOGOUT_SUCCESS };
}
