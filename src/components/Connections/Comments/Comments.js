import React from 'react'
import "./Comments.css"
import Comment from './Comment/Comment'
import Commentform from './CommentForm/Commentform'
export default function Comments() {
  return (
    <div className='comments'>
      <h4 className='commentCounter'>نظرات(2)</h4>
      <ul className='commentList'>
        <li>
          <Comment />
          <ul className='commentChild'>
            <li>
              <Comment />
            </li>
            <li>
              <Comment />
            </li>
          </ul>
        </li>
        <li>
          <Comment />
        </li>

      </ul>
      <div className="form"><Commentform /></div>
    </div>
  )
}
