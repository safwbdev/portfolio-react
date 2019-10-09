import React from 'react';
import { db } from "../firebase";
import Moment from 'react-moment';

class Education extends React.Component{

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
                            {getEducation(educationList)}
                        </div>
                    </div>
                </div>
        );

        function getEducation(array) {
            return  <div >
                    {array.map(function(item, key){
                        return <div className="school row col xl12 l12 m12 s12" key={ key }>
                                    <div>
                                        <span className="grad-year">
                                            <Moment format="YYYY">{item.edu_end}</Moment>
                                        </span> | <span className="field">{item.edu_field}</span>
                                    </div>
                                    <div>
                                        <span className="name">{item.edu_name}</span> | <span className="location">{item.edu_location}</span>
                                    </div>
                                </div>;
                    })}
            </div>
        }
    }
};       
export default Education