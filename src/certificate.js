import "./App.css";
import plpCert from "./assets/PLP CERTIFICATE.pdf";
import aiCert from "./assets/OIAI-Certificate-Asford-Mwangi.pdf";
import cyberCert from "./assets/simplilearn cyber security beginner certificate.pdf";

function Certificate() {
  return (
    <div className="certificate matrix-card">
      <h2>[ACCESS_CREDENTIALS]</h2>
      <ul className="terminal-list">
        <li>
          <span className="item-label">&gt; SOFTWARE_ENG:</span>
          <span className="item-desc">Power Learn Project</span>
          <a href={plpCert} target="_blank" rel="noopener noreferrer">
            _VIEW_SOURCE
          </a>
        </li>
        <li>
          <span className="item-label">&gt; AI_LITERACY:</span>
          <span className="item-desc">Otermans Institute</span>
          <a href={aiCert} target="_blank" rel="noopener noreferrer">
            _VIEW_SOURCE
          </a>
        </li>
        <li>
          <span className="item-label">&gt; CYBER_SEC:</span>
          <span className="item-desc">Simplilearn Beginner</span>
          <a href={cyberCert} target="_blank" rel="noopener noreferrer">
            _VIEW_SOURCE
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Certificate;