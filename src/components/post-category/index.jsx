import React from 'react'
import { Link } from 'gatsby'

import './index.scss'

export const PostCategory = ({ category }) => {
    return <div className="post-category-wrapper">
        <div className="post-category">
            <Link to={`/category?category=${category}`} className="link">
                {category}
            </Link>

        </div>
    </div>
}
