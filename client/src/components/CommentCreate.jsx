import React, {useState} from 'react'
import axios from 'axios'

const CommentCreate = (props) => {
  const [comment, setComment] = useState('')
  const {postId} = props

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
      comment
    });
    setComment('')
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label className='text-xs'> New Comment</label>
          <input value={comment} onChange={e => setComment(e.target.value)} className='mt-1 block w-md l px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400' placeholder='add a new comment'/>
        </div>
        <button className="bg-blue-500 text-white mt-3 block px-2 py-3 rounded-md text-xs hover:bg-blue-700">Post Comment</button>
      </form>
    </div>
  )

}

export default CommentCreate
