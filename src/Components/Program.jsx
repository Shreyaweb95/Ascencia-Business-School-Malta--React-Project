import { useEffect, useRef } from "react";


const cards = [
  "DIPLOMA PROGRAMMES",
  "AWARD CERTIFICATES",
  "POSTGRADUATE PROGRAMMES",
  "MBA DEGREES",
  "PROFESSIONAL COURSES"
];

export default function ProgramsCarousel() {
  const trackRef = useRef(null);

  const move = (dir = 1) => {
    const track = trackRef.current;
    const cardWidth = 290;

    track.scrollBy({
      left: dir * cardWidth,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    const track = trackRef.current;
    const cardWidth = 290;

    const auto = setInterval(() => {
      if (track.scrollLeft >= track.scrollWidth / 2) {
        track.scrollLeft = 0;
      }
      track.scrollBy({ left: cardWidth, behavior: "smooth" });
    }, 2500);

    return () => clearInterval(auto);
  }, []);

  return (
    <section className="programs">

      <h2>Find the best programme for yourself</h2>
      <p className="subtitle">
        Because each training course corresponds to a personal ambition.all our students receive individual attention. The success of each student is our priority. Our teams accompany each student in the success of his project.
      </p>

      <div className="carousel-wrapper">

      

        <div className="carousel-track" ref={trackRef}>
          {[...cards, ...cards].map((title, i) => (
            <div className="program-card" key={i}>
              <span>COURSES</span>
              <h3>{title}</h3>
              <div className="play-btn">▶</div>
            </div>
          ))}
        </div>

    

      </div>
    </section>
  );
}
