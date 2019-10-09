import React from 'react';
import { db } from "../firebase";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Skills extends React.Component{

    constructor(){
        super();
        this.state = {
            basicSkills:[],
            techSkills:[],
            frameworkSkills:[],
            databaseSkills:[],
            cmsSkills:[],
            osSkills:[],
            toolSkills:[],
            designSkills:[],
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

        return(
            <div className="skills-section">
                <div className="container">
                    <div className="row">
                        <h4>Skills</h4>
                        <div className="col s12">
                            {getSkills("Essentials", "Essentials", "indigo lighten-4", basicSkills)}
                            {getSkills("Technical", "Technical", "blue lighten-3", basicSkills)}
                            {getSkills("Frameworks & Libraries", "Framework", "lime", basicSkills)}
                            {getSkills("Database", "Database", "yellow", basicSkills)}
                            {getSkills("Content Mangement Systems", "CMS", "orange lighten-2", basicSkills)}
                            {getSkills("Operating Systems", "OS", "red lighten-2", basicSkills)}
                            {getSkills("Tools", "Tools", "purple lighten-4", basicSkills)}
                            {getSkills("Design", "Design", "purple lighten-3", basicSkills)}
                        </div>
                    </div>
                </div>
            </div>
        );

        function getSkills(title, skillType, color, array) {
            return  <div className="row">
                        <h6>{title}</h6>
                            {array.map(function(item, key){
                                if(item.skill_type === skillType){
                                    return <span className={color + " chip"}  key={ key }>
                                                <FontAwesomeIcon icon={[item.skill_icon[0], item.skill_icon[1]]} />&nbsp;&nbsp;{item.skill_name}
                                            </span>;
                                }
                            })}
                    </div>
        }
    }
};         
export default Skills