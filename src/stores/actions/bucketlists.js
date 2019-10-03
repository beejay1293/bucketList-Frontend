import { toast } from 'react-toastify'
import { BUCKETLISTS_SUCCESS, BUCKETLISTS_ERROR, LOADING, SINGLEBUCKET_SUCCEESS, CREATE_SUCCESS, SINGLELIST_SUCCESS,  VIEWLIST_ERROR}  from '../constants';
import { getBucketLists, createBucketList, editBucketList, deleteBucketList, addToBucketLists, getListItems} from '../utils/bucketlistsAPI';

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

export const viewBucketList_error = () => ({
  type: VIEWLIST_ERROR
})

export const bucketList = (page, type) => async (dispatch) => {
  try {
    dispatch(loading());
    const response = await getBucketLists(page, type)
    dispatch(bucketlist_success(response.data))
    
  } catch (error) {   
     dispatch(bucketlist_error());
     toast.error("try again, an error occured")
  }
}


export const deleteSingleBucket = (id) => async(dispatch) => {
  try {
    dispatch(loading())
    const response = await deleteBucketList(id)
    toast.success(response.data.messages)
  } catch (error) {
    toast.error("error occured, please try again")
  }
}

export const createBucket  = (details) => async(dispatch) => {
  try {
    await createBucketList(details);
    toast.success("BucketList successfully created")
    dispatch(create_success())
  } catch (error) {
    toast.error("an error occured, try again") 
  }
}

export const updateSingleBucket = (id, details) => async(dispatch) => {
try {
  await editBucketList(id, details);
  toast.success('succesfully updated')
} catch (error) {  
  toast.error("sorry, an error occured")
}
}

export const addToSingleBucketList = (id, details) => async(dispatch) => {
  try {
     await addToBucketLists(id, details);
    toast.success("Item successfully added to bucketList")
  } catch (error) {
    toast.error("Sorry, an error occured");
  }
}

export const viewBucketList = (id) => async(dispatch) => {
  try {
    dispatch(loading())
    const response = await getListItems(id);
    dispatch(singleBucketList_success(response.data.data))
  } catch (error) {
    const err = error && error.response
    if(err.data.message === "no item has been added to this bucketlist"){
     dispatch(viewBucketList_error());
      toast.error(err.data.message)
    }else {
      toast.error("an error occured, please try again")
    }  
  }
}