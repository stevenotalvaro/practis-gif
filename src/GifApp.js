import React, { useState } from 'react';

export default function GifApp() {
  const [categories, setCategories] = useState('Memes');
  return (
    <>
      <h1>Gif App</h1>
      <AddCategory setCategories={setCategories} />
      <ol>
        {categories.map(cat => {
          <GifContainer key={cat} categories={cat} />;
        })}
      </ol>
    </>
  );
}
