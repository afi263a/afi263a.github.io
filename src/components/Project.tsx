import React, { useState, useEffect } from "react";
import Chip from '@mui/material/Chip';
import thumb1 from '../assets/images/piano.png';
import thumb3 from '../assets/images/CleanShot 2025-09-06 at 23.40.03@2x.png';
import thumb4 from '../assets/images/CleanShot 2025-09-06 at 23.42.44@2x.png';
import thumb5 from '../assets/images/CleanShot 2025-09-06 at 23.45.45@2x.png';
import thumb6 from '../assets/images/CleanShot 2025-09-06 at 23.48.25@2x.png';
import thumb8 from '../assets/images/CleanShot 2025-09-06 at 23.51.35@2x.png';
import thumb9 from '../assets/images/CleanShot 2025-09-08 at 23.15.03@2x.png';
import pic1 from '../assets/images/pianoproject.jpg';
import pic2 from '../assets/images/IMG_3799.jpg';
import pic3 from '../assets/images/Screenshot 2025-08-20 at 2.14.14 PM.png';
import pic4 from '../assets/images/Screenshot 2025-08-20 at 10.48.29 AM.png';
import pic5 from '../assets/images/Screenshot 2025-08-20 at 10.49.22 AM.png';
import pic6 from '../assets/images/base.jpg';
import pic7 from '../assets/images/Screenshot 2025-08-21 at 10.35.32 AM.png';
import pic8 from '../assets/images/Screenshot 2025-08-20 at 2.05.06 PM.png';
import pic9 from '../assets/images/Screenshot 2025-08-20 at 2.16.09 PM.png';
import pic24 from '../assets/images/Screenshot 2025-08-20 at 2.41.36 PM.png';
import pic25 from '../assets/images/Screenshot 2025-08-20 at 4.37.06 PM.png';
import pic26 from '../assets/images/Screenshot 2025-08-20 at 11.57.29 PM.png';
import pic31 from '../assets/images/IMG_3987.jpg';
import pic33 from '../assets/images/CleanShot 2025-09-08 at 20.38.33@2x.png';
import pic34 from '../assets/images/CleanShot 2025-09-08 at 20.41.12@2x.png';
import pic35 from '../assets/images/CleanShot 2025-09-08 at 20.58.44@2x.png';
import pic36 from '../assets/images/CleanShot 2025-09-08 at 21.06.08@2x.png';
import pic37 from '../assets/images/CleanShot 2025-09-08 at 21.08.04@2x.png';
import pic38 from '../assets/images/CleanShot 2025-09-08 at 21.15.44@2x.png';
import pic39 from '../assets/images/CleanShot 2025-09-08 at 21.32.41@2x.png';
import pic40 from '../assets/images/CleanShot 2025-09-08 at 21.32.54@2x.png';
import pic41 from '../assets/images/CleanShot 2025-09-08 at 21.33.04@2x.png';
import pic42 from '../assets/images/CleanShot 2025-09-08 at 21.54.51@2x.png';
import pic43 from '../assets/images/CleanShot 2025-09-08 at 21.55.29@2x.png';
import pic44 from '../assets/images/CleanShot 2025-09-08 at 22.04.05@2x.png';
import pic45 from '../assets/images/CleanShot 2025-09-08 at 23.17.55@2x.png';
import pic46 from '../assets/images/CleanShot 2025-09-08 at 23.18.52@2x.png';
import pic47 from '../assets/images/CleanShot 2025-09-08 at 23.55.52@2x.png';
import pic48 from '../assets/images/CleanShot 2025-09-09 at 00.00.46@2x.png';
import pic49 from '../assets/images/CleanShot 2025-09-09 at 00.22.41@2x.png';
import pic50 from '../assets/images/CleanShot 2025-09-09 at 00.24.31@2x.png';
import pic51 from '../assets/images/CleanShot 2025-09-09 at 00.25.57@2x.png';
import pic52 from '../assets/images/CleanShot 2025-09-09 at 00.29.44@2x.png';
import pic53 from '../assets/images/CleanShot 2025-09-09 at 00.33.10@2x.png';


