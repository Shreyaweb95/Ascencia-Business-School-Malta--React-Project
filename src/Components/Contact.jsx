import "../App.css";
import Footer from "./Footer";

export default function Contact() {
  return (
    <section className="contact">
      <div className="contact-bg"></div>

      <div className="contact-box">
        <span className="small-title">ASCENCIA MALTA</span>
        <h1>CONTACT US</h1>

        <p className="contact-desc">
          For any question related to our campus, our programs or any other
          subject concerning Ascencia Malta, please fill in the form below.
        </p>

        <form className="contact-form">
          <div className="grid">
            <input type="text" placeholder="First Name*" />
            <input type="text" placeholder="Last Name*" />

            <input type="email" placeholder="E-mail*" />
            <input type="tel" placeholder="Phone*" />

            <input
              className="full"
              type="text"
              placeholder="Subject of your message*"
            />
            <textarea placeholder="Your message*" />
          </div>

          <label className="checkbox">
            <input type="checkbox" />I agree that Ascencia Malta collects and
            uses my personal data.
          </label>

          <button>SUBMIT</button>
        </form>
        <div className="map-section">
          <iframe
            src="https://www.google.com/maps?q=Floriana%20Malta&output=embed"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <Footer/>
    </section>
  );
}
