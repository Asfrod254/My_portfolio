import React from 'react';
import { FaBrain, FaLightbulb, FaMicrophoneLines, FaPeopleGroup, FaBookOpen, FaShieldHalved, FaHandshake } from 'react-icons/fa6';
const activityImages = [
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=85',
];

const activities = [
  {
    title: 'Software Solutions',
    description: 'Build practical POS systems, management platforms, and business software tailored to real operational needs.',
    icon: FaLightbulb,
    image: activityImages[0],
    imageAlt: 'Computer circuit board representing software systems',
  },
  {
    title: 'AI & Automation',
    description: 'Develop AI-assisted tools, intelligent workflows, and process automations that reduce repetitive work and improve efficiency.',
    icon: FaBrain,
    image: activityImages[1],
    imageAlt: 'Abstract artificial intelligence visualization',
  },
  {
    title: 'Python & MCP Integrations',
    description: 'Build Python solutions and connect tools, data, and AI workflows using Model Context Protocol integrations.',
    icon: FaBrain,
    image: activityImages[2],
    imageAlt: 'Code displayed on a computer screen',
  },
  {
    title: 'Real-Time Technology',
    description: 'Create expressive, culture-driven applications, including real-time speech and lyric synchronization experiences.',
    icon: FaMicrophoneLines,
    image: activityImages[3],
    imageAlt: 'Person using technology for real-time communication',
  },
  {
    title: 'Blender Animation',
    description: 'Create visual motion assets and animated presentations for creative and technology-focused projects.',
    icon: FaMicrophoneLines,
    image: activityImages[4],
    imageAlt: 'Colorful digital 3D artwork',
  },
  {
    title: 'Data Recovery',
    description: 'Assist with restoring, protecting, and organizing important data across local and virtualized environments.',
    icon: FaShieldHalved,
    image: activityImages[5],
    imageAlt: 'Computer hardware and storage components',
  },
  {
    title: 'Systems & Security',
    description: 'Work with Linux and virtualization tools including Proxmox and VirtualBox, applying essential security and data-handling practices.',
    icon: FaShieldHalved,
    image: activityImages[6],
    imageAlt: 'Rows of servers in a data center',
  },
  {
    title: 'Partnership & Authenticity',
    description: 'Work with honesty and a partnership mindset, focused on creating lasting and mutually valuable solutions.',
    icon: FaHandshake,
    image: activityImages[7],
    imageAlt: 'Team collaborating around a table',
  },
  {
    title: 'Management & Communication',
    description: 'Combine clear communication, organized planning, stakeholder focus, and disciplined delivery to keep projects moving.',
    icon: FaPeopleGroup,
    image: activityImages[8],
    imageAlt: 'Team meeting and project planning',
  },
  {
    title: 'Continuous Learning',
    description: 'Build new skills while strengthening practical experience across Node.js, React, APIs, and Python.',
    icon: FaBookOpen,
    image: activityImages[9],
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