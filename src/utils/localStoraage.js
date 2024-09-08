export const getLocalStorage = (key) => {
  const data = JSON.parse(localStorage.getItem(key));

  if (data !== null) {
    return data;
  }

  return {};
};

export const setLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};
