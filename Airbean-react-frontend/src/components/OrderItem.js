function orderItem({ order1, order2, order3 }) {
  return (
    <div className="grid-container">
      <span id="orderitem1">{order1}</span>
      <span id="orderitem2">{order2}</span>
      <span id="orderitem3">{order3}</span>
    </div>
  );
}

export default orderItem;
