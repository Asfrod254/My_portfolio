import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaDownload } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const SidebarLeft = () => (
  <aside className="sidebar-left">
    <div className="sidebar-bio-card">
      <img
        src="https://lh3.googleusercontent.com/pw/AP1GczO26douIuhr9ZX0dKVo3ARW4GwxlCqjb6EsvIzvxk7mlf78kZxeep3hw2mE5UB-NIHE4uJCQ0rjDaEB57x_9Uz7QIN7jTfUFeupNbshUAviS1yn7JY=w800-h800-no"
        alt="Asford Mwangi avatar"
        className="sidebar-profile-img"
      />
      <h3 className="sidebar-profile-name">Asford Mwangi</h3>
      <div className="sidebar-profile-title">Backend Engineer</div>
      <div className="sidebar-profile-divider"></div>
      <p className="sidebar-profile-bio">
        Culture-Driven Coder. Passionate about real-time tech, APIs, and creative coding.
      </p>
      <div className="sidebar-socials">
        <a href="https://github.com/mwangiasford1" target="_blank" rel="noopener noreferrer" title="GitHub"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/asfordmwang" target="_blank" rel="noopener noreferrer" title="LinkedIn"><FaLinkedin /></a>
        <a href="https://www.facebook.com/Bro%20Richie%27s%20Richer" target="_blank" rel="noopener noreferrer" title="Facebook"><FaFacebook /></a>
      </div>
      <a href="/Asford_Mwangi_Refreshed_CV.pdf" download className="sidebar-resume-btn">
        <FaDownload style={{ marginRight: 6 }} /> Download Resume
      </a>
      <Link to="/profile" className="sidebar-resume-btn" style={{marginTop: 8, background: '#232946'}}>
        View Full Profile
      </Link>
      <Link to="/collaborators" className="sidebar-resume-btn" style={{marginTop: 8, background: '#6366f1'}}>
        Collaborators
      </Link>
      <div style={{ textAlign: 'center', margin: '1.5rem 0' }}>
        <a
          href="/Asford_Mwangi_Refreshed_CV.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            background: '#6366f1',
            color: '#fff',
            padding: '0.6rem 1.5rem',
            borderRadius: 8,
            fontWeight: 600,
            fontSize: 16,
            textDecoration: 'none',
            boxShadow: '0 2px 8px #6366f133',
            transition: 'background 0.2s',
          }}
        >
          Download Resume
        </a>
      </div>
    </div>
  </aside>
);

export default SidebarLeft; 