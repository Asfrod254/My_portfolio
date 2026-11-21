import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaSearch } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
const projectImages = [
  'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1551281044-8d8ad0a6d3f?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85',
];

const projects = [
  {
    title: 'StudyMeet',
    description: 'A real-time virtual classroom with WebRTC video, collaborative whiteboards, notes, chat, and classroom gamification.',
    tech: 'React, WebRTC, Socket.IO, Node.js',
    image: projectImages[0],
    link: 'https://github.com/mwangiasford1/Studymeet-app',
    details: 'Supports video conferencing, teacher and student roles, interactive whiteboards, collaborative notes, chat, screen sharing, and meeting controls.'
  },
  {
    title: 'Universal Accessibility Layer',
    description: 'A SaaS accessibility layer that audits, fixes, and enhances websites in real time using AI.',
    tech: 'JavaScript, AI, SaaS',
    image: projectImages[1],
    link: 'https://github.com/mwangiasford1/Universal-Accessibility-Layer-UAL-',
    details: 'Designed as a plug-and-play accessibility service for automated audits and real-time compliance and inclusivity improvements.'
  },
  {
    title: 'Land ReGen',
    description: 'A soil health monitoring dashboard for vegetation, erosion, moisture, alerts, and recommendations.',
    tech: 'React, Node.js, Express, Supabase',
    image: projectImages[2],
    link: 'https://github.com/mwangiasford1/Land-ReGen',
    details: 'Provides region-based soil monitoring, interactive KPIs and charts, voice commands, alert management, and AI-style recommendations.'
  },
  {
    title: 'PESANTE ENTERPRISES',
    description: 'A full-stack real estate platform for property listings, inquiries, appointments, and secure administration.',
    tech: 'React, Node.js, Express, MongoDB',
    image: projectImages[3],
    link: 'https://github.com/mwangiasford1/PESANTE-ENTERPRICES-MAIN',
    details: 'Includes public property discovery, appointment scheduling, inquiry management, image uploads, JWT authentication, and an admin portal.'
  },
  {
    title: 'Matrix Portfolio',
    description: 'A modern matrix-inspired developer portfolio experience with responsive visual sections.',
    tech: 'React, JavaScript, CSS',
    image: projectImages[4],
    link: 'https://github.com/mwangiasford1/matrix-portfolio',
    details: 'A responsive portfolio project focused on an immersive visual developer presentation.'
  },
  {
    title: 'Asford Browser',
    description: 'A Python browser project exploring custom navigation and desktop web experience features.',
    tech: 'Python',
    image: projectImages[5],
    link: 'https://github.com/mwangiasford1/asford-browser',
    details: 'An experimental desktop browser project built with Python.'
  },
  {
    title: 'AI Climate App',
    description: 'AI-powered climate forecasting and analytics using environmental datasets.',
    tech: 'Python, TensorFlow, Flask',
    image: projectImages[6],
    link: 'https://github.com/mwangiasford1/ai-climate-app.git',
    details: 'An AI climate platform for environmental forecasting and analytics.'
  },
  {
    title: 'Barber App',
    description: 'Barbershop management for appointments, customers, services, and staff roles.',
    tech: 'Python, Flask, SQLAlchemy',
    image: projectImages[7],
    link: 'https://github.com/mwangiasford1/barber_app.git',
    details: 'A management system for local barbershop operations.'
  },
  {
    title: 'Livestock Management',
    description: 'A platform for tracking and organizing livestock and farm operations.',
    tech: 'Python, Web App',
    image: projectImages[8],
    link: 'https://github.com/mwangiasford1/livestock_management_project-ME.git',
    details: 'A web platform for livestock and farm management.'
  },
  {
    title: 'Parental Assistant',
    description: 'A family task and reminder application for schedules and responsibilities.',
    tech: 'React, Productivity',
    image: projectImages[9],
    link: 'https://github.com/mwangiasford1/parental-assistant-app.git',
    details: 'A productivity app designed for family planning and tasks.'
  },
  {
    title: 'Smart File Manager',
    description: 'An automated tool for sorting and managing local directories.',
    tech: 'Python, Automation',
    image: projectImages[10],
    link: 'https://github.com/mwangiasford1/file_manager.git',
    details: 'A file organization tool that automates directory management.'
  },
  {
    title: 'Wambo Task Management',
    description: 'A task management application for work and collaboration.',
    tech: 'JavaScript, Management',
    image: projectImages[11],
    link: 'https://github.com/mwangiasford1/Wambo-task-managment-app.git',
    details: 'A project and task management application.'
  },
];

const Projects = () => {
  const [modal, setModal] = useState(null);
  const [search, setSearch] = useState('');

  const filtered = projects.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase()) ||
    p.description.toLowerCase().includes(search.toLowerCase()) ||
    p.tech.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section id="projects">
      <h2></h2>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
        <FaSearch style={{ marginRight: 8, color: '#888' }} />
        <input
          type="text"
          placeholder="Search projects..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{ padding: '0.5rem 1rem', borderRadius: 8, border: '1px solid #ccc', width: 220 }}
        />
      </div>
      <div className="projects-grid">
        <AnimatePresence>
          {filtered.map((project, idx) => (
            <motion.div
              className="project-card"
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ scale: 1.03, boxShadow: '0 8px 32px #1877f220' }}
            >
              <img
                src={project.image}
                alt={`${project.title} project preview`}
                style={{ width: '100%', height: 180, objectFit: 'cover', borderRadius: 12, marginBottom: 16 }}
              />
              <h3>{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-tech">{project.tech}</div>
              <div style={{ display: 'flex', gap: 16, marginBottom: 12 }}>
                <a className="project-link" href={project.link} target="_blank" rel="noopener noreferrer" title="GitHub">
                  <FaGithub />
                </a>
                <button className="project-link project-link-btn" onClick={() => setModal(project)}>
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {modal && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: '#0008', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            onClick={() => setModal(null)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{ background: '#fff', color: '#222', borderRadius: 16, padding: 32, minWidth: 320, maxWidth: 420, boxShadow: '0 8px 32px #0003', position: 'relative' }}
              onClick={e => e.stopPropagation()}
            >
              <h3 style={{ marginTop: 0 }}>{modal.title}</h3>
              <p>{modal.details}</p>
              <a href={modal.link} target="_blank" rel="noopener noreferrer" style={{ color: '#1877f2', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                <FaGithub /> GitHub Repo
              </a>
              <button onClick={() => setModal(null)} style={{ position: 'absolute', top: 12, right: 12, background: 'none', border: 'none', fontSize: 22, cursor: 'pointer', color: '#888' }}>&times;</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
