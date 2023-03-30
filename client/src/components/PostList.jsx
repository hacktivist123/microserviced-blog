import React, {useState, useEffect} from 'react'
import axios from 'axios'

import CommentCreate from './CommentCreate'
import CommentList from './CommentList'

const PostList = () => {
  const [posts, setPosts] = useState({})

  const fetchPosts = async () => {
    const res = await axios.get ('http://localhost:4000/posts');
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderedPosts = Object.values(posts).map(post => (
    <div className='max-w-md lg:max-w-full lg:flex rounded-md w-1/3 mb-5 px-5 py-5 border' key={post.id}>
      <div>
        <h3 className='text-3xl'>{post.title}</h3>
        <CommentList postId={post.id}/>
        <CommentCreate postId={post.id}/>
      </div>
    </div>
  ));
  return (
    <div className='flex flex-row flex-wrap justify-between'>
      {renderedPosts}
    </div>
  )
}

export default PostList
