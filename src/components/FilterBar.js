export const FilterBar = (props) => {
  const listOptions = () => {
    const allOptions = props.optionsFilter.map(option =>
      <option key={option} value={props.optionsFilter[option]}>{option}</option>
    );
    return allOptions;
  };
  return (
    <div>
      {props.children}
      <button onClick={props.onClick}>{props.sortOptions.isAscending ? "Ascendente" : "Descendente"}</button>
      <select value={props.sortOptions.optionActive} name="Order" onChange={(e) => props.onChange(e.target.value)}>
        {listOptions()}
      </select>
      <hr />
    </div>
  );
};
