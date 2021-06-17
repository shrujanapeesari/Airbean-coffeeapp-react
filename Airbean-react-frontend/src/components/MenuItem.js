function menuItem({ tasks, task1, task2, task3 }) {
  return (
    <div>
      <div className="menutask">
        <h2 id="inline">{tasks}</h2>
        <h2 id="inline1">{task1}..</h2>
        <h2 className="menumapping1">{task3} kr</h2>
      </div>
      <section>
        <p>{task2}</p>
      </section>
    </div>
  );
}

export default menuItem;
