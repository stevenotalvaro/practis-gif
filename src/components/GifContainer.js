import React from 'react';
import useFetchGifs from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';

export const GifContainer = ({ category }) => {
  const { data: images } = useFetchGifs(category);

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
