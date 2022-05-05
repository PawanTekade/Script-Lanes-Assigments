import "../styles.css";
export default function showData({ data: { centers } }) {
  centers = centers == null ? [] : centers.slice(0, 1);
  return (
    <div className="card-main">
      <div className="card">
        {centers.length > 0 ? <h2>Available Data</h2> : "No data to show"}
        {centers &&
          centers.map((item) => {
            return (
              <div>
                <label>Hospital Id : </label>
                <span>{item.center_id}</span>
                <br />
                <label>Hospital Name : </label>
                <span>{item.name}</span>
                <br />
                <label>Vaccine Name : </label>
                <span>{item.sessions[0].vaccine}</span>
                <br />
                <label>Available Capacity : </label>
                <span>{item.sessions[0].available_capacity}</span>
                <br />
                <label>Slots : </label>
                <span className="slots">
                  {" "}
                  {item.sessions[0].slots.reduce(
                    (prev, curr) => `${prev} ${curr.time}`,
                    ""
                  )}
                </span>
              </div>
            );
          })}
      </div>
    </div>
  );
}
