import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CommentList = (props) => {
  const [comments, setComments] = useState([]);
  const { postId } = props;

  const fetchComments = async () => {
    const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`);

    setComments(res.data);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const renderedComments = comments.map((comment) => <li className='list-disc px-2 ml-8' key={comment.id}>{comment.comment}</li>);
  return <ul >{renderedComments}</ul>;
};

export default CommentList;
