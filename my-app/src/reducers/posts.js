import {postState} from '../store'
import {FETCH_POSTS} from '../actions/posts'
import {ADD_POSTS} from '../actions/posts'
import {DELETE_POST} from '../actions/posts'
import {UPDATE_POSTS} from '../actions/posts'

const postsReducer = (state=postState, action)=>{
  if (action.type === FETCH_POSTS) {
    return{
      ...state,
      posts:action.payload
    }
  }
  if (action.type === DELETE_POST) {
    const posts = state.posts.filter(post=>action.payload.data._id !== post._id)
    console.log(posts);
    return{
      ...state,
      posts
    }
  }
  if (action.type === ADD_POSTS) {
    return{
      ...state,
      posts:{status: action.payload.status, message:action.payload.data.message}
    }
  }
  if (action.type === UPDATE_POSTS) {
    console.log(action.payload);
  }
  return state
}

export default postsReducer
