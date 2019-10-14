import React from 'react';
import { db } from "../../firebase";
import Skills from './Skills';

class SkillsIndex extends React.Component{

    constructor(){
        super();
        this.state = {
            basicSkills:[]
        }
    }
    componentDidMount() {
        db.collection("skills")
        .orderBy('skill_name', 'asc')
        .get()
        .then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data());
            this.setState({ 
                basicSkills: this.state.basicSkills.concat(data) 
            })                
        });
    }

    render(){
        const basicSkills = this.state.basicSkills;
        const skillDetails = [
            {title:"Essentials", type:"Essentials", style:"indigo lighten-4"},
            {title:"Technical", type:"Technical", style:"blue lighten-3"},
            {title:"Frameworks & Libraries", type:"Framework", style:"lime"},
            {title:"Database", type:"Database", style:"yellow"},
            {title:"Content Mangement Systems", type:"CMS", style:"orange lighten-2"},
            {title:"Operating Systems", type:"OS", style:"red lighten-2"},
            {title:"Tools", type:"Tools", style:"purple lighten-4"},
            {title:"Design", type:"Design", style:"purple lighten-3",}
        ]

        return(
            <div className="skills-section">
                <div className="container">
                    <div className="row">
                        <h4>Skills</h4>
                        <div className="col s12">
                            {skillDetails.map(function(item, key){
                                return <Skills 
                                        title={item.title} 
                                        type={item.type} 
                                        style={item.style} 
                                        array={basicSkills} 
                                        key={key} />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};         
export default SkillsIndex