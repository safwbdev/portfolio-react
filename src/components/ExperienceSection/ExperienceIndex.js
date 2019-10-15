import React from 'react';
import { db } from "../../firebase";
import Experience from './Experience';
import WOW from "wowjs";

class ExperienceIndex extends React.Component{
    constructor(){
        super();
        this.state = {
            experience:[]
        }
    }
    componentDidMount() {
        const wow = new WOW.WOW();
        wow.init();
        db.collection("experience")
        .orderBy('work_start', 'desc')
        .get()
        .then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data());
            this.setState({ 
                experience: this.state.experience.concat(data) 
            })                
        });
    }

    render(){
        const experienceList = this.state.experience;

        return(
            <div className="work-section">
                <div className="container">
                    <div className="row">
                        <h4 className="wow fadeIn">Work Experience</h4>
                        <div className="col xl12 l12 m12 s12 slider-row">
                            <Experience array={experienceList} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};
export default ExperienceIndex