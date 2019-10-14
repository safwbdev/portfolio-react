import React from 'react';
import { db } from "../../firebase";
import Education from './Education';

class EducationSection extends React.Component{

    constructor(){
        super();
        this.state = {
            education:[]
        }
    }
    componentDidMount() {
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
                        <h4>Education</h4>
                        <div className="col xl12 l12 m12 s12 slider-row">
                            <Education array={educationList}  />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};       
export default EducationSection