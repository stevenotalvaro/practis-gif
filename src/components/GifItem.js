import React from 'react';

export const GifItem = ({ url }) => {
  return (
    <div className="card">
      <img src={url} alt="title" />
    </div>
  );
};
