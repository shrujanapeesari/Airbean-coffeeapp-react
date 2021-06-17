function cartItem({ item, item1, item2 }) {
  return (
    <li>
      <div>{item}</div>
      {item1}
      {item2}
    </li>
  );
}

export default cartItem;