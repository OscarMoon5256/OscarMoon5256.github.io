import React, { useEffect } from 'react'
import { graphql } from 'gatsby'

import * as Elements from '../components/elements'
import { Layout } from '../layout'
import { SEO } from '../components/seo'
import { PostTitle } from '../components/post-title'
import { PostDate } from '../components/post-date'
import { PostContainer } from '../components/post-container'
import { SocialShare } from '../components/social-share'
import { SponsorButton } from '../components/sponsor-button'
import { Bio } from '../components/bio'
import { PostHeader } from '../components/post-header'
import { PostCategory } from '../components/post-category'
import { PostNavigator } from '../components/post-navigator'
import { Disqus } from '../components/disqus'
import { TableOfContents } from '../components/table-of-contents'
import { ScrollIcom } from '../components/Scroll-Icom'
import { ScrollerIndicator } from '../components/scroll-indicator'
import { TopStickyContainer } from '../components/top-sticky-container'
import { Utterances } from '../components/utterances'
import { className } from '../constants/className'
import { rhythm } from '../utils/typography'
import * as ScrollManager from '../utils/scroll'
import * as Dom from '../utils/dom'

import '../styles/code.scss'
import 'katex/dist/katex.min.css'

export default ({ data, pageContext, location }) => {
  useEffect(() => {
    ScrollManager.init()
    return () => ScrollManager.destroy()
  }, [])

  const post = data.markdownRemark
  const metaData = data.site.siteMetadata
  const { title, comment, siteUrl, author, sponsor } = metaData
  const { disqusShortName, utterances } = comment
  const { tableOfContents, timeToRead } = post
  const { title: postTitle, date, category } = post.frontmatter

  return (
    <Layout location={location} title={title}>
      <TopStickyContainer>
        <ScrollerIndicator />
        <TableOfContents toc={tableOfContents} />
      </TopStickyContainer>

      <SEO title={postTitle} description={post.excerpt} />
      <PostHeader />
      <PostCategory category={category} />
      <PostTitle title={postTitle} />
      <PostDate date={date} timeToRead={timeToRead} />
      <ScrollIcom />
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(28),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)} ${rhythm(1)} ${rhythm(
            3 / 4
          )}`,
        }}
      >
        <PostContainer html={post.html} />
        <SocialShare title={postTitle} author={author} />
        {!!sponsor.buyMeACoffeeId && (
          <SponsorButton sponsorId={sponsor.buyMeACoffeeId} />
        )}
        <Elements.Hr />
        <Bio />
        <PostNavigator pageContext={pageContext} />
        {!!disqusShortName && (
          <Disqus
            post={post}
            shortName={disqusShortName}
            siteUrl={siteUrl}
            slug={pageContext.slug}
          />
        )}
        {!!utterances && <Utterances repo={utterances} />}
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
        siteUrl
        comment {
          disqusShortName
          utterances
        }
        sponsor {
          buyMeACoffeeId
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 280)
      html
      tableOfContents
      timeToRead
      frontmatter {
        title
        date(formatString: "YYYY. MM. DD")
        category
      }
    }
  }
`
