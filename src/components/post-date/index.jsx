import React from 'react'
import EventNoteIcon from '@mui/icons-material/EventNote';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import './index.scss'

export const PostDate = ({ date, timeToRead }) => {
  return (
    <div className="post-date">
      <div className="post-date-icon"><EventNoteIcon /></div>
      {date}
      <div className="divider">·</div>
      <div className="post-read-time-icon"><MenuBookRoundedIcon /></div>
      {timeToRead} 분
    </div>
  )
}
