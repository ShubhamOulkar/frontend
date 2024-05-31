import { PRODUCTS } from "./model/state";
import FilterableProductTable from "./view/filterableProductTable";
import "./App.css";

function App() {
  return (
    <>
      <h1>Searchable product data table</h1>
      <FilterableProductTable products={PRODUCTS} />
    </>
  );
}

export default App;
