import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {
  const scrollToProjects = () => {
    const section = document.getElementById("projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="container">
      <div className="about-section">
        <div className="content">
          <h1>Afia Ahmed</h1>
          <p>Mechanical Engineer</p>

          {/* Action Buttons */}
          <div className="action-buttons">
            <button className="btn projects-btn" onClick={scrollToProjects}>
              My Projects
            </button>
            <a
              className="btn linkedin-btn"
              href="https://www.linkedin.com/in/afia-a-17861032b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;