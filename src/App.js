import React from 'react';
import Intro from './components/Intro';
import SkillSection from './components/SkillsSection/SkillsIndex';
import Experience from './components/ExperienceSection/ExperienceIndex';
import Projects from './components/ProjectSection/ProjectIndex';
import Education from './components/EducationSection/EducationIndex';
// import Navbar from './components/Navbar';
import Footer from './components/Footer';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

import './App.scss';

library.add(fab,fas,far)


class App extends React.Component {
  render() {
    return (
      <div>
        {/* <Navbar /> */}
            <Intro />
            <Projects  />
            <SkillSection  />
            <Experience  />
            <Education  />
            <Footer />
      </div>
    );
  }
};

export default App;