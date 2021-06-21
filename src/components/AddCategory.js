import React, { useState } from 'react';

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('');

  const hanldeInput = e => {
    setInputValue(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategories(cats => [inputValue, ...cats]);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Category</h2>
      <input
        onChange={hanldeInput}
        placeholder="Type the gif you want to search for"
        value={inputValue}
        type="text"
      />
    </form>
  );
};
