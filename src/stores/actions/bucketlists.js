import { toast } from 'react-toastify'
import { BUCKETLISTS_SUCCESS, BUCKETLISTS_ERROR, LOADING, SINGLEBUCKET_SUCCEESS, CREATE_SUCCESS, SINGLELIST_SUCCESS}  from '../constants';
import { getBucketLists, getSingleBucketList, createBucketList, editBucketList, deleteBucketList, addToBucketLists, getListItems} from '../utils/bucketlistsAPI';

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

export const create_success = () => ({
  type: CREATE_SUCCESS,
})

export const singleBucket_success = (data) => ({
  type: SINGLEBUCKET_SUCCEESS,
  payload: data
}) 

export const singleBucketList_success = (data) => ({
  type: SINGLELIST_SUCCESS,
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
     toast.error("try again, an error occured")
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
    dispatch(loading())
    const response = await deleteBucketList(id)
    console.log(response);
    
    toast.success(response.data.messages)
  } catch (error) {
    console.log(error);
    toast.error("error occured, please try again")
  }
}

export const createBucket  = (details) => async(dispatch) => {
  try {
    dispatch(loading());
    const response = await createBucketList(details);
    toast.success("BucketList successfully created")
    dispatch(create_success())
    console.log(response)
  } catch (error) {
    const err = error.response;
    console.log(err);
    toast.error("an error occured, try again") 
  }
}

export const updateSingleBucket = (id, details) => async(dispatch) => {
try {
  dispatch(loading());
  const response = await editBucketList(id, details);
  console.log(response);
  
  toast.success('succesfully updated')
} catch (error) {
  console.log(error);
  
  toast.error("sorry, an error occured")
}
}

export const addToSingleBucketList = (id, details) => async(dispatch) => {
  try {
    const response = await addToBucketLists(id, details);
    console.log(response);
    toast.success("Item successfully added to bucketList")
    
  } catch (error) {
    console.log(error);
    toast.error("Sorry, an error occured");
    
  }
}

export const viewBucketList = (id) => async(dispatch) => {
  try {
    dispatch(loading())
    const response = await getListItems(id);
    dispatch(singleBucketList_success(response.data.data))
    console.log(response);
  } catch (error) {
    console.log(error);
    toast.error('Sorry, an error occured')
  }
}