import React from 'react';
import { db } from "../../firebase";
import Education from './Education';
import WOW from "wowjs";

class EducationIndex extends React.Component{

    constructor(){
        super();
        this.state = {
            education:[]
        }
    }
    componentDidMount() {
        const wow = new WOW.WOW();
        wow.init();
        db.collection("education")
        .orderBy('edu_end', 'desc')
        .get()
        .then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data());
            this.setState({ 
                education: this.state.education.concat(data) 
            })                
        });
    }
    
    render(){
        const educationList = this.state.education;

        return(
            <div className="school-section">
                <div className="container">
                    <div className="row">
                        <h4 className="wow fadeIn">Education</h4>
                        <div className="col xl12 l12 m12 s12 slider-row">
                            <Education array={educationList}  />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};       
export default EducationIndex