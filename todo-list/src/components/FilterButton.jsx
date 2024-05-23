function FilterButton({ name, handleFilter, active }) {
  return (
    <button
      type="button"
      className="btn toggle-btn"
      aria-pressed={active}
      onClick={() => {
        handleFilter(name);
      }}
    >
      <span className="visually-hidden">Show </span>
      <span>{name}</span>
      <span className="visually-hidden"> tasks</span>
    </button>
  );
}

export default FilterButton;
