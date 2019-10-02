import { toast } from 'react-toastify'
import { BUCKETLISTS_SUCCESS, BUCKETLISTS_ERROR, LOADING, SINGLEBUCKET_SUCCEESS}  from '../constants';
import { getBucketLists, getSingleBucketList, createBucketList, editBucketList, deleteBucketList} from '../utils/bucketlistsAPI';

export const bucketlist_success = (data) => ({
  type: BUCKETLISTS_SUCCESS,
  payload: data
})

export const bucketlist_error = (error) => ({
  type: BUCKETLISTS_ERROR,
  payload: error,
})

export const loading = () => ({
  type: LOADING,
})

export const singleBucket_success = (data) => ({
  type: SINGLEBUCKET_SUCCEESS,
  payload: data
})
export const bucketList = () => async (dispatch) => {
  try {
    dispatch(loading());
    const response = await getBucketLists()
    console.log(response);
    
    dispatch(bucketlist_success(response.data.data))
    
  } catch (error) {
     const err = error.response;
     console.log(err);
     
     dispatch(bucketlist_error());
     toast.error(err.data.error)
  }
}

export const getSingleBucket = (id) => async (dispatch) => {
  try {
    dispatch(loading());
    const response = await getSingleBucketList(id);
    console.log(response)

    dispatch()
    
  } catch (error) {
    const err = error.response
    console.log(err)
    
  }
}

export const deleteSingleBucket = (id) => async(dispatch) => {
  try {
    
  } catch (error) {
    
  }
}

export const createBucket  = (details) => async(dispatch) => {
  try {
    
  } catch (error) {
    
  }
}

export const updateSingleBucket = (id) => async(dispatch) => {
try {
  
} catch (error) {
  
}
}