const initialState = {
    data: [],
    isLoading: false,
    isFinish: false,
    isError: false,
}

export default categories = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CATEGORIES_PENDING':
        case 'ADD_CATEGORY_PENDING':
        case 'DELETE_CATEGORY_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'GET_CATEGORIES_REJECTED':
        case 'ADD_CATEGORY_REJECTED':
        case 'DELETE_CATEGORY_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case 'GET_CATEGORIES_FULFILLED':
            return {
                data: action.payload.data.data
            }
        case 'ADD_CATEGORY_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFinish: true,
                categories: [...state.categories, action.payload.data]
            }
        
        default:
            return state;
    }
}