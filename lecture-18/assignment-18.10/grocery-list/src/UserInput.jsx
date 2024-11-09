import { useState } from 'react';

const UserInput = ({ addItem }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddClick = () => {
    addItem(inputValue);
    setInputValue('');
  };

  const handleKeyPress = (e) => {
    // "Submit on enter"
    if (e.key === 'Enter') {
      addItem(inputValue);
      setInputValue('');
    }
  };

  return (
    <>
      <input type="text" value={inputValue} onChange={handleChange} onKeyDown={handleKeyPress} />
      <input type="button" onClick={handleAddClick} value="Add" />
    </>
  );
};

export default UserInput;
