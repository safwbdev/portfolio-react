import React from 'react';
import Intro from './components/IntroSection/IntroIndex';
import Skills from './components/SkillsSection/SkillsIndex';
import Experience from './components/ExperienceSection/ExperienceIndex';
import Projects from './components/ProjectSection/ProjectIndex';
import Education from './components/EducationSection/EducationIndex';
import Footer from './components/Footer';

import { db } from "./firebase";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

import './App.scss';

library.add(fab,fas,far)


class App extends React.Component {
  constructor(){
    super();
    this.state = {
        basicSkills:[],
        loading:true
    }
}
componentDidMount() {
    db.collection("personal")
        .get()
        .then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data());
                this.setState({
                    fName:data[0].fullName,
                    designation: data[0].designation,
                    tel: data[0].tel,
                    email: data[0].email,
                    address: data[0].address,
                    github: data[0].githubUrl,
                    linkedin: data[0].linkedinUrl,
                    image: data[0].image,
                    desc: data[0].desc,
                    loading:false
                })
        });
}
  render() {
    // return (
      return this.state.image ==null ? (
        <div className="loadScreen">
            <p>Loading...</p>
        </div>
    ) : (
      <div>
            <Intro
            fName={this.state.fName}
            designation={this.state.designation}
            tel={this.state.tel}
            email={this.state.email}
            address={this.state.address}
            github={this.state.github}
            linkedin={this.state.linkedin}
            image={this.state.image}
            desc={this.state.desc}
             />
            <Projects  />
            <Skills  />
            <Experience  />
            <Education  />
            <Footer
            tel={this.state.tel}
            email={this.state.email}
            github={this.state.github}
            linkedin={this.state.linkedin}
             />
      </div>
    );
  }
};

export default App;