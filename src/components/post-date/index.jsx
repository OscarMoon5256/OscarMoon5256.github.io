import React from 'react'
import EventNoteIcon from '@mui/icons-material/EventNote';

import './index.scss'

export const PostDate = ({ date }) => {
  return <p className="post-date">
    <div className="post-date-icon"><EventNoteIcon /></div>
    {date}
  </p>
}
