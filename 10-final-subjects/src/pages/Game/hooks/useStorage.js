const { localStorage: storage } = globalThis;

function useStorage(key) {
  const read = () => {
    return JSON.parse(storage.getItem(key));
  };

  const save = (newData) => {
    storage.setItem(key, JSON.stringify(newData));
  };

  const remove = () => {
    storage.removeItem(key);
  };

  return { read, save, remove };
}

export default useStorage;
