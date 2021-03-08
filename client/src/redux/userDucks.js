import axios from 'axios'

//CONST
const initialData = {
    array : []
}

//TYPES
const GET_USER_SUCCESS = "GET_USER_SUCCESS"


//REDUCEER
export default function userReducer(state = initialData , action){
    switch (action.type) {
        case GET_USER_SUCCESS:
            return  {...state, array: action.payload}
        default:
            return state
    }
}

//ACTIONS
export const getUserAction = () => async (dispatch, getState) => {
    try {
        const res = await axios.get('http://localhost:3005/users/get/users')
        dispatch({
            type: GET_USER_SUCCESS,
            payload : res.data
        })
    } catch (error) {
        console.log(error)
    }
}
