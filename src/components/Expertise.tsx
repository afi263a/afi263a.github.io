import React from "react";
import waterlooDark from '../assets/images/UniversityOfWaterloo_logo_horiz_rgb.png';
import waterlooLight from '../assets/images/waterloo.png';

import cyberDark from '../assets/images/1200px-Cybertrucklogo.svg.png';
import cyberLight from '../assets/images/cyberLogo.png.webp';

import cadLogo    from '../assets/images/autoLogo.svg.png';
import swLogo     from '../assets/images/SolidWorks-Logo.png';
import matLogo    from '../assets/images/MatlabLogo.png';
import plusLogo   from '../assets/images/IC++Logo.svg.png';
import ansysLight from '../assets/images/ANSLogo.png';
import ansysDark  from '../assets/images/ANSYSLogo.png';
import fusionLogo from '../assets/images/fusionLogo.png';
import visualLogo from '../assets/images/Visual-Studio-Logo-2019.png';
import siemensLogo from '../assets/images/siemens logo.png';


import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
  "Dynamics I",
  "Circuits I",
  "MODS",
];

function Expertise({ mode }: { mode: string }) {
  const waterlooLogo = mode === "dark" ? waterlooLight : waterlooDark;
  const ansysLogo    = mode === "dark" ? ansysLight    : ansysDark;

  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <div className="skills-grid">

          {/* Education Section */}
          <div className="skill">
            <h1 style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              letterSpacing: "1px",
              background: "linear-gradient(90deg, #000 0%, #000 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>
              EDUCATION
            </h1>

            <img
              className="waterloo-logo"
              src={waterlooLogo}
              alt="Waterloo Logo"
              draggable={false}
              onDragStart={e => e.preventDefault()}
            />

            <h3 className="italic-text">BASc in Mechanical Engineering</h3>

            <p className="term-text">

              <span className="term-gradient">Mechatronics Option</span>
            </p>

            <div className="flex-chips">
              <span className="chip-title"></span>
              {labelsFirst.map((label, idx) => (
                <Chip key={idx} className="chip" label={label} />
              ))}
            </div>

          </div>

          {/* Current Role & Skills Section */}
          <div className="skill current">
            <h1 style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              letterSpacing: "1px",
              background: "linear-gradient(90deg, #000 0%, #000 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>
              AWARDS
            </h1>

            <p className="blue-term">
              <span className="term-gradient">President's Scholarship</span>
            </p>
            {/* under your “Current Term” heading */}


            <h1 style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              letterSpacing: "1px",
              background: "linear-gradient(135deg, #000, #000)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>
              SKILLS
            </h1>

            <div className="logo-slider">
              <div className="logo-track">
                {[...Array(2)].map((_, i) => (
                  <React.Fragment key={i}>
                    <img src={cadLogo}    alt="CAD"        draggable={false} onDragStart={e => e.preventDefault()} />
                    <img src={visualLogo} alt="Visual Studio" draggable={false} onDragStart={e => e.preventDefault()} />
                    <img src={swLogo}     alt="SolidWorks"  className="logo-ansys" draggable={false} onDragStart={e => e.preventDefault()} />
                    <img src={matLogo}    alt="MATLAB"      draggable={false} onDragStart={e => e.preventDefault()} />
                    <img src={plusLogo}   alt="C++"         draggable={false} onDragStart={e => e.preventDefault()} />
                    <img src={ansysLogo}  alt="Ansys"       className="logo-ansys" draggable={false} onDragStart={e => e.preventDefault()} />
                    <img src={fusionLogo} alt="Fusion 360"  draggable={false} onDragStart={e => e.preventDefault()} />
                    <img src={siemensLogo} alt="SolidWorks"  className="logo-ansys" draggable={false} onDragStart={e => e.preventDefault()} />
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Expertise;