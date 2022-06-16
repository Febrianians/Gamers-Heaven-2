
const initialState = {
    username: '',
    totalScore: null

}

export default function reducers(state = initialState, action) {
    switch (action.type) {
        case 'SET_USERNAME':
            console.log(action.payload, '==> payload setToken');
            return { ...state, username:action.payload}
        case 'SET_SCORE':
            console.log(action.payload, '==> payload SCORE');
            return { ...state, totalScore:action.payload}
        default:
        return state;
    }
}