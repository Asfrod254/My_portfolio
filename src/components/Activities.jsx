import React from 'react';
import { FaBrain, FaLightbulb, FaMicrophoneLines, FaPeopleGroup, FaBookOpen, FaShieldHalved, FaHandshake } from 'react-icons/fa6';
import asfordImage from '../assets/Asfor-img.jpg';
import matrixImage from '../assets/Matrix motherboard i.png';
import matrixPortraitImage from '../assets/gemini-2.5-flash-image_turn_this_image_into_a_green_themed_advanced_matrix_image_with_high_visibility_a-0.jpg';
import techMatrixImage from '../assets/lucid-origin_a_green_themed_advanced_tech_mathore_board_matrix_image_with_high_similarlity-0.jpg';

const activities = [
  {
    title: 'Software Solutions',
    description: 'Build practical POS systems, management platforms, and business software tailored to real operational needs.',
    icon: FaLightbulb,
    image: matrixImage,
    imageAlt: 'Computer circuit board representing software systems',
  },
  {
    title: 'AI & Automation',
    description: 'Develop AI-assisted tools, intelligent workflows, and process automations that reduce repetitive work and improve efficiency.',
    icon: FaBrain,
    image: techMatrixImage,
    imageAlt: 'Abstract artificial intelligence visualization',
  },
  {
    title: 'Python & MCP Integrations',
    description: 'Build Python solutions and connect tools, data, and AI workflows using Model Context Protocol integrations.',
    icon: FaBrain,
    image: matrixImage,
    imageAlt: 'Code displayed on a computer screen',
  },
  {
    title: 'Real-Time Technology',
    description: 'Create expressive, culture-driven applications, including real-time speech and lyric synchronization experiences.',
    icon: FaMicrophoneLines,
    image: asfordImage,
    imageAlt: 'Person using technology for real-time communication',
  },
  {
    title: 'Blender Animation',
    description: 'Create visual motion assets and animated presentations for creative and technology-focused projects.',
    icon: FaMicrophoneLines,
    image: matrixPortraitImage,
    imageAlt: 'Colorful digital 3D artwork',
  },
  {
    title: 'Data Recovery',
    description: 'Assist with restoring, protecting, and organizing important data across local and virtualized environments.',
    icon: FaShieldHalved,
    image: matrixImage,
    imageAlt: 'Computer hardware and storage components',
  },
  {
    title: 'Systems & Security',
    description: 'Work with Linux and virtualization tools including Proxmox and VirtualBox, applying essential security and data-handling practices.',
    icon: FaShieldHalved,
    image: techMatrixImage,
    imageAlt: 'Rows of servers in a data center',
  },
  {
    title: 'Partnership & Authenticity',
    description: 'Work with honesty and a partnership mindset, focused on creating lasting and mutually valuable solutions.',
    icon: FaHandshake,
    image: asfordImage,
    imageAlt: 'Team collaborating around a table',
  },
  {
    title: 'Management & Communication',
    description: 'Combine clear communication, organized planning, stakeholder focus, and disciplined delivery to keep projects moving.',
    icon: FaPeopleGroup,
    image: asfordImage,
    imageAlt: 'Team meeting and project planning',
  },
  {
    title: 'Continuous Learning',
    description: 'Build new skills while strengthening practical experience across Node.js, React, APIs, and Python.',
    icon: FaBookOpen,
    image: matrixPortraitImage,
    imageAlt: 'Students learning together',
  },
];

const Activities = () => (
  <section id="activities" className="section-fade">
    <div className="section-heading">
      <p>04 / Activities</p>
      <h2>Activities &amp; Achievements</h2>
    </div>
    <div className="activities-grid">
      {activities.map(({ title, description, icon: Icon, image, imageAlt }) => (
        <article className="activity-card" key={title}>
          <div className="activity-visual">
            <img src={image} alt={imageAlt} loading="lazy" />
            <span className="activity-icon"><Icon aria-hidden="true" /></span>
          </div>
          <div className="activity-copy">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Activities; 