import {authTypes} from './types'

const initialState = {
    auth: '',
    user: '',
    loading: false,
    error: false,
    listNfts: []
  }

export default (state = initialState, action ) => {
    switch (action.type) {
        case authTypes.DO_AUTH:
            return {
                ...initialState,
                loading: true
            }
        case authTypes.SIGNIN_SUCCESS:
            return {
                ...state,
                user: action.data,
                loading: false
            }

        case authTypes.SIGNIN_ERROR:
            console.log(action.error);
            return {
                ...initialState
            }
    
        default:
            return state;
    }
}
