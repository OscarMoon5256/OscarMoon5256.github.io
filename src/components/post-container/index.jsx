import React from 'react'
import { PostSummary } from '../post-summary'
import { TableOfContents } from '../table-of-contents'

export const PostContainer = ({ html, toc, summary }) => (
  <div>
    <PostSummary summary={summary} />
    <TableOfContents toc={toc} />
    <div dangerouslySetInnerHTML={{ __html: html }} />
  </div>
)
