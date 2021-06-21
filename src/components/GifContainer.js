import React, { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getgifs';
import { GifItem } from './GifItem';

export const GifContainer = ({ category }) => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    getGifs(category).then(imgs => setImages(imgs));
  }, [category]);

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {images.map(img => (
          <GifItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
