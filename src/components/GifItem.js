import React from 'react';

export const GifItem = ({ url }) => {
  return (
    <div className="card animate__animated animate__backInLeft">
      <img src={url} alt="title" />
    </div>
  );
};
