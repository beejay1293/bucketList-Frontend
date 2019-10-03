import { BUCKETLISTS_SUCCESS, BUCKETLISTS_ERROR, LOADING, SINGLEBUCKET_SUCCEESS, CREATE_SUCCESS, SINGLELIST_SUCCESS,  VIEWLIST_ERROR}  from '../constants';

const initialState = {
    bucketLists : [],
    singleBucket: {},
    bucketListItems: [],
    error: {},
    isLoading: false,
    success: '',
    pages: ''
}

export default (state= initialState, action) => {
    switch(action.type){
        case BUCKETLISTS_SUCCESS:
        return {
            ...state,
            isLoading: false, 
            bucketLists: action.payload.data,
            pages: action.payload.pages
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
        case SINGLELIST_SUCCESS:
            return {
                ...state,
                bucketListItems: action.payload,
                loading: false
            }
        case  VIEWLIST_ERROR:
            return {
                ...state,
                bucketListItems: [],
                loading: false
            }
        default:
            return state;
    }
}