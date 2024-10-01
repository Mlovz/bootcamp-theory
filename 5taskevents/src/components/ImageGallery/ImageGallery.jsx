import React from "react";
import ImageItem from "../ImageItem/ImageItem";

const ImageGallery = ({ imageUrls }) => {
  return (
    <div>
      {imageUrls.map((imageUrl, index) => (
        <ImageItem key={index} imageUrl={imageUrl} />
      ))}
    </div>
  );
};
export default ImageGallery;
