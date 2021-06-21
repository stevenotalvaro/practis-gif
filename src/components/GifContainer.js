import React, { useEffect, useState } from 'react';
import { GifItem } from './GifItem';

export const GifContainer = ({ category }) => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    getGifs();
  }, []);

  const getGifs = async () => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
      category
    )}+Man&limit=12&api_key=OEBGfCKkosTze8UazFaT0OliOEwMWSmZ`;

    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map(img => {
      return {
        id: img.id,
        url: img.images?.downsized_medium.url,
      };
    });

    setImages(gifs);
  };

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