import '../assets/styles/Project.scss';

interface ProjectSection {
  img?: string;
  text?: string;
  custom?: JSX.Element;
}

interface ProjectData {
  title: string;
  href: string;
  thumb: string;
  desc: string;
  tags: string[];
  role: string;
  skills: string[];
  date: string;
  content: ProjectSection[];
}

const projects: ProjectData[] = [
  {
    title: "⚙️ FX Turbine Upgrade",
    href: "https://eng-careers.weebly.com",
    thumb: thumb3,
    desc: "Upgraded a Siemens FX turbine and installed a hydrogen blending skid to support Ontario’s first hydrogen co-firing initiative. Mounted gas analyzers and tied them into the T3000 control system. Anchored the skid with threaded rods and mortar, routed control wiring to the turbine, and enabled CO₂ intensity reductions of up to 23% through 30–50% hydrogen blends.",
    tags: ["Electrical Wiring", "BoP"],
    role: "Mechanical Designer, Instrumentation Integrator",
    skills: ["Electrical Wiring, ", "Balance-of-Plant Installation, ", "Hydrogen Systems Commissioning"],
    date: "Summer 2025",
    content: [
      {
        img: thumb3,
      },
      {
        custom: (
          <>
            <br />
            <h2>The Hydrogen Skid Installation </h2>
            <div style={{ marginLeft: '20px' }}>
              <p>	•	Installed and structurally anchored hydrogen blending skid using threaded rods and mortar to ensure long-term stability (BoP installation)</p>
              <p>	•	Mounted and commissioned gas analyzers (Wobbe meter, conductivity meter) and integrated them with T3000 control system</p>
              <p>	•	Enabled 30–50% H₂ blends, reducing CO₂ intensity by 11–23% (-36 to -72 g/kWh), supporting path to 100% CO₂ eliminations</p>
              <div style={{ textAlign: 'center' }}>
                <img src= {pic33} alt="Tesla G-code Preview" style={{ maxWidth: '70%', height: 'auto' }} />
              </div>
              <p>	^ Routed 120V/24V wiring and terminated control wiring and instrumentation cabling from the hydrogen blending skid to the combustion turbine cabinets </p>
              <div style={{ textAlign: 'center' }}>
                <img src= {pic34} alt="Tesla G-code Preview" style={{ maxWidth: '70%', height: 'auto' }} />
              </div>
              <p>	^ H₂ Blending Skid Close Up: Installed, connected, and commissioned hydrogen blending skid subsystems. Anchored the skid with mortar + threaded rod to the concrete foundation. </p>
              <h2>CT Auxiliary System </h2>
              <p><strong>Turbine Cooling Air System</strong></p>
              <p>	• Replaced lower tubing that was previously bent to restore proper airflow measurement, ensuring first-time-right sealing and reliability under load.</p>
              <p>	• Insulated cooling air control valves using FX upgrade materials, ordering new blankets to fit original installation diameters.</p>
              <p> •	Straightened instrumentation tubing to the DAIS (Direct Air Injection System) solenoid valve and installed additional uni-strut supports to prevent bowing and maintain correct alignment under operating conditions. </p>
              <div style={{ textAlign: 'center' }}>
                <img src= {pic35} alt="Tesla G-code Preview" style={{ maxWidth: '70%', height: 'auto' }} />
              </div>
              <p> ^ <strong>Tubing:</strong> DAIS tubing weaves through the turbine enclosure</p>
              <p><strong>Generator Auxiliaries & Bearings</strong></p>
              <p> •	Inspected generator expansion joints for wear and confirmed no degradation.</p>
              <p> •	Troubleshot turbine end bearing signal failures by reseating connectors and verifying signal integrity to ensure predictive maintenance readiness.</p>
              <p><strong>Rotor Air Cooling (RAC) Circuit</strong></p>
              <p> •	Re-torqued 23 circuit flanges with new Lamons spiral wound gaskets and stainless steel star lock washers to correct prior under-torquing and prevent air leakage.</p>
              <p> •	Replaced customer-supplied studs and nuts on most flanges, improving joint integrity and reducing the risk of loosening under thermal cycling.</p>
              <p>	•	Calibrated torque wrench on a flange.</p>
              <h2>Static Excitation Equipment (SEE) Upgrade </h2>
              <p>	•	Modified floor panels and I-beam supports to accommodate a larger footprint.</p>
              <p>	•	Carried out full electrical commissioning (cable terminations, Megger insulation testing, ESA inspection, loop checks, parameter programming).</p>
              <p>	•	Supported PLC programmers to validate upgraded excitation logic, ensuring generator lifecycle reliability.</p>
              <div style={{ textAlign: 'center' }}>
                <img src= {pic36} alt="Tesla G-code Preview" style={{ maxWidth: '70%', height: 'auto' }} />
              </div>
              <p>	^<strong>New unit:</strong> Removed existing <strong>Thyprol</strong> Static Excitation System</p>
              <div style={{ textAlign: 'center' }}>
                <img src= {pic37} alt="Tesla G-code Preview" style={{ maxWidth: '70%', height: 'auto' }} />
              </div>
              <p>	^<strong>^SES Cabinet Floor Modification</strong></p>
              <br></br>
              <br></br>
              <br></br>
            </div>
          </>
        )
      }
    ]
  },
  {
    title: "🌀 Turbine Retrofit",
    href: "https://eng-careers.weebly.com",
    thumb: thumb4,
    desc: "Upgraded a Rolls-Royce turbine system by retrofitting the legacy hydraulic actuator with an electrical VGV actuator for improved stator vane control. Installed and aligned the actuator, performed terminations for 15 feedback/control signals, and routed shielded cables to enable real-time closed-loop feedback. Integrated the system with Siemens controls while ensuring safety in ATEX Zone 1.",
    tags: ["Terminations", "EMI Shielding"],
    role: "Controls Technician / Electrical Engineer",
    skills: ["Electrical Terminations, ", "LOTO Procedures, ", "EMI Shielding"],
    date: "Summer 2025",
    content: [
      {
        img: thumb4,
        custom: (
          <p><strong>↑ Turbine cross-section diagram</strong> (EGT cooling/sealing air)</p>
        )
      },
      {
        custom: (
          <>
            <br />
            <h2>🧠 What I Did</h2>
            <div style={{ marginLeft: '20px' }}>
              <p>• Removed hazardous <strong>piping systems</strong> (fuel oil, control oil, instrument air) in an ATEX Zone 1 environment, following strict LOTO and RAMS procedures</p>
              <p>• Installed and aligned the electrical actuator assembly between spherical rod-end bearings, achieving a precise <strong>actuator stroke</strong> and <strong>optimized stator vane</strong> positioning</p>             
              <p>The images shown below are <strong>representative examples</strong>. Due to confidentiality agreements, I am unable to share photographs of the Vendor/Model Name or provide detailed parameters.</p>
              <div style={{ textAlign: 'center' }}>
                <img src= {pic49} alt="Tesla G-code Preview" style={{ maxWidth: '70%', height: 'auto' }} />
              </div>
              <p><strong>↑ Control Cabinet Integration:</strong> Performed wiring terminations and organized signal routing within turbine auxiliary cabinets, ensuring safe, reliable actuator command and feedback signal transmission</p>
              <div style={{ textAlign: 'center' }}>
                <img src= {pic50} alt="Tesla G-code Preview" style={{ maxWidth: '70%', height: 'auto' }} />
              </div>
              <p><strong>↑ I/O Cabinet Validation</strong> w/ <strong>Allen Bradley PLC</strong>: Completed termination and testing of actuator control/feedback signals into system I/O racks, supporting closed-loop integration with turbine control systems</p>
              <div style={{ textAlign: 'center' }}>
                <img src= {pic51} alt="Tesla G-code Preview" style={{ maxWidth: '70%', height: 'auto' }} />
              </div>
              <p><strong>↑ Auxiliary Cabinet Work:</strong> Integrated actuator and analyzer signals into local control infrastructure, managing power distribution and I/O connections for reliable subsystem communication</p>
              <div style={{ textAlign: 'center' }}>
                <img src= {pic52} alt="Tesla G-code Preview" style={{ maxWidth: '70%', height: 'auto' }} />
              </div>
              <p><strong> Before:</strong> Legacy hydraulic lines connected to the VGV system</p>
              <p><strong> After:</strong> Completed VGV retrofit: electrical actuator coupled to vane ring assembly, enabling closed-loop digital control</p>
              <div style={{ textAlign: 'center' }}>
                <img src= {pic53} alt="Tesla G-code Preview" style={{ maxWidth: '70%', height: 'auto' }} />
              </div>
              <p><strong> ↑ Siemens' Drawing:</strong> Installation blueprint for actuator retrofit – mechanical mounting between trunnions, electrical terminations, and alignment for stroke precision</p>
            </div>
          </>
        )
      }
    ]
  },
  {
    title: "🛠️ Exhaust Bearing Extraction",
    href: "https://eng-careers.weebly.com",
    thumb: thumb8,
    desc: "This project involved retrofitting an existing oil seal box removal tool for use in extracting exhaust bearings from an F-class turbine. Originally designed for a different bolt pattern, the tool was incompatible with the target turbine’s exhaust bearing assembly. ",
    tags: ["Siemens NX", "DFM"],
    role: "Mechanical Designer",
    skills: ["Siemens NX, ", "DFM, ", "Mechanical Deisgn"],
    date: "Summer 2025",
    content: [
      {
        img: thumb8,
      },
      {
        custom: (
          <>
            <br />
            <h2>🧠 What I Did</h2>
            <div style={{ marginLeft: '20px' }}>
              <p>	• Analyzed the original tool assembly (purple brackets + hydraulic rams) and identified incompatibility due to bolt circle mismatch</p>
              <div style={{ textAlign: 'center' }}>
                <img src= {pic47} alt="Tesla G-code Preview" style={{ maxWidth: '70%', height: 'auto' }} />
              </div>
              <p><strong>↑ Circled Bolt Mismatch:</strong> Original tool bolt circle mismatch with exhaust bearing pattern</p>
              <p><strong>Redesigned bracket geometry:</strong> Extended mounting arms in Siemens NX to align with exhaust bearing bolt pattern</p>
              <p><strong>Modified ram cup interfaces:</strong> Handled new load points while maintaining axial alignment of extraction force</p>
              <div style={{ textAlign: 'center' }}>
                <img src= {pic48} alt="Tesla G-code Preview" style={{ maxWidth: '70%', height: 'auto' }} />
              </div>
              <p><strong>↑ Blue Rams/Purple brackets:</strong> Redesigned bracket and ram cup geometry in NX to accommodate new bolt pattern and extraction stroke</p>
              <p><strong>• Conducted interference/clearance checks</strong> (“x” mm offset) to ensure safe hydraulic stroke without damaging adjacent casing components.</p>
              <p><strong>• Delivered updated CAD models and drawings</strong> for fabrication</p>
            </div>
          </>
        )
      }
    ]
  },
  {
    title: "🎹 PianoBot",
    href: "https://www.filmate.club/",
    thumb: thumb1,
    desc: "PianoBot is an autonomous, LEGO-based robot capable of playing piano keys by interpreting color-coded sheet music. The robot combines precise mechanical design and sensor integration to achieve smooth and accurate performance.",
    tags: ["SolidWorks", "AutoCAD", "C++"],
    role: "Mechanical Designer, Programmer",
    skills: ["SolidWorks, ","AutoCAD, ", "C++, ", "3D Printing"],
    date: "Summer 2024",
    content: [
      {
        img: pic1
      },
      {
        custom: (
          <>
            <br />
            <h2>🧠 How It Works</h2>
            <div style={{ marginLeft: '20px' }}>
              <p>1. Start-Up & Arm Calibration</p>
              <p>2. Color Sheet Music Detection</p>
              <p>3. Matching Notes to Angles & Timing</p>
              <p>4. Arm Movement & Key Press Execution</p>
              <p>5. Repeat Until End of Song Detected</p>
            </div>
          </>
        )
      },
      {
        custom: (
          <>
            <details className="subsection">
              <summary><strong>⚙️ Mechanical Components</strong></summary>
              <p><strong>1. Finger Mechanism Design</strong></p>
              <p>
              Each robotic finger uses a 4-bar linkage with a geared motor to strike the keys accurately. The design ensures downward motion is linear and force is evenly distributed onto the piano keys.              </p>
              <div style={{ textAlign: 'center' }}>
                <img src= {pic7} alt="Tesla G-code Preview" style={{ maxWidth: '70%', height: 'auto' }} />
              </div>
              <p>
              This image shows a custom arm component that was first designed in AutoCAD and then precisely laser cut from acrylic. The part includes cross-shaped holes compatible with LEGO axles for motor mounting.             </p>
              <div style={{ textAlign: 'center' }}>
                <img src= {pic26} alt="Tesla G-code Preview" style={{ maxWidth: '70%', height: 'auto' }} />
              </div>
              <p>
              The fingers are powered by a gear system optimized for torque, converting high-speed motor output into controlled, powerful keystrokes. This protects the keys while allowing for consistent impact.              </p>
              <br />
              <p><strong> 2. Frame & Platform Structure </strong></p>
              <p>
              The entire system is supported by a LEGO Technic frame that provides structural stability. It includes built-in mounts and connectors for motors and sensors, ensuring proper alignment across all piano keys.              </p>
              <div style={{ textAlign: 'center' }}>
                <img src= {pic6} alt="Tesla G-code Preview" style={{ maxWidth: '70%', height: 'auto'}} />
              </div>
              <p>
              The gears in the center synchronize finger movements, transferring torque from the motors to ensure precise and coordinated key presses based on programmed timing.         </p>
              <div style={{ textAlign: 'center' }}>
                <img src= {pic31} alt="Tesla G-code Preview" style={{ maxWidth: '70%', height: 'auto'}} />
              </div>
              <br />
              <p><strong> 3. 3D Printed Components</strong></p>
              <p>
              Only the motor mounts and the left/right rollers used to feed the color-coded sheet music were 3D printed. These components were modeled in SolidWorks and printed in PLA.  </p>
              <div style={{ textAlign: 'center' }}>
                <img src= {pic4} alt="Tesla G-code Preview" style={{ maxWidth: '70%', height: 'auto' }} />
              </div>
              <p>
              The motor box houses the motor body, while pegs align and anchor it in place. The holes allow for easy attachment to the main chassis. A gusset is integrated to prevent flexing during rotation.  </p>
              <div style={{ textAlign: 'center' }}>
                <img src= {pic5} alt="Tesla G-code Preview" style={{ maxWidth: '70%', height: 'auto' }} />
              </div>
              <p>
              This cylindrical roller includes a central slot to securely hold the color-coded sheet music during rotation. It features peg connections and a LEGO axle-compatible hole.  </p>
              <div style={{ textAlign: 'center' }}>
                <img src= {pic25} alt="Tesla G-code Preview" style={{ maxWidth: '70%', height: 'auto' }} />
              </div>
              <p>
              With everything in place, the colour-coded sheet music is gradually rolled in as the motor spins to ensure each colour combination is read and stored in the database.</p>
            </details>
            <details className="subsection">
              <summary><strong>💻 Software Programming</strong></summary>
              <p><strong>1. Color Sensor Decoding</strong></p>
              <p>
              To interpret the sheet music, sensor readings are stored in two arrays (colour1 and colour2) and compared to predefined color combinations that correspond to specific notes.              </p>
              <div style={{ textAlign: 'center' }}>
                <img src= {pic3} alt="Tesla G-code Preview" style={{ maxWidth: '70%', height: 'auto' }} />
              </div>
              <br />
              <p>
              This function matches the current color sensor readings to a predefined color combination in colour1 and colour2. When a match is found, it stores the corresponding note value in the tempStoredValues array at the specified noteIndex. </p>
              <div style={{ textAlign: 'center' }}>
                <img src= {pic9} alt="Tesla G-code Preview" style={{ maxWidth: '70%', height: 'auto' }} />
              </div>
              <br />
              <p>
              This section defines arrays that map specific color sensor combinations to musical notes. Each colour1 and colour2 pair represents a unique note.       </p>
              <br />
              <p><strong>2. Finger Calibration & Control Logic</strong></p>
                <div style={{ textAlign: 'center' }}>
                <img src= {pic8} alt="Tesla G-code Preview" style={{ maxWidth: '80%', height: 'auto' }} />
              </div>
              <br />
              <p>
              The rotateArmAndPlay() function determines which arm (left or right) to move based on the note value. It then calculates the direction and distance to rotate from its current angle to the target, ensuring accuracy before playing the key.        </p>
              <div style={{ textAlign: 'center' }}>
                <img src= {pic24} alt="Tesla G-code Preview" style={{ maxWidth: '70%', height: 'auto' }} />
              </div>
              <br />
              <p>
              This function calibrates the left arm by lifting the finger, moving forward until the touch sensor is pressed, and setting that point as home. The right arm is manually calibrated due to limited ports.</p>
            </details>
          </>
        )
      },
      {
        custom: (
          <>
            <br />
            <h2>✅ Finished Product</h2>
            <p>
              With all components working in harmony, the piano bot delivered a 92% note accuracy across 10 trials of 70 notes each, bringing the project to life through precision and rhythm. </p>
              <video controls style={{ textAlign: 'center', maxWidth: '90%', marginTop: '10px' }}>
                <source src="/Piano.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
          </>
        )
      }
    ]
  },
  {
    title: "🚗 Composite Body Design",
    href: "https://eng-careers.weebly.com",
    thumb: pic38,
    desc: "Machined alignment features and coordinated epoxy resin infusion for the Midnight Sun Solar Car’s composite aerobody. Designed turn signal cutouts via surface modeling, trimmed panels to tolerance using bandsaws, and reduced resin layup errors by 30%. Final design raced in the 2024 Michigan competition, validating structure under real-world conditions.s ",
    tags: ["Manufacturing", "Design"],
    role: "Mechanical Designer",
    skills: ["Composite Manufacturing, ", "Mechanical Design, ", "Fabrication"],
    date: "Winter 2024",
    content: [
      {
        img: pic38,
      },
      {
        custom: (
          <>
            <br />
            <h2>🧠 What I Did</h2>
            <div style={{ marginLeft: '20px' }}>
              <p>I ensured precise measurements and tolerances based on technical drawings and used various tools, such as a vertical bandsaw and rotating saw to trim composite materials and ensure proper integration with the mechanical components.</p>
              <p>	• Machined alignment features for an 18ft by 16ft roof mold while maintaining structural integrity during composites layup</p>
              <div style={{ textAlign: 'center' }}>
                <img src= {pic39} alt="Tesla G-code Preview" style={{ maxWidth: '70%', height: 'auto' }} />
              </div>
              <strong><p>^ Support structure for roof mold </p></strong>
              <p>• Coordinated epoxy resin infusion by layer with vacuum downward pressure</p>
              <div style={{ textAlign: 'center' }}>
                <img src= {pic40} alt="Tesla G-code Preview" style={{ maxWidth: '70%', height: 'auto' }} />
              </div>
              <strong><p>^ Preparing for resin infusion layup with vaccuming </p></strong>
              <p>	• Designed stencil cutouts for side lights for signal indicators using surface modelling</p>
              <div style={{ textAlign: 'center' }}>
                <img src= {pic41} alt="Tesla G-code Preview" style={{ maxWidth: '70%', height: 'auto' }} />
              </div>
              <strong><p>^ Stencil cutout mount for tunrning signals</p></strong>
            </div>
            <h2>✅ Final Results</h2>
            <div style={{ marginLeft: '20px' }}>
              <p> • Roof mold was securely held during the composites layup operation </p>
              <p>	• Human operator error during resin infusion was reduced by 30%  </p>
              <p>	• The turning signal was successfully integrated into the aerobody</p>
            </div>
          </>
        )
      }
    ]
  },
  {
    title: "🃏 Card Dealing Robot",
    href: "https://eng-careers.weebly.com",
    thumb: thumb6,
    desc: "Engineered a motorized card-dealing robot using LEGO EV3 and Tetrix components, combining laser-cut and 3D-printed parts for a modular, reliable base. Integrated large and medium EV3 motors to push and consistently dispense cards using encoder feedback. Designed custom support legs, a motor base, and a rotating plate to ensure structural stability, even weight distribution, and smooth operation of the automated dealing process. ",
    tags: ["SolidWorks", "3D Printing", "C++"],
    role: "Mechanical Designer, Programmer",
    skills: ["SolidWorks, ", "Laser Cutting, ", "3D Printing, ", "C++"],
    date: "Winter 2024",
    content: [
      {
        img: thumb6,
      },
      {
        custom: (
          <>
            <br />
            <h2>🧠 How It Works</h2>
            <div style={{ marginLeft: '20px' }}>
              <div style={{ textAlign: 'center' }}>
                <img src= {pic42} alt="Tesla G-code Preview" style={{ maxWidth: '70%', height: 'auto' }} />
              </div>
              <p>		•	<strong>Card Holder Sides x 5:</strong> Laser cut sides supporting card weight, keeping cards stacked, and providing guidance during dealing.</p>
              <p>		•	Compact and sturdy frame constructed from LEGO elements from EV3 and Tetrix Kits</p>
              <p>		•	Laser-cut card holder and EV3 intelligent brick with motor and sensor supports.</p>
              <p>	•	Large motor pushes cards forward</p>
              <p>	•	Medium motor consistently delivers one card, using motor encoders</p>
              <div style={{ textAlign: 'center' }}>
                <img src= {pic43} alt="Tesla G-code Preview" style={{ maxWidth: '70%', height: 'auto' }} />
              </div>
              <p>		•	<strong>Motor Holding Base: </strong> 3D printed component housing the motor for spinning the top rotating plate and supporting the system’s weight.</p>
              <div style={{ textAlign: 'center' }}>
                <img src= {pic44} alt="Tesla G-code Preview" style={{ maxWidth: '70%', height: 'auto' }} />
              </div>
              <p>		•	<strong>Support Legs x 4: </strong> 3D printed legs providing support and containing bearings and dowels for top plate rotation.</p>
              <p>		•	<strong>Rotation Plate: </strong> Laser cut plate supporting the card dealing system’s weight and facilitating rotation of all components.</p>
            </div>
          </>
        )
      }
    ]
  }
  /*
{
  title: "🦾 Control Arm Jigs",
  href: "https://eng-careers.weebly.com",
  thumb: thumb5,
  desc: "Engineered a motorized toy that detects Nerf bullet impacts and responds with rotational motion. I contributed to the CAD design in SolidWorks and developed a gear system. I also leveraged 3D printing to produce custom components, assisted in Arduino-based motor control and impact detection, and integrated a slip ring to prevent wire twisting from continuous rotation.",
  tags: ["SolidWorks", "Arduino"],
  role: "Mechanical Designer, Programmer",
  skills: ["SolidWorks, ", "Laser Cutting, ", "Arduino"],
  date: "Fall 2023",
  content: [
    {
      img: pic2,
    },
    {
      custom: (
        <>
          <br />
          <h2>🧠 How It Works</h2>
          <div style={{ marginLeft: '20px' }}>
          </div>
        </>
      )
    }
  ]
}
*/,
  {
    title: "🧩 Pneumatic Maze",
    href: "https://eng-careers.weebly.com",
    thumb: thumb9,
    desc: "Designed and built a pneumatic-controlled maze using SolidWorks to model and laser cut the acrylic maze plane, mounted on a wooden base operated by syringes. The system leveraged principles of fluid dynamics and pneumatics to manipulate marble movement through precise air pressure control. Fabrication involved power tools including saws and milling cutters, and the project culminated in a technical report that earned a perfect score for its industry-grade documentation and collaborative design process.",
    tags: ["SolidWorks", "Laser Cutting"],
    role: "Mechanical Designer",
    skills: ["SolidWor, ", "Laser Cutting, ", "Power Saws"],
    date: "Fall 2023",
    content: [
      {
        img: pic45,
      },
      {
        custom: (
          <>
            <br />
            <h2>🧠 How It Works</h2>
            <div style={{ marginLeft: '20px' }}>
            <p> The design uses <strong>study of fluid dynamics</strong> by implementing pneumatic tubes to control maze planes and marble movements. </p>
              <div style={{ textAlign: 'center' }}>
                <img src= {pic46} alt="Tesla G-code Preview" style={{ maxWidth: '70%', height: 'auto' }} />
              </div>
              <p>		•	Designed a pneumatically actuated maze platform using syringes and tubing to control dynamic tilt at each corner based on player input, enhancing interactivity and fluid dynamics understanding</p>
              <p>		•	Integrated flexing paper accordions for structural stability and used child-safe, lightweight materials to ensure usability and robustness across configurations.</p>
            </div>
          </>
        )
      }
    ]
  }
];

