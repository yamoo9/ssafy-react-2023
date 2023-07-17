const { localStorage: storage } = globalThis;

function usePersist(key) {
  const read = () => {
    return JSON.parse(storage.getItem(key));
  };

  const write = (newData) => {
    storage.setItem(key, JSON.stringify(newData));
  };

  const remove = () => {
    storage.removeItem(key);
  };

  return {
    read,
    write,
    remove,
  };
}

export default usePersist;
