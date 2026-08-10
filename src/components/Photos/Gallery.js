import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

const Gallery = () => {
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
            gatsbyImageData(width: 1140, layout: CONSTRAINED)
          }
        }
      }
    }
  `);
  const images = data.allFile.nodes
    .map(image => ({ ...image, imageData: getImage(image) }))
    .filter(image => image.imageData);
  const [selectedIndex, setSelectedIndex] = React.useState(null);
  const selectedImage =
    selectedIndex === null ? null : images[selectedIndex];

  React.useEffect(() => {
    const closeOnEscape = event => {
      if (event.key === "Escape") {
        setSelectedIndex(null);
      }
    };

    document.addEventListener("keydown", closeOnEscape);

    return () => document.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <>
      <Grid>
        {images.map((image, index) => (
          <Thumbnail
            aria-label={`Open ${image.name}`}
            key={image.id}
            onClick={() => setSelectedIndex(index)}
            type="button"
          >
            <GatsbyImage alt={image.name} image={image.imageData} />
          </Thumbnail>
        ))}
      </Grid>
      {selectedImage && (
        <ModalBackdrop
          aria-modal="true"
          onClick={() => setSelectedIndex(null)}
          role="dialog"
        >
          <ModalContent onClick={event => event.stopPropagation()}>
            <CloseButton
              aria-label="Close image"
              onClick={() => setSelectedIndex(null)}
              type="button"
            >
              ×
            </CloseButton>
            <LargeImage alt={selectedImage.name} src={selectedImage.publicURL} />
          </ModalContent>
        </ModalBackdrop>
      )}
    </>
  );
};

const Grid = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
`;

const Thumbnail = styled.button`
  background: none;
  border: 0;
  cursor: pointer;
  overflow: hidden;
  padding: 0;

  &:focus {
    outline: 3px solid #663399;
    outline-offset: 3px;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const ModalBackdrop = styled.div`
  align-items: center;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  inset: 0;
  justify-content: center;
  padding: 24px;
  position: fixed;
  z-index: 10;
`;

const ModalContent = styled.div`
  max-height: 100%;
  max-width: 100%;
  position: relative;
`;

const CloseButton = styled.button`
  background: #fff;
  border: 0;
  border-radius: 50%;
  cursor: pointer;
  font-size: 24px;
  height: 36px;
  line-height: 1;
  padding: 0;
  position: absolute;
  right: 8px;
  top: 8px;
  width: 36px;
  z-index: 1;
`;

const LargeImage = styled.img`
  display: block;
  max-height: calc(100vh - 48px);
  max-width: calc(100vw - 48px);
`;

export default Gallery;
