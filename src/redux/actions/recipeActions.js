import { GET_RECIPE, LOADING_RECIPE, ERROR_LOADING } from './types';
import axios from 'axios'

import { AppId, ApiKey } from '../../ApiKey';

export const getRecipe = (element) => async dispatch => {
    dispatch({
        type: LOADING_RECIPE
    })
    try {
        let result = null;
        if (element) {
            result = await axios.get(`https://api.edamam.com/search?q=${element}&app_id=${AppId}&app_key=${ApiKey}`)
        } else {
            result = await axios.get(`https://api.edamam.com/search?q=chicken&app_id=${AppId}&app_key=${ApiKey}`)
        }
        console.log(result.data.hits);
        dispatch({
            type: GET_RECIPE,
            payload: {
                recipes: result.data.hits,
                element: element ? element : 'Chicken'
            }
        })
    } catch (e) {

        dispatch({
            type: ERROR_LOADING,
            payload: e.message
        })
    }
}
