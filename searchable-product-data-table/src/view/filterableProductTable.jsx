import { useState } from "react";
import SearchBar from "./searchBar";
import ProductTable from "./productTable";

function FilterableProductTable({ products }) {
  const [searchText, setSearchText] = useState("");
  const [inStock, setInStock] = useState(false);
  return (
    <>
      <SearchBar
        searchText={searchText}
        inStock={inStock}
        setSearchText={setSearchText}
        setInStock={setInStock}
      />
      <ProductTable
        products={products}
        searchText={searchText}
        inStock={inStock}
      />
    </>
  );
}

export default FilterableProductTable;
