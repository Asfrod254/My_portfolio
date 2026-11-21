import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaSearch } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    title: 'StudyMeet',
    description: 'A real-time virtual classroom with WebRTC video, collaborative whiteboards, notes, chat, and classroom gamification.',
    tech: 'React, WebRTC, Socket.IO, Node.js',
    link: 'https://github.com/mwangiasford1/Studymeet-app',
    details: 'Supports video conferencing, teacher and student roles, interactive whiteboards, collaborative notes, chat, screen sharing, and meeting controls.'
  },
  {
    title: 'Universal Accessibility Layer',
    description: 'A SaaS accessibility layer that audits, fixes, and enhances websites in real time using AI.',
    tech: 'JavaScript, AI, SaaS',
    link: 'https://github.com/mwangiasford1/Universal-Accessibility-Layer-UAL-',
    details: 'Designed as a plug-and-play accessibility service for automated audits and real-time compliance and inclusivity improvements.'
  },
  {
    title: 'Land ReGen',
    description: 'A soil health monitoring dashboard for vegetation, erosion, moisture, alerts, and recommendations.',
    tech: 'React, Node.js, Express, Supabase',
    link: 'https://github.com/mwangiasford1/Land-ReGen',
    details: 'Provides region-based soil monitoring, interactive KPIs and charts, voice commands, alert management, and AI-style recommendations.'
  },
  {
    title: 'PESANTE ENTERPRISES',
    description: 'A full-stack real estate platform for property listings, inquiries, appointments, and secure administration.',
    tech: 'React, Node.js, Express, MongoDB',
    link: 'https://github.com/mwangiasford1/PESANTE-ENTERPRICES-MAIN',
    details: 'Includes public property discovery, appointment scheduling, inquiry management, image uploads, JWT authentication, and an admin portal.'
  },
  {
    title: 'Matrix Portfolio',
    description: 'A modern matrix-inspired developer portfolio experience with responsive visual sections.',
    tech: 'React, JavaScript, CSS',
    link: 'https://github.com/mwangiasford1/matrix-portfolio',
    details: 'A responsive portfolio project focused on an immersive visual developer presentation.'
  },
  {
    title: 'Asford Browser',
    description: 'A Python browser project exploring custom navigation and desktop web experience features.',
    tech: 'Python',
    link: 'https://github.com/mwangiasford1/asford-browser',
    details: 'An experimental desktop browser project built with Python.'
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
