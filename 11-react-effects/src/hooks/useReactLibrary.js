import { useState } from 'react';

const initialData = {
  name: 'React',
  author: '조던 워케(Jordan Walke)',
  writtenIn: 'JavaScript',
  type: 'JavaScript 라이브러리',
  license: 'MIT',
};

function useReactLibrary() {
  const [reactLibrary, setReactLibrary] = useState(initialData);

  const updateReactLibrary = (e) => {
    e.preventDefault();
    const formElement = e.target;
    const inputElementList = Array.from(formElement.querySelectorAll('input'));
    const idValues = inputElementList.map(({ id, value }) => [id, value]);
    const updateData = Object.fromEntries(idValues);

    setReactLibrary(updateData);
  };

  return { reactLibrary, updateReactLibrary };
}

export default useReactLibrary;
