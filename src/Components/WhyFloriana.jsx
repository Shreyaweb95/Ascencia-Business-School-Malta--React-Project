import "../App.css";

const points = [
  "Because of History",
  "Architecture",
  "Public gardens",
  "Music festivals",
  "Its authenticity"
];

export default function WhyFloriana() {
  return (
    <section className="floriana">

      <div className="floriana-circle">
        <img src="images/empire-state-building-photos.jpg" alt="Floriana" />
      </div>

      <div className="floriana-text">
        <h2>Why Floriana?</h2>

        <ul>
          {points.map((item, i) => (
            <li key={i}>
              <span className="icon">▶</span>
              {item}
            </li>
          ))}
        </ul>

        <p className="note">
          And because there is a lot more... But you have to discover!
        </p>
      </div>

    </section>
  );
}
