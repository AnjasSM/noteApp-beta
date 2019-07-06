const initialState = {
    notes: [],
    isLoading: false,
    isFinish: false,
    isError: false,
}

export default notes = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_NOTE_PENDING':
        case 'ADD_NOTE_PENDING':
        case 'UPDATE_NOTE_PENDING':
        case 'DELETE_NOTE_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'FETCH_NOTE_REJECTED':
        case 'ADD_NOTE_REJECTED':
        case 'UPDATE_NOTE_REJECTED':
        case 'DELETE_NOTE_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case 'FETCH_NOTE_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFinish: true,
                data: action.payload.data.data
            }
        
        case 'ADD_NOTE_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFinish: true,
                notes: [...state.notes, action.payload.data]
            }
        default:
            return state;
    }
}