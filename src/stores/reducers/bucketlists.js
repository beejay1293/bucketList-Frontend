import { BUCKETLISTS_SUCCESS, BUCKETLISTS_ERROR, LOADING, SINGLEBUCKET_SUCCEESS, CREATE_SUCCESS}  from '../constants';

const initialState = {
    bucketLists : [],
    singleBucket: {},
    bucketListItem: [],
    error: {},
    isLoading: false,
    success: ''
}

export default (state= initialState, action) => {
    switch(action.type){
        case BUCKETLISTS_SUCCESS:
        return {
            ...state,
            isLoading: false, 
            bucketLists: action.payload,
        }
        case BUCKETLISTS_ERROR:
            return {
                ...state,
                isLoading: false,
                success: ''
            }
        case LOADING:
            return {
                ...state,
                isLoading: true,
                success: ''
            }
        case SINGLEBUCKET_SUCCEESS:
            return {
                ...state,
                loading: false,
                singleBucket: action.payload,
                success: ''
            }
        case CREATE_SUCCESS:
            return {
                ...state,
                success: "bucketList created successfully",
                loading: false
            }
        default:
            return state;
    }
}