// src/components/Timeline.tsx
import React from "react";
import Chip from '@mui/material/Chip'; 
import SiemensLogo from "../assets/images/SiemensLogo.png";
import CrozierLogo from "../assets/images/crozier.jpeg";
import MagnaLogo from "../assets/images/magna.webp";
import '../assets/styles/Timeline.scss';

interface TimelineProps {
  mode: 'light' | 'dark';
}


const labelsFirst = [
  "AutoCAD",
  "DFM",
  "GD&T",
  "Lean Six Sigma",
];


const labelsSecond = [
  "SolidWorks",
  "Revit",
  "AutoCAD",
  "DFMA",
];


const labelsThird = [
  "AutoCAD",
  "Revit",
  "LEED",
];

const Timeline: React.FC<TimelineProps> = ({ mode }) => {
  return (
    <div id="history">
      <div className="items-container">
        <h1 className="timeline-header">Experience</h1>

        {/* ====== Logo-only Tabs Section ====== */}
        <div className={`vt-container ${mode}`}>  {/* adds light/dark class */}
          <div className="content">
            <input type="radio" name="slider" defaultChecked id="almag" />
            <input type="radio" name="slider" id="vision1" />
            <input type="radio" name="slider" id="vision2" />

            <div className="list">
              <label htmlFor="almag" className="almag">
                <img src={SiemensLogo} alt="Siemens" className="tab-logo" />
              </label>
              <label htmlFor="vision1" className="vision1">
                <img src={CrozierLogo} alt="Vision" className="tab-logo" />
              </label>
              <label htmlFor="vision2" className="vision2">
                <img src={MagnaLogo} alt="Vision" className="tab-logo" />
              </label>
            </div>

            <div className="text-content">
              <div className="almag text">
                {/* apply CSS class for heading instead of inline style */}
                <h1 className="tab-heading">Manufacturing Engineering Intern</h1>
                <p className="term-text">
                  <span className="term-gradient">Siemens Energy</span> 
                </p>
                <p className="date-text"><strong>Date:</strong> May 2025 – August 2025 </p>
                <p> • Installed Ontario’s first hydrogen co-firing skid (10,000+ lb) using HIT-HY mortar, integrating BoP hardware </p>
                <p> • Upgraded SES system (6RV30→6RV80), validating 200+ signals to boost 25-year generator reliability</p>
                <p> • Commissioned gas analyzers for H₂ blending, validating Siemens logic and achieving up to 23% CO₂ cut </p>
                <div className="flex-chips">
                  <span className="chip-title"><strong>Skills:</strong></span>
                  {labelsFirst.map((label, index) => (
                    <Chip key={index} className='chip' label={label} />
                  ))}
               </div>
              </div>
              <div className="vision1 text">
                <h1 className="tab-heading">Mechanical Engineering Intern</h1>
                <p className="term-text">
                  <span className="term-gradient">Crozier: Consulting Engineers </span> 
                </p>
                <p className="date-text"><strong>Date:</strong> May 2024 – August 2024</p>
                <p> • Applied DFMA principles in AutoCAD, Revit, and SolidWorks to streamline mechanical/HVAC layouts and enhance manufacturability </p>
                <p> • Conducted on-site validation and QA reviews of HVAC systems, ensuring compliance with ASHRAE and OBC standards</p>
                <p> • Verified energy specs against fire separation and regulatory codes, supporting safety-critical energy infrastructure </p>
                <div className="flex-chips">
                  <span className="chip-title"><strong>Skills:</strong></span>
                  {labelsSecond.map((label, index) => (
                    <Chip key={index} className='chip' label={label} />
                  ))}
                </div>
              </div>
              <div className="vision2 text">
                <h1 className="tab-heading">Manufacturing Engineering Co-Op</h1>
                <p className="term-text">
                  <span className="term-gradient">Magna Karmax</span> 
                </p>
                <p className="date-text"><strong>Date:</strong> June 2023 – August 2023</p>
                <p> • Operated 2,000-ton stamping presses to produce 45+ auto panels/shift, following SWI and hitting 80% uptime </p>
                <p> • Performed SPC inspections with ±0.25 mm tolerances, cutting scrap and boosting yield by 15% </p>
                <p> • Executed JIT inventory for dies/materials, achieving 98% schedule adherence and preventing line stoppages </p>
                <div className="flex-chips">
                  <span className="chip-title"><strong>Skills:</strong></span>
                  {labelsThird.map((label, index) => (
                    <Chip key={index} className='chip' label={label} />
                  ))}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;