import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaArrowLeft, FaDownload } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Profile() {
  const profileImage = 'https://lh3.googleusercontent.com/pw/AP1GczO26douIuhr9ZX0dKVo3ARW4GwxlCqjb6EsvIzvxk7mlf78kZxeep3hw2mE5UB-NIHE4uJCQ0rjDaEB57x_9Uz7QIN7jTfUFeupNbshUAviS1yn7JY=w800-h800-no';

  return (
    <div className="profile-page">
      <div className="profile-card">
        <img
          src={profileImage}
          alt="Asford Mwangi avatar"
          className="profile-img-large"
        />
        <h1 className="profile-name">Asford Mwangi</h1>
        <div className="profile-title">Backend Engineer</div>
        <div className="profile-divider"></div>
        <p className="profile-bio">
          Culture-Driven Coder. Passionate about real-time tech, APIs, and creative coding.<br/>
          Experienced in Node.js, Python, and cloud platforms. Loves building scalable systems and collaborating with creative teams.
        </p>
        <div className="profile-socials">
          <a href="https://github.com/mwangiasford1" target="_blank" rel="noopener noreferrer" title="GitHub"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/asfordmwang" target="_blank" rel="noopener noreferrer" title="LinkedIn"><FaLinkedin /></a>
          <a href="https://www.facebook.com/Bro%20Richie%27s%20Richer" target="_blank" rel="noopener noreferrer" title="Facebook"><FaFacebook /></a>
        </div>
        <div style={{ margin: '2rem 0 1rem 0', width: '100%' }}>
          <h2 style={{ fontSize: '1.3rem', marginBottom: 12 }}>Resume</h2>
          <a href="/Asford_Mwangi_Refreshed_CV.pdf" download className="profile-resume-btn">
            <FaDownload style={{ marginRight: 8 }} /> Download Resume
          </a>
        </div>
        <Link to="/" className="profile-back">
          <FaArrowLeft style={{ marginRight: 6 }} /> Back to Portfolio
        </Link>
      </div>
    </div>
  );
} 