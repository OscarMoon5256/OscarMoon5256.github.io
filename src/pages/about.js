import React from 'react'
import { graphql } from 'gatsby'

import { IntroduceSection } from '../components/introduce-section';
import { TimeStampSection } from '../components/timestamp-section';
import { ProjectSection } from '../components/project-section';
import { rhythm } from '../utils/typography'
import { Layout } from '../layout'
import * as Lang from '../constants'

export default ({ data, location }) => {
  const metaData = data.site.siteMetadata;
  const { about, language } = metaData;
  const { author, timestamps, projects } = about;

  const resumes = data.allMarkdownRemark.edges
  const resume = resumes
    .filter(({ node }) => node.frontmatter.lang === Lang.ENGLISH)
    .map(({ node }) => node)[0]

  return (
    <Layout location={location} title={metaData.title}>
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(28),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)} ${rhythm(1.5)} ${rhythm(
            3 / 4
          )}`,
        }}
      >
        <IntroduceSection author={author} language={language} />
        <div dangerouslySetInnerHTML={{ __html: resume.html }} />
        <TimeStampSection timestamps={timestamps} />
        <ProjectSection projects={projects} />
      </div>
    </Layout >
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { category: { eq: null } } }) {
      edges {
        node {
          id
          excerpt(pruneLength: 160)
          html
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            lang
          }
        }
      }
    }
    site {
      siteMetadata {
        title
        description
        language
        about {
          author {
            name
            bio {
              role
              description
              thumbnail
            },
            social {
              github
              linkedIn
              email
            }
          }
          timestamps {
            date
            activity
            links {
              post
              github
              demo
              googlePlay
              appStore
            }
          }
          projects {
            title
            description
            techStack
            thumbnailUrl
            links {
              post
              github
              demo
              googlePlay
              appStore
            }
          }
        }
      }
    }
  }
`;