import { useState } from 'react';

function useReactImage() {
  const [isShowReactImage, setIsShowReactIamge] = useState(true);

  const toggleReactImage = () => {
    setIsShowReactIamge((visibleState) => !visibleState);
  };

  return { isShowReactImage, toggleReactImage };
}

export default useReactImage;
