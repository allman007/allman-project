import React from 'react';
import Posts from './Posts'
import AddPost from './AddPost'
import UpdatePost from './UpdatePost'
import Home from './Home'
import {Switch, Route, Link} from 'react-router-dom'

function App() {
  return (
    <div>
     <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/posts'>Posts</Link></li>
      <li><Link to='/addPost'>Add Post</Link></li>
     </ul>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/posts' component={Posts} />
        <Route path='/addPost' component={AddPost} />
        <Route path='/updatePost/:id' component={UpdatePost} />
      </Switch>
    </div>
  );
}

export default App;
