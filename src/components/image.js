import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export const Image = props => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                gatsbyImageData(width: 1140, layout: CONSTRAINED)
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(props.filename);
      });

      if (!image) {
        return null;
      }

      const imageData = getImage(image.node);

      if (!imageData) {
        return null;
      }

      return <GatsbyImage alt={props.alt} image={imageData} />;
    }}
  />
);
