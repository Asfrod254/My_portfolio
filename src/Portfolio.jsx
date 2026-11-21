import React from 'react';
import './styles/Portfolio.css';
import Activities from './components/Activities';
import Contact from './components/Contact';
import Topbar from './components/Topbar';
import { FaArrowDown, FaArrowUpRightFromSquare, FaCode, FaServer } from 'react-icons/fa6';
import matrixImage from './assets/Matrix motherboard i.png';
import greenMatrixImage from './assets/gemini-2.5-flash-image_turn_this_image_into_a_green_themed_advanced_matrix_image_with_high_visibility_a-0.jpg';
import techMatrixImage from './assets/lucid-origin_a_green_themed_advanced_tech_mathore_board_matrix_image_with_high_similarlity-0.jpg';
import asfordImage from './assets/Asfor-img.jpg';

const projects = [
  { name: 'StudyMeet', description: 'Real-time virtual classrooms with video, whiteboards, notes, chat, and gamification.', tags: ['React', 'WebRTC', 'Socket.IO'], image: greenMatrixImage, github: 'https://github.com/mwangiasford1/Studymeet-app' },
  { name: 'Universal Accessibility Layer', description: 'An AI-powered accessibility platform for auditing and enhancing websites.', tags: ['AI', 'JavaScript', 'SaaS'], image: techMatrixImage, github: 'https://github.com/mwangiasford1/Universal-Accessibility-Layer-UAL-' },
  { name: 'Land ReGen', description: 'Soil health monitoring with vegetation, erosion, moisture, alerts, and recommendations.', tags: ['React', 'Node.js', 'Supabase'], image: matrixImage, github: 'https://github.com/mwangiasford1/Land-ReGen' },
  { name: 'PESANTE ENTERPRISES', description: 'A full-stack real estate platform for listings, inquiries, appointments, and administration.', tags: ['React', 'Node.js', 'MongoDB'], image: asfordImage, live: 'https://pesante-enterprices-main-1.onrender.com/', github: 'https://github.com/mwangiasford1/PESANTE-ENTERPRICES-MAIN' },
  { name: 'Matrix Portfolio', description: 'An immersive matrix-inspired developer portfolio experience.', tags: ['React', 'CSS', 'JavaScript'], image: greenMatrixImage, github: 'https://github.com/mwangiasford1/matrix-portfolio' },
  { name: 'Asford Browser', description: 'A Python desktop browser exploring custom navigation and web experiences.', tags: ['Python', 'Desktop'], image: techMatrixImage, github: 'https://github.com/mwangiasford1/asford-browser' },
  { name: 'AI Climate App', description: 'AI-powered climate forecasting and analytics using environmental datasets.', tags: ['Python', 'TensorFlow', 'Flask'], image: matrixImage, github: 'https://github.com/mwangiasford1/ai-climate-app.git' },
  { name: 'Barber App', description: 'Barbershop management for appointments, customers, services, and staff roles.', tags: ['Python', 'SQLAlchemy', 'Flask'], image: asfordImage, github: 'https://github.com/mwangiasford1/barber_app.git' },
  { name: 'Livestock Management', description: 'A management platform for tracking and organizing livestock and farm operations.', tags: ['Python', 'Web App'], image: greenMatrixImage, github: 'https://github.com/mwangiasford1/livestock_management_project-ME.git' },
  { name: 'Parental Assistant', description: 'A family task and reminder application for organizing schedules and responsibilities.', tags: ['React', 'Productivity'], image: techMatrixImage, github: 'https://github.com/mwangiasford1/parental-assistant-app.git' },
  { name: 'Smart File Manager', description: 'An automated file organization tool for sorting and managing local directories.', tags: ['Python', 'Automation'], image: matrixImage, live: 'https://smart-file-manager-6tqp.onrender.com', github: 'https://github.com/mwangiasford1/file_manager.git' },
  { name: 'Wambo Task Management', description: 'A task management application for organizing work, collaboration, and progress.', tags: ['JavaScript', 'Management'], image: asfordImage, github: 'https://github.com/mwangiasford1/Wambo-task-managment-app.git' },
];

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

            <section id="projects">
                <div className="section-heading projects-heading">
                    <p>03 / Projects</p>
                    <h2>Built for real people and practical problems.</h2>
                </div>
                <div className="project-grid">
                    {projects.map((project, index) => (
                        <article className="project-card" key={project.name}>
                            <div className="project-image">
                                <img src={project.image} alt={`${project.name} project preview`} />
                                <span>0{index + 1}</span>
                            </div>
                            <div className="project-card-body">
                                <div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                                <h3>{project.name}</h3>
                                <p>{project.description}</p>
                                <div className="project-links">
                                    {project.live && <a href={project.live} target="_blank" rel="noreferrer">Live project <FaArrowUpRightFromSquare /></a>}
                                    <a href={project.github} target="_blank" rel="noreferrer">GitHub <FaArrowUpRightFromSquare /></a>
                                </div>
                            </div>
                        </article>
                    ))}
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