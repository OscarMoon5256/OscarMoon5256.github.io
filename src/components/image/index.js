import React, { useMemo } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

export const Image = ({ src, ...rest }) => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile(filter: { sourceInstanceName: { eq: "assets" } }) {
        edges {
          node {
            relativePath
            extension
            publicURL
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED)
            }
          }
        }
      }
    }
  `);

  const match = useMemo(() => data.images.edges.find(({ node }) => src === node.relativePath), [
    data,
    src,
  ]);

  if (!match) return null;

  const { node: { childImageSharp, publicURL, extension } = {} } = match;

  if (extension === 'svg' || !childImageSharp) {
    console.log('no', match)
    return <img src={publicURL} alt={publicURL} {...rest} />;
  }
  console.log('yes', match)

  return <GatsbyImage image={childImageSharp.gatsbyImageData} alt={publicURL} {...rest} />;
};
