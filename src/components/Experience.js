import React from 'react';
import { db } from "../firebase";
import Moment from 'react-moment';

class Experience extends React.Component{
    constructor(){
        super();
        this.state = {
            experience:[]
        }
    }
    componentDidMount() {
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
                        <h4>Work Experience</h4>
                        {getExperience(experienceList)}
                    </div>
                </div>
            </div>
        )

        function getExperience(array) {
            return  <div>
                        {array.map(function(item, key){
                            return <div className="work row col xl12 l12 m12 s12" key={ key }>
                                        <div className="work-detail">
                                            <span className="position">{item.work_position}</span><span className="hide-on-small-only"> | </span><br className="hide-on-large-only" /><span className="duration"> <Moment format="MMMM YYYY">{item.work_start}</Moment> -  <Moment format="MMMM YYYY">{item.work_end}</Moment></span>
                                        </div>
                                        <div className="work-detail">
                                            <span className="company">{item.work_name}</span><span className="hide-on-small-only"> | </span><br className="hide-on-large-only" /><span className="location">{item.work_location}</span>
                                        </div>
                                        <div className="desc">
                                            {getDesc(item.work_desc)}
                                        </div>
                                    </div>;
                        })}
                    </div>
        }

        function getDesc(array) {
            return <ul>
                {array.map(function(item, key){
                        return <li key={ key }>{item}</li> ;
                    })}
            </ul>
        }
    }
};
export default Experience