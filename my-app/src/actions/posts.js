import axios from 'axios'
export const FETCH_POSTS = 'FETCH_POSTS'
export const ADD_POSTS = 'ADD_POSTS'
export const DELETE_POST = 'DELETE_POST'
export const UPDATE_POSTS = 'UPDATE_POSTS'

export const fetchPosts = () => dispatch =>{
  axios.get('/api/post')
  .then(res=>dispatch({
    type:FETCH_POSTS,
    payload: res.data
  }))
  .catch(err=>{
    console.log(err);
  })
}

export const addPost = (data) => dispatch =>{
  axios.post('/api/post', data)
  .then(res=>dispatch({
    type:ADD_POSTS,
    payload: res
  }))
  .catch(err=>{
    console.log(err);
  })
}

export const updatePost = (data) => dispatch =>{
  axios.put('/api/post', data)
  .then(res=>dispatch({
    type:UPDATE_POSTS,
    payload: res
  }))
  .catch(err=>{
    console.log(err);
  })
}

export const deletePost = (id) => dispatch =>{
  console.log(id);
  axios.post('/api/deletePost', id)
  .then(res=>dispatch({
    type:DELETE_POST,
    payload: res
  }))
  .catch(err=>{
    console.log(err);
  })
}

export default null
