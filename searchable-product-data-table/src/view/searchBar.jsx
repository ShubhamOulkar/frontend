function SearchBar({ searchText, inStock, setSearchText, setInStock }) {
  return (
    <>
      <form>
        <input
          name="search"
          type="taxt"
          placeholder="search...."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <label>
          <input
            name="instock filter"
            type="checkbox"
            checked={inStock}
            onChange={(e) => setInStock(e.target.checked)}
          />
          &nbsp; Only show products in stock{" "}
        </label>
      </form>
    </>
  );
}

export default SearchBar;
