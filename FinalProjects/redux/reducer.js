const initialState = {
    nama: '',
    isLogin: false
}

const iniReducer = (state = initialState, action) => {
    if (action.type === "USER_INPUT") {
        return {
            ...state,
            nama: action.payload
        };
    } if (action.type === "LOGIN_SUCCESS") {
        return {
            ...state,
            isLogin: true
        }
    }
    return state
}

export default iniReducer