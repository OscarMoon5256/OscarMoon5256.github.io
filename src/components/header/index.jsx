import React from 'react'
import { Link } from 'gatsby'
import { rhythm } from '../../utils/typography'

import './index.scss'

export const Header = ({ title, location, rootPath }) => {
  const isRoot = location.pathname === rootPath
  return (
    isRoot && (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)} 0 ${rhythm(
            3 / 4
          )}`,
        }}
      >
        <h1 className="home-header">
          <Link to={`/`} className="link">
            {title}
          </Link>
        </h1>
      </div>
    )
  )
}
