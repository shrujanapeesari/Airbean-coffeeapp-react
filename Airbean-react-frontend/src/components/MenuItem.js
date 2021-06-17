function menuItem({ tasks, task1, task2, task3 }) {
  return (
    <div>
      <section className="menutask">
      <h2 className="menutask1">{tasks}</h2>

      <h2 className="menutask3">{task1}................</h2>
      <h2 id="pricetag">{task3} kr</h2>
      </section>
      
      <p>{task2}</p>
      
    </div>
  );
}

export default menuItem;
