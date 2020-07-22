import { useState } from 'react';
const useInputValue = (initialState) => {
  const [inputValue, setInputValue] = useState(initialState);

  const handleInputChange = (e) => {
    const { value } = e.target;

    setInputValue(value);
    console.log(value);
  };

  return [inputValue, handleInputChange];
};

export default useInputValue;
