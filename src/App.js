import React from 'react';
import Intro from './components/Intro';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
// import Navbar from './components/Navbar';
import './App.scss';




class App extends React.Component {
  render() {
    return (
      <div>
        {/* <Navbar /> */}
            <Intro
            />
            <Projects  />
            <Skills  />
            <div className="container">
              <div className="row">
                <Experience  />
                <Education  />
              </div>
            </div>
      </div>
    );
  }
};

export default App;