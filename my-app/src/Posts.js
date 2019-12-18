import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchPosts, deletePost} from './actions/posts'
import {Link} from 'react-router-dom'

class Posts extends Component {
  UNSAFE_componentWillMount(){
    this.props.fetchPosts()
  }
  handleClick = (e)=>{
    this.props.deletePost({id:e.target.id})
  }
  render(){
    let no = 0;
    const posts = this.props.posts.map((post, key)=>{
      no++
      const {_id, title, content} = post
      return(
        <div key={key}>
          <h2>{no} <Link to={`/UpdatePost/${_id}`}>{title}</Link></h2>
          <p>{content}</p>
          <p><button onClick={this.handleClick} id={_id}>delete</button></p>
        </div>
      )
    })
    return(
      <div>
        <h2>Fetch Posts</h2>
        {posts}
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return{
    posts: state.postsReducer.posts
  }
}

export default connect(mapStateToProps, {fetchPosts, deletePost})(Posts)
