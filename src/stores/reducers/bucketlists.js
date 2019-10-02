import { BUCKETLISTS_SUCCESS, BUCKETLISTS_ERROR, LOADING, SINGLEBUCKET_SUCCEESS}  from '../constants';

const initialState = {
    bucketLists : [],
    singleBucket: {},
    bucketListItem: [],
    error: {},
    isLoading: false
}

export default (state= initialState, action) => {
    switch(action.type){
        case BUCKETLISTS_SUCCESS:
        return {
            ...state,
            isLoading: false, 
            bucketLists: action.payload
        }
        case BUCKETLISTS_ERROR:
            return {
                ...state,
                isLoading: false
            }
        case LOADING:
            return {
                ...state,
                isLoading: true
            }
        case SINGLEBUCKET_SUCCEESS:
            return {
                ...state,
                loading: false,
                singleBucket: action.payload
            }
        default:
            return state;
    }
}