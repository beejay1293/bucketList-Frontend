import axios from 'axios';

const baseUrl = 'https://bucketlists-app.herokuapp.com/api/v1/bucketlists'

let userToken;

if (localStorage.getItem('jwToken')) {
  userToken = localStorage.getItem('jwToken'); 
}


export const getBucketLists = () => axios(`${baseUrl}`, {
    method: 'GET',
    headers: {
        accept: 'application/json',
        'Content-type': 'application/json; charset=UTF-8',
        token: userToken,
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