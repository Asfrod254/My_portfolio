import React from 'react';
import {
  SiPython, SiNodedotjs, SiExpress, SiGraphql, SiMongodb,
  SiMysql, SiOracle, SiRedis, SiReact, SiJavascript, SiVite,
  SiCss3, SiBlender, SiSocketdotio, SiLinux, SiAmazonwebservices,
  SiDocker, SiProxmox, SiVirtualbox, SiGit, SiPostman, SiVscodium,
} from 'react-icons/si';
import { FaMicrophoneLines, FaPlug, FaRotate, FaServer, FaDatabase } from 'react-icons/fa6';

const skillRows = [
  {
    category: '01 / Backend',
    items: [
      ['Python', SiPython], ['Node.js', SiNodedotjs], ['Express', SiExpress],
      ['MCPs', FaPlug], ['REST APIs', FaServer], ['GraphQL', SiGraphql],
      ['MongoDB', SiMongodb], ['SQL', SiMysql], ['Oracle', SiOracle], ['Redis', SiRedis],
    ],
  },
  {
    category: '02 / Frontend',
    items: [
      ['React', SiReact], ['JavaScript', SiJavascript], ['Vite', SiVite],
      ['CSS', SiCss3], ['Blender', SiBlender],
    ],
  },
  {
    category: '03 / Real-time',
    items: [
      ['Web Speech API', FaMicrophoneLines], ['Socket.IO', SiSocketdotio], ['Synchronization', FaRotate],
    ],
  },
  {
    category: '04 / Tools',
    items: [
      ['Linux', SiLinux], ['AWS', SiAmazonwebservices], ['Docker', SiDocker],
      ['Proxmox', SiProxmox], ['VirtualBox', SiVirtualbox], ['Data recovery', FaDatabase],
      ['Git', SiGit], ['Postman', SiPostman], ['VS Code', SiVscodium],
    ],
  },
];

const Skills = () => (
  <section id="skills">
    <h2></h2>
    <table>
      <thead>
        <tr>
          <th>Category</th>
          <th>Tools / Skills</th>
        </tr>
      </thead>
      <tbody>
        {skillRows.map(({ category, items }) => (
          <tr key={category}>
            <td>{category}</td>
            <td>
              <div className="skills-table-icons">
                {items.map(([name, Icon]) => (
                  <span className="skills-table-badge" title={name} key={name}>
                    <Icon aria-hidden="true" />
                    {name}
                  </span>
                ))}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </section>
);

export default Skills;
