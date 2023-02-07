import React from 'react'

function CommentCard(props) {
  return (
    <div className='comment'>
          <a href="/" className='avatar'>
            <img src={ props.image }alt="profile picture" />
          </a>
          <div className='content'>
            <a href="/" className='author'>{ props.name }</a>
            <div className="metadata">
              <span className="date">{ props.time }</span>
            </div>
            <div className="text">
              <p>{ props.comment }</p>
            </div>
          </div>
        </div>
  )
}

export default CommentCard

