import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifContainer } from './components/GifContainer';
export default function GifApp() {
  const [categories, setCategories] = useState(['Memes']);
  return (
    <>
      <h1>Gif App</h1>
      <AddCategory setCategories={setCategories} />
      <ol>
        {categories.map(category => (
          <GifContainer key={category} category={category} />
        ))}
      </ol>
    </>
  );
}
