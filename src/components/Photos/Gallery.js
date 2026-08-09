import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import styled from "styled-components";

export const Gallery = () => {
  const data = useStaticQuery(graphql`
    query GalleryImages {
      allFile(
        filter: { sourceInstanceName: { eq: "gallery" } }
        sort: { fields: name, order: ASC }
      ) {
        nodes {
          id
          name
          publicURL
          childImageSharp {
            fluid(maxWidth: 1140) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `);
  const [selectedImage, setSelectedImage] = React.useState(null);
  const images = data.allFile.nodes.filter(image => image.childImageSharp);

  React.useEffect(() => {
    if (!selectedImage) {
      return undefined;
    }

    const closeOnEscape = event => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [selectedImage]);

  return (
    <>
      <Grid aria-label="Photo gallery">
        {images.map(image => (
          <ImageButton
            key={image.id}
            type="button"
            onClick={() => setSelectedImage(image)}
            aria-label={`Open ${image.name}`}
          >
            <Img alt={image.name} fluid={image.childImageSharp.fluid} />
          </ImageButton>
        ))}
      </Grid>
      {selectedImage && (
        <Overlay onClick={() => setSelectedImage(null)}>
          <Dialog
            aria-label={`Enlarged ${selectedImage.name}`}
            aria-modal="true"
            role="dialog"
            onClick={event => event.stopPropagation()}
          >
            <CloseButton type="button" onClick={() => setSelectedImage(null)}>
              Close
            </CloseButton>
            <FullImage alt={selectedImage.name} src={selectedImage.publicURL} />
          </Dialog>
        </Overlay>
      )}
    </>
  );
};

const Grid = styled.div`
  display: grid;
  gap: 0.5rem;
  grid-auto-rows: 16rem;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));

  @media (min-width: 1280px) {
    grid-auto-rows: 24rem;
    grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
  }
`;

const ImageButton = styled.button`
  background: none;
  border: 0;
  cursor: pointer;
  overflow: hidden;
  padding: 0;
  position: relative;

  &:focus-visible {
    outline: 3px solid #6392ec;
    outline-offset: 2px;
  }

  > div {
    height: 100%;
  }

  img {
    transition: filter 0.25s, transform 0.5s;
  }

  &:hover img {
    filter: saturate(1.3);
    transform: scale(1.1);
  }
`;

const Overlay = styled.div`
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  inset: 0;
  justify-content: center;
  padding: 2rem;
  position: fixed;
  z-index: 10;
`;

const Dialog = styled.div`
  max-height: 100%;
  max-width: 100%;
  position: relative;
`;

const CloseButton = styled.button`
  background: #fff;
  border: 0;
  border-radius: 2px;
  cursor: pointer;
  font-weight: bold;
  padding: 0.5rem 0.75rem;
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  z-index: 1;
`;

const FullImage = styled.img`
  display: block;
  max-height: calc(100vh - 4rem);
  max-width: calc(100vw - 4rem);
  object-fit: contain;
`;
