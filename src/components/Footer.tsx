import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import ResumeIcon from '@mui/icons-material/DescriptionOutlined';
import '../assets/styles/Footer.scss';

type FooterProps = {
  mode: string; // 'light' or 'dark'
};

function Footer({ mode }: FooterProps) {
  const isDark = mode === 'dark';

  return (
    <footer id="contact">
      <h1>Contact Me</h1>
      <div className="contact-buttons">
        <a className={`contact-btn ${isDark ? 'dark' : 'light'}`} href="https://www.linkedin.com/in/afia-a-17861032b/" target="_blank" rel="noreferrer">
          <LinkedInIcon />
          LinkedIn
        </a>
        <a className={`contact-btn ${isDark ? 'dark' : 'light'}`} href="mailto:a389ahmed@uwaterloo.ca" target="_blank" rel="noreferrer">
          <MailIcon />
          Email
        </a>
      </div>
    </footer>
  );
}

export default Footer;