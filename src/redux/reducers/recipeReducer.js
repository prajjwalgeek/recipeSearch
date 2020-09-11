import { GET_RECIPE, LOADING_RECIPE, ERROR_LOADING } from '../actions/types';

const initialState = {
    element: '',
    recipes: [],
    loading: false,
    error: ''
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_RECIPE:
            return {
                ...state,
                recipes: action.payload.recipes,
                loading: false,
                element: action.payload.element
            }
        case LOADING_RECIPE:
            return {
                ...state,
                loading: true
            }
        case ERROR_LOADING:
            return {
                ...state,
                recipe: [],
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}