import React, { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Project from "./project";
import Contact from "./contact";
import Certificate from "./certificate";
import profileImg from "./assets/Asfor-img.jpg";
import Resume from "./assets/ASFORD_MWANGI CV.pdf";

function App() {
  const name = "ASFORD MWANGI PORTFOLIO";
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="portfolio-root" id="home">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <main className="container">
        <section id="about" className="App matrix-card">
          <h1 className="portfolio-title" aria-label={name}>
            {name.split(" ").map((word, wordIndex) => (
              <span key={wordIndex} className="word-container">
                {Array.from(word).map((char, charIndex) => (
                  <span
                    key={charIndex}
                    className="char-box"
                    aria-hidden="true"
                    style={{
                      animationDelay: `${(wordIndex * 5 + charIndex) * 0.05}s`,
                    }}
                  >
                    {char}
                  </span>
                ))}
              </span>
            ))}
          </h1>

          <img src={profileImg} alt="Asford Mwangi" className="profile-pic" />

          <section className="about-section">
            <h2>About Me</h2>
            <p>
              Welcome to my portfolio! I am a passionate Web Developer with a
              strong focus on creating dynamic and user-friendly websites. With
              a background in computer science and a keen eye for design, I
              strive to build visually appealing and functional web
              applications. My expertise includes HTML, CSS, JavaScript, Python,
              and various frameworks such as React, Electron, and Node.js.
            </p>
            <div>
              <div className="download-container">
                <a href={Resume} download className="download-btn">
                  Download Resume
                </a>
              </div>
            </div>
          </section>
        </section>

        <section id="certificates" className="certificates matrix-card">
          <Certificate />
        </section>

        <section id="projects" className="projects matrix-card">
          <Project />
        </section>

        <section id="contact" className="contact matrix-card">
          <Contact />
        </section>
      </main>

      <footer className="footer">
        <p>
          &copy; {new Date().getFullYear()} Asford Mwangi. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
