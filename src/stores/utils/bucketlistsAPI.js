import axios from 'axios';

const baseUrl = 'https://bucketlists-app.herokuapp.com/api/v1/bucketlists'

  const userToken = localStorage.getItem('jwToken'); 


export const getBucketLists = (page=1) => axios(`${baseUrl}?page=${page}&limit=8`, {
    method: 'GET',
    headers: {
        accept: 'application/json',
        'Content-type': 'application/json; charset=UTF-8',
        token: localStorage.getItem('jwToken'),
      },
})

export const getSingleBucketList = (id) => axios(`${baseUrl}/${id}`, {
    method: 'GET',
    headers: {
        accept: 'application/json',
        'Content-type': 'application/json; charset=UTF-8',
        token: userToken,
      },

})

export const createBucketList = (details) => axios(`${baseUrl}`, {
    method: 'POST',
    data: details,
    headers: {
        accept: 'application/json',
        'Content-type': 'application/json; charset=UTF-8',
        token: userToken,
      },
    
})

export const editBucketList = (id, details) => axios(`${baseUrl}/${id}`, {
    method: 'PUT',
    data: details,
    headers: {
        accept: 'application/json',
        'Content-type': 'application/json; charset=UTF-8',
        token: userToken,
      },
    
})

export const deleteBucketList = (id) => axios(`${baseUrl}/${id}`, {
    method: 'DELETE',
    headers: {
        accept: 'application/json',
        'Content-type': 'application/json; charset=UTF-8',
        token: userToken,
      },
})