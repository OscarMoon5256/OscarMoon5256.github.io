import React from 'react'
import { Link } from 'gatsby'
import { GitHubIcon } from '../social-share/github-icon'
import { SideMenuBar } from '../side-menu-bar'

import './index.scss'

export const Top = ({ title }) => {
  return (
    <div className="top">
      <div>
        <SideMenuBar />
      </div>
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
