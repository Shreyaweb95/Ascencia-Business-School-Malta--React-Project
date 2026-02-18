import { useEffect, useRef } from "react";
import "../App.css";

const logos = [
  "/images/Auro-logo.png",
  "/images/amity_university_logo_freelogovectors.net_.png",
  "/images/Jaipuria-University-logo.webp",
  "/images/OIP (1).webp",
  "/images/free-logo-design-11551057495oqoep79juj.png"
];

export default function Partners() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let x = 0;

    const slide = () => {
      x += 0.6;
      if (x >= slider.scrollWidth / 2) x = 0;
      slider.scrollLeft = x;
      requestAnimationFrame(slide);
    };

    slide();
  }, []);

  return (
    <section className="partners">
      <small>PARTNER INSTITUTIONS</small>
      <h2>We Are Proudly Partner With the Following Institutions!</h2>

      <div className="partner-track" ref={sliderRef}>
        {[...logos, ...logos].map((logo, i) => (
          <div className="partner-circle" key={i}>
            <img src={logo} alt="partner logo" />
          </div>
        ))}
      </div>
    </section>
  );
}
