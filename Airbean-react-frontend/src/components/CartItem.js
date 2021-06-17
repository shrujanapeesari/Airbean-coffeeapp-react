function cartItem({ item, item1, item2 }) {
  return (
    <div className="totalamount">
      <li className="title">{item}.................................</li>
      <li className="count">{item2}</li>
      <li className="price">{item1} kr</li>
    </div>
  );
}

export default cartItem;
