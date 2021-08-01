import { actionTypes } from './action';
export const initState = {
    isLoggedIn: false,
    data:null,
};
function reducer(state = initState, action) {
    switch (action.type) {
        case actionTypes.LOGIN_SUCCESS:
            localStorage.setItem("login", JSON.stringify(action.payload));
            return {
                ...state,
                ...{ isLoggedIn: true,data:action.payload },
            };
        case actionTypes.LOGOUT_SUCCESS:
            localStorage.removeItem("login");
            return {
                ...state,
                initState,
            };    
        default:
            return state;
    }
}
export default reducer;
