function ProductRow({ name, price, stock }) {
  return (
    <>
      <tr>
        <td style={{ color: stock }}>{name}</td>
        <td>{price}</td>
      </tr>
    </>
  );
}

export default ProductRow;
