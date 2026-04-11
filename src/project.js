import React from "react";
import "./App.css";

function Project() {
  return (
    <div className="project matrix-card">
      <h2>[DEPLOYED_SCRIPTS]</h2>
      <p className="terminal-meta">{"// Executing skill demonstration protocols..."}</p>
      <ul className="terminal-list">
        <li>
          <span className="item-label">&gt; PORTFOLIO_V1:</span>
          <span className="item-desc">React-based terminal interface</span>
          <a href="https://github.com/AsfordMwangi/Portfolio" target="_blank" rel="noopener noreferrer">
            _GET_REPO
          </a>
        </li>
        <li>
          <span className="item-label">&gt; WEATHER_OBSERVER:</span>
          <span className="item-desc">Real-time API data retrieval</span>
          <a href="https://github.com/AsfordMwangi/WeatherApp" target="_blank" rel="noopener noreferrer">
            _GET_REPO
          </a>
        </li>
        <li>
          <span className="item-label">&gt; LOGIC_ENGINE:</span>
          <span className="item-desc">Functional arithmetic processor</span>
          <a href="https://github.com/AsfordMwangi/Calculator" target="_blank" rel="noopener noreferrer">
            _GET_REPO
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Project;

      