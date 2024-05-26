import { useState } from "react";
import ProductCategory from "./productCategory";
import ProductRow from "./productRow";
import SearchNotFound from "./searchNotFound";

function ProductTable({ products, searchText, inStock }) {
  const productList = [];
  let previousCategory = null;

  products.forEach((product) => {
    // return empty list if searchText is not present in product names
    if (product.name.toLowerCase().indexOf(searchText.toLowerCase()) === -1) {
      return;
    }
    // remove product from product list if stocked is false
    if (inStock && !product.stocked) {
      return;
    }

    if (previousCategory !== product.category) {
      productList.push(
        <ProductCategory key={product.category} category={product.category} />
      );
    }

    productList.push(
      <ProductRow
        key={product.name}
        name={product.name}
        price={product.price}
        stock={!product.stocked ? "red" : "green"}
      />
    );

    previousCategory = product.category;
  });

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{productList.length ? productList : <SearchNotFound />}</tbody>
      </table>
    </>
  );
}

export default ProductTable;