export default function Project({ mode }: { mode: 'light' | 'dark' }) {
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    if (selected !== null) {
      const scrollY = window.scrollY;
      document.body.style.top = `-${scrollY}px`;
      document.body.classList.add("modal-open");
      document.body.setAttribute("data-scroll", scrollY.toString());
    } else {
      const scrollY = document.body.getAttribute("data-scroll");
      document.body.classList.remove("modal-open");
      document.body.style.top = "";
  
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY));
      }
  
      document.body.removeAttribute("data-scroll");
    }
  }, [selected]);

  return (
    <div className={`projects-container ${mode}`} id="projects">
      <h1>Projects</h1>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <div key={i} className="project" onClick={() => setSelected(i)}>
            <img src={p.thumb} alt={p.title} />
            <h2>{p.title}</h2>
            <div className="flex-chips-preview">
              <div className="chip-container">
                {p.tags.map((tag, idx) => (
                  <Chip key={idx} className="chip" label={tag} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selected !== null && (
        <div className="project-modal" onClick={() => setSelected(null)}>
          <div className="modal-backdrop" />
          <div className={`modal-card ${mode}`} onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelected(null)}>
              &times;
            </button>

            <div className="modal-section">
              <h2>{projects[selected].title}</h2>
            </div>

            {/* ✅ New Meta Section */}
            <div className="modal-section project-meta">
              <div><strong>👤 Role:</strong> {projects[selected].role}</div>
              <div><strong>🗓️ Date:</strong> {projects[selected].date}</div>
              <div><strong>🔧 Skills:</strong> {projects[selected].skills}</div>
            </div>

            <div className="modal-section">
              <h3>Overview</h3>
              <p>{projects[selected].desc}</p>
              {projects[selected].content.map((section, idx) => (
                <div key={idx} className="gallery-item">
                {section.img && <img src={section.img} alt={`Screenshot ${idx + 1}`} />}
                {section.text && <p>{section.text}</p>}
                {section.custom && section.custom}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}