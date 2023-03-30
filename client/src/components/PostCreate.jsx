import React, { useState } from 'react';
import axios from 'axios';

const PostCreate = () => {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:4000/posts', {
      title,
    });
    setTitle('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            placeholder="add a new post"
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full l px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400"
          />
        </div>
        <button className="bg-blue-500 text-white mt-3 block l px-3 py-2 rounded-md hover:bg-blue-700">Create Post</button>
      </form>
    </div>
  );
};

export default PostCreate;
