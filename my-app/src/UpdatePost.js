import React, {Component} from 'react'
import {fetchPosts, updatePost} from './actions/posts'
import {connect} from 'react-redux'

class UpdatePost extends Component {
  constructor() {
    super()
    this.state = {title:null, content:null}
  }
  UNSAFE_componentWillMount(){
    this.props.fetchPosts()
  }

  handleChange = (e)=>{
    this.setState({
      [e.target.id]:e.target.value
    })
  }
  handleSubmit = (e)=>{
    e.preventDefault()
    const data = {...this.state, id:this.props.match.params.id}
    this.props.updatePost(data)
  }
  render(){
    const posts = this.props.posts.map((post, key)=>{
      const {title, content} = post
      if (post._id === this.props.match.params.id) {
        return(
          <form onSubmit={this.handleSubmit} key={key}>
            <div>
              <label htmlFor='title'>Title</label>
              <input id='title' value={title} type='text' onChange={this.handleChange} />
            </div>
            <div>
              <label htmlFor='content'>Content</label>
              <textarea id='content' value={content} onChange={this.handleChange}></textarea>
            </div>
            <button type='submit'>Edit Post</button>
          </form>
        )
      }
      return null
    })
    return(
      <div>
        {posts}
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return{
    posts:state.postsReducer.posts
  }
}

export default connect(mapStateToProps, {fetchPosts, updatePost})(UpdatePost)
