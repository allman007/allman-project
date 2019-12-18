import React, {Component} from 'react'
import {addPost} from './actions/posts'
import {connect} from 'react-redux'

class AddPost extends Component {
  constructor() {
    super()
    this.state = {title:null, content:null}
  }
  handleChange = (e)=>{
    this.setState({
      [e.target.id]:e.target.value
    })
  }
  handleSubmit = (e)=>{
    e.preventDefault()
    this.props.addPost(this.state)
  }
  render(){
    const message = (this.props.status === 200) ? this.props.message : null;
    return(
      <div>
        <h3>{message}</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor='title'>Title</label>
            <input id='title' type='text' onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor='content'>Content</label>
            <textarea id='content'  onChange={this.handleChange}></textarea>
          </div>
          <button type='submit'>Add Post</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return{
    status: state.postsReducer.posts.status,
    message: state.postsReducer.posts.message
  }
}

export default connect(mapStateToProps, {addPost})(AddPost)
