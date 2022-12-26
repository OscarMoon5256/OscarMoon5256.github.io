import React from 'react'
import { Link } from 'gatsby'
import { GitHubIcon } from '../social-share/github-icon'
import Image from 'gatsby-image'

import './index.scss'

export const Top = ({ title }) => {
  return (
    <div className="top">
      <Link to={`/`} className="link">
        {title}
      </Link>
      <div className="top-navigator">
        <Link className="nav-item" to="/">
          Blog
        </Link>
        <Link className="nav-item" to="/tags">
          Tags
        </Link>
        <div className="socials">
          <GitHubIcon />
        </div>
      </div>
    </div>
  )
}
