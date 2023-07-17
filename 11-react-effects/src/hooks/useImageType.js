import { useState } from 'react';

function useImageType() {
  const [imageType, setImageType] = useState('react');

  const toggleImageType = () => {
    setImageType(imageType === 'react' ? 'vite' : 'react');
  };

  return { imageType, toggleImageType };
}

export default useImageType;
