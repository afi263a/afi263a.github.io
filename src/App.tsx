import React, { useEffect } from "react";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Contact,
  Navigation,
  Footer,
} from "./components";
import FadeIn from './components/FadeIn';
import './index.scss';

function App() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="main-container light-mode">
      <Navigation />
      <FadeIn transitionDuration={700}>
        <Main />
        <Expertise mode="light" />
        <Timeline mode="light" />
        <Project mode="light" />
        <Contact />
      </FadeIn>
      <Footer mode="light" />
    </div>
  );
}

export default App;