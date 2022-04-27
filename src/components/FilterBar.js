import { useState } from "react";
export const FilterBar = () => {
  const [isAscending, setIsAscending] = useState(false);
  const itemForFilter = {
    "Date Imported": "date_import",
    "Width": "width",
    "Height": "height",
    "Likes": "likes",
  };
  const listOptions = () => {
    const allOptions = Object.keys(itemForFilter).map(option =>
      <option key={option} value={itemForFilter[option]}>{option}</option>
    );
    return allOptions;
  };
  // TODO Input search debería ser un componente independiente entre ambas páginas.
  return (
    <div>
      <input type="text" placeholder="search" />
      <button onClick={() => setIsAscending(prev => !prev)}>{isAscending ? "Ascendente" : "Descendente"}</button>
      <select name="Order">
        {listOptions()}
      </select>
      <hr />
    </div>
  );
};
