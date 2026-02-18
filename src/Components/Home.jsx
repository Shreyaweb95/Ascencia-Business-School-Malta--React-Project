import { useEffect, useState } from "react";
import Program from "./Program";
import AboutBand from "./AboutBand";
import WhyFloriana from "./WhyFloriana";
import "../App.css";
import Footer from "./Footer";

const images = [
  "/MAEC_ESTADOS UNIDOS_NUEVA YORK - Copy (2).jpg",
  "/places-to-visit-in-Spain-Barcelona-1024x682.jpg",
  "/empire-state-building-photos.jpg"
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const [next, setNext] = useState(1);

  useEffect(() => {
    const slider = setInterval(() => {
      setNext((index + 1) % images.length);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % images.length);
      }, 800);
    }, 4000);

    return () => clearInterval(slider);
  }, [index]);

  return (
    <>
     <section className="hero">
      {/* current */}
      <div
        className="slide current"
        style={{ backgroundImage: `url(${images[index]})` }}
      />

      {/* next fading in */}
      <div
        className="slide next"
        style={{ backgroundImage: `url(${images[next]})` }}
      />

      <div className="hero-overlay">
        <p className="tagline">WE ARE EAGER TO GIVE YOU THE BEST EDUCATION</p>

        <h1>
          WELCOME TO <br />
          <span>ASCENCIA MALTA</span>
        </h1>

        <button className="hero-btn">
          DISCOVER OUR COURSES
          <span>▶</span>
        </button>
      </div>
    </section>
  
    <section>   
        <Program/>
      <AboutBand />
      <WhyFloriana />
       <Footer/>
      </section>
    </>
   
  );
}
