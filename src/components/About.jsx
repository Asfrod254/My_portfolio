import React from 'react';
import '../styles/About.css';
import { FaMicrophoneLines } from 'react-icons/fa6';

const About = () => (
  <section id="about">
    <h2></h2>
    <p>I'm a software engineering student with a deep passion for backend development and intelligent systems. Whether it's syncing lyrics to vocals in real-time or building scalable APIs, I strive to create tools that are not only functional—but expressive.</p>
    <ul>
      <li>Specialized in <strong>Node.js</strong>, <strong>Express</strong>, and <strong>React</strong></li>
      <li>Real-time speech recognition & lyric alignment</li>
      <li>Fluent in translating creativity into code</li>
      <li>Currently building <strong>Vocal Sync</strong>: a lyric matching app honoring Kikuyu culture <FaMicrophoneLines aria-hidden="true" /></li>
    </ul>
  </section>
);

export default About;
