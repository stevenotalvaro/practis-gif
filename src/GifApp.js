import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifContainter } from './components/GifContainter';
export default function GifApp() {
  const [categories, setCategories] = useState(['Memes']);
  return (
    <>
      <h1>Gif App</h1>
      <AddCategory setCategories={setCategories} />
      <ol>
        {categories.map(category => (
          <GifContainter key={category} category={category} />
        ))}
      </ol>
    </>
  );
}
