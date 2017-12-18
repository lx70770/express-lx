const CONFIRM_INFO = 'CONFIRM_INFO';
const SUBMIT_INFO = 'SUBMIT_INFO';

const initState = {
    building: '',
    room: '',
    phoneNumber: '',
    goodsNumber: '',
    arriveTime: ''
};

//reducer
export function userinfo(state = initState, action) {
    switch (action.type) {
        case CONFIRM_INFO:
            return {...action.payload};
        case SUBMIT_INFO:
            return {...action.payload};
        default:
            return state;
    }
}

export function confirmSuccess(data) {
    return {type: CONFIRM_INFO, payload: data};
}

export function submitSuccess(data) {
    return {type: SUBMIT_INFO, payload: data};
}

