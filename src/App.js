import React from 'react';
import './App.css';
import UserPosts from './components/user-posts/user-posts.component';
import UsersList from './components/users-list/users-list.component';

function App() {
  return (
    <div className="App">
      <UserPosts name='Test name' email='test@gmail.com' sourceOfData='https://jsonplaceholder.typicode.com/posts'/>
      <br/><br/><br/><br/>
      <UsersList sourceOfData='https://jsonplaceholder.typicode.com/users'/>
    </div>
  );
}
export default App;
