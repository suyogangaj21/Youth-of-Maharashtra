import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

// Keyframe animation for zoom-in effect
const zoomIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8); /* Start with a smaller size */
  }
  to {
    opacity: 1;
    transform: scale(1); /* End with the original size */
  }
`;

// Styled component for the image container
const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

// Styled component for the images with zoom-in animation and glassy hover effect
const GalleryImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 1rem; /* Optional: adds space between images */
  animation: ${zoomIn} 0.5s ease-in-out; /* Apply zoom-in animation */
  transition: transform 0.3s ease, filter 0.3s ease; /* Smooth transitions for hover effects */
  border-radius: 10px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);

  &:hover {
    filter: brightness(0.8); /* Darken the image on hover */
  }
`;

const GalleryTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
`;

interface ImageGalleryProps {
  title?: string;
  images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ title, images }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Trigger isLoaded state once all images are loaded
  useEffect(() => {
    const imageLoad = () => {
      setIsLoaded(true);
    };

    const imageElements = images.map((imageSrc) => {
      const image = new Image();
      image.src = imageSrc;
      image.onload = imageLoad;
      return image;
    });

    return () => {
      imageElements.forEach((image) => {
        image.onload = null;
      });
    };
  }, [images]);

  return (
    <GalleryContainer>
      {title && <GalleryTitle>{title}</GalleryTitle>}
      {isLoaded &&
        images.map((image, index) => (
          <GalleryImage
            key={index}
            src={image}
            alt={`Gallery image ${index + 1}`}
          />
        ))}
    </GalleryContainer>
  );
};

export default ImageGallery;
