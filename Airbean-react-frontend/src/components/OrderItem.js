function orderItem({ order1, order2 }) {
  return (
    <div>
      <li className="order1-list"> OrderNumber: {order1} </li>
      <li className="order2-list">OrderTime: {order2}</li>
    </div>
  );
}

export default orderItem;
