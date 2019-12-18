import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import postsReducer from './reducers/posts'

//initial posts
export const postState = {
  posts:[]
}


const reducers = combineReducers({postsReducer})
const store = createStore(reducers, applyMiddleware(thunk))

export default store
