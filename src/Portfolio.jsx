import React from 'react';
import './styles/Portfolio.css';
import Activities from './components/Activities';
import Contact from './components/Contact';
import Topbar from './components/Topbar';
import { FaArrowDown, FaArrowUpRightFromSquare, FaCode, FaServer } from 'react-icons/fa6';

const profileImage = 'https://lh3.googleusercontent.com/pw/AP1GczO26douIuhr9ZX0dKVo3ARW4GwxlCqjb6EsvIzvxk7mlf78kZxeep3hw2mE5UB-NIHE4uJCQ0rjDaEB57x_9Uz7QIN7jTfUFeupNbshUAviS1yn7JY=w800-h800-no';

const Portfolio = () => {
    return (
        <div className="portfolio-container">
            <Topbar />

            <header className="hero">
                <div className="hero-grid" aria-hidden="true"></div>
                <div className="hero-content">
                    <div className="availability"><span></span> Available for opportunities</div>
                    <p className="hero-kicker">Software Engineer · Nairobi, Kenya</p>
                    <h1>Building systems with <em>purpose</em> and precision.</h1>
                    <p className="hero-summary">
                        I’m Asford Mwangi, a backend-focused engineer creating expressive, reliable products—from real-time lyric technology to scalable business platforms.
                    </p>
                    <div className="hero-actions">
                        <a className="button button-primary" href="#skills">Explore my skills <FaArrowDown /></a>
                        <a className="button button-secondary" href="/Asford_Mwangi_Refreshed_CV.pdf" target="_blank" rel="noreferrer">View résumé <FaArrowUpRightFromSquare /></a>
                    </div>
                </div>
                <div className="hero-mark" aria-label="Portrait of Asford Mwangi">
                    <img src={profileImage} alt="Asford Mwangi" />
                    <div className="hero-mark-copy">
                        <strong>Node.js</strong>
                        <strong>React</strong>
                        <strong>Real-time</strong>
                    </div>
                </div>
            </header>

            <section id="about">
                <div className="section-heading">
                    <p>01 / About</p>
                    <h2>Code is the tool.<br />Impact is the goal.</h2>
                </div>
                <div className="about-layout">
                    <p className="about-lead">
                        I’m a software engineering student passionate about backend development, intelligent systems, and thoughtful user experiences.
                    </p>
                    <div className="about-copy">
                        <p>I specialize in building practical, maintainable systems with Node.js and React. My work bridges engineering fundamentals with real human needs—whether that means synchronizing vocals with Kikuyu lyrics or simplifying daily business operations.</p>
                        <div className="focus-list">
                            <span><FaServer /> API & backend systems</span>
                            <span><FaCode /> Real-time experiences</span>
                        </div>
                    </div>
                </div>
            </section>

            <section id="skills">
                <div className="section-heading">
                    <p>02 / Capabilities</p>
                    <h2>A modern engineering stack.</h2>
                </div>
                <div className="skills-grid">
                    <article><span>01</span><h3>Backend & Automation</h3><p>Python · Node.js · Express · MCPs · REST APIs · GraphQL · MongoDB · SQL · Oracle · Redis</p></article>
                    <article><span>02</span><h3>Creative & Frontend</h3><p>React · JavaScript · Vite · CSS · Blender animation</p></article>
                    <article><span>03</span><h3>Real-time</h3><p>Web Speech API · Socket.IO · Synchronization</p></article>
                    <article><span>04</span><h3>Infrastructure & Recovery</h3><p>Linux · AWS · Docker · Proxmox · VirtualBox · Data recovery · Git · Postman · VS Code</p></article>
                </div>
            </section>

            <Activities />

            <Contact />

            <footer>
                <div className="footer-main">
                    <p>Have a project in mind?</p>
                    <a href="mailto:asfordmwangi@gmail.com">Let’s build something.</a>
                </div>
                <div className="footer-meta">
                    <span>© {new Date().getFullYear()} Asford Mwangi</span>
                    <div>
                        <a href="https://github.com/mwangiasford1" target="_blank" rel="noreferrer">GitHub</a>
                        <a href="https://www.linkedin.com/in/asfordmwang" target="_blank" rel="noreferrer">LinkedIn</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Portfolio;