import React from 'react';
import { FaBrain, FaLightbulb, FaMicrophoneLines, FaPeopleGroup, FaBookOpen, FaShieldHalved, FaHandshake } from 'react-icons/fa6';

const Activities = () => (
  <section id="activities" className="section-fade" style={{
    background: 'linear-gradient(90deg, #e0e7ff 0%, #f3f4f6 100%)',
    border: '2px solid #6366f1',
    borderRadius: '12px',
    margin: '2.5rem 0',
    padding: '2.5rem 1.5rem',
    boxShadow: '0 4px 24px #6366f133',
  }}>
    <h2 style={{ fontSize: '2.2rem', color: '#3730a3', marginBottom: '1.5rem', textAlign: 'center' }}>Activities & Achievements</h2>
    <ul style={{ fontSize: '1.15rem', lineHeight: 1.7 }}>
      <li>
        <strong><FaLightbulb aria-hidden="true" /> Software Solutions</strong> — Build practical POS systems, management platforms, and business software tailored to real operational needs.
      </li>
      <li>
        <strong><FaBrain aria-hidden="true" /> AI & Automation</strong> — Develop AI-assisted tools, intelligent workflows, and process automations that reduce repetitive work and improve efficiency.
      </li>
      <li>
        <strong><FaBrain aria-hidden="true" /> Python & MCP Integrations</strong> — Build Python solutions and connect tools, data, and AI workflows using Model Context Protocol integrations.
      </li>
      <li>
        <strong><FaMicrophoneLines aria-hidden="true" /> Real-Time Technology</strong> — Create expressive, culture-driven applications, including real-time speech and lyric synchronization experiences.
      </li>
      <li>
        <strong><FaMicrophoneLines aria-hidden="true" /> Blender Animation</strong> — Create visual motion assets and animated presentations for creative and technology-focused projects.
      </li>
      <li>
        <strong><FaShieldHalved aria-hidden="true" /> Data Recovery</strong> — Assist with restoring, protecting, and organizing important data across local and virtualized environments.
      </li>
      <li>
        <strong><FaShieldHalved aria-hidden="true" /> Systems & Security</strong> — Work with Linux environments and virtualization tools including Proxmox and VirtualBox, applying essential cybersecurity, authentication, validation, and data-handling practices.
      </li>
      <li>
        <strong><FaHandshake aria-hidden="true" /> Partnership & Authenticity</strong> — Work with honesty, eligibility, and a partnership mindset, focused on creating lasting and mutually valuable solutions.
      </li>
      <li>
        <strong><FaPeopleGroup aria-hidden="true" /> Management & Communication</strong> — Combine clear communication, organized planning, stakeholder focus, and disciplined delivery to keep projects moving.
      </li>
      <li>
        <strong><FaBookOpen aria-hidden="true" /> Continuous Learning</strong> — Maintain a strong learning focus, building new skills while strengthening practical experience across Node.js, React, APIs, and Python.
      </li>
    </ul>
  </section>
);

export default Activities; 