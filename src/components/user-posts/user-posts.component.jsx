import React from 'react';
import WithData from '../../hoc/withData.component';

const UserPosts = ({data, name, email}) => (
    <div className="container">
        <h1>{name}</h1>
        <p>{email}</p>
        Posts of the User:
        {data.map(post => (
            <div className='userPosts' key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </div>
        ))}
    </div>
);
export default WithData(UserPosts);