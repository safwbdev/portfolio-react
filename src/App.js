import React from 'react';
import Intro from './components/Intro';
import Skills from './components/Skills';
import Experience from './components/Experience';
// import Navbar from './components/Navbar';
import './App.scss';




class App extends React.Component {
  state = {
    fullName:"John Doe",
    designation:"Web Developer",
    phone:"0123456789",
    email:"john@email.com",
    address:"Evergreen terrace",
    github:"github link",
    linkedin:"linkedin link",
    image:"https://previews.123rf.com/images/eugenesergeev/eugenesergeev1605/eugenesergeev160500180/56871195-bearded-man-smoking-cigar-outdoor-square-portrait-with-selective-focus.jpg",
    desc:"Prolific, full stack web developer with a passion for metrics and beating former 'best-yets.' Prototyped 25 new product features per year for Flexor, Inc. Decreased rework by 22% and costs by 15%. Consistently receive high user experience scores for all web development projects, including a 55% increase for Flexor, Inc. Passionate about building world class web applications. One of my sites received a 2015 Webby for Best Navigation and Structure.",
    basicSkills: [
      {id: 35, item: 'jumper', color: 'red', size: 'medium', price: 20},
      {id: 42, item: 'shirt', color: 'blue', size: 'medium', price: 15},
      {id: 71, item: 'socks', color: 'black', size: 'all', price: 5}
    ],
  }
  
  render() {
    return (
      <div>
        {/* <Navbar /> */}
            <Intro
              // fullName={this.state.fullName}
              // designation={this.state.designation}
              // phone={this.state.phone}
              // email={this.state.email}
              // address={this.state.address}
              // github={this.state.github}
              // linkedin={this.state.linkedin}
              // image={this.state.image}
              // desc={this.state.desc}
            />
            <Skills  />
            <Experience  />
      </div>
    );
  }
};

export default App;