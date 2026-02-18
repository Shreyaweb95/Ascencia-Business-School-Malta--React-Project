import "../App.css";

export default function EducationSection() {
  return (
    <section className="education">

      <div className="education-top">
        <small className="edu-label">ASCENCIA MALTA</small>

        <h1>
          WE ARE EAGER TO GIVE YOU{" "}
          <span>THE BEST EDUCATION</span>
        </h1>

        <p>
          Ascencia’s ambition is to realize your potential of ascension.
          Through an individualized follow-up of the students, our teams
          are at your service for your future projects.
        </p>
      </div>

      <div className="education-content">

        <div className="edu-circle">
          <img src= "./images/wp7462757.jpg"alt="Student learning" />
        </div>

        <div className="edu-text">
          <small>ABOUT</small>
          <h2>A participative and innovative pedagogy</h2>
          <p>
          Our training courses are based on a participative and innovative pedagogy based on the value of the example and the constant exchange between learners and experienced professionals. The realities of corporate life are at the heart of the personalized learning methods we use. They are intended to identify potentials and to hatch vocations of managers and business developers. Our campus is also open to all international candidates who wish to study management in Malta
          </p>
         <br/>
          <small>Mission</small>
          <p>
            At Ascencia Malta, we empower students through a student-centered approach that fosters critical thinking, creativity, and lifelong learning. We deliver high-quality education that meets rigorous standards and prepares graduates for success in a dynamic world. Together with our partnered stakeholders, we are dedicated to developing socially responsible leaders who champion diversity, inclusion, and equity, creating meaningful impact within our diverse community
          </p>
        </div>

      </div>

    </section>
  );
}
