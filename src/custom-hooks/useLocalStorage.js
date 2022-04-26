import { useState, useEffect } from "react";

const getLocalStorage = (idItem, defaultValue) => JSON.parse(localStorage.getItem(idItem)) || defaultValue;
export const useLocalStorage = ([idItem, defaultValue]) => {
  const [item, setItem] = useState(() => {
    const saveInLocalStorage = getLocalStorage(idItem, defaultValue);
  });

};
