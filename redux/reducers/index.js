
const initialState = {
    username: '',
    total_score: null

}

export default function reducers(state = initialState, action) {
    switch (action.type) {
        case 'SET_USERNAME':
            console.log(action.payload, '==> payload setToken');
            return { ...state, username:action.payload}
        case 'SET_SCORE':
            console.log(action.payload, '==> payload SCORE');
            return { ...state, total_score:action.payload}
        default:
        return state;
    }
}