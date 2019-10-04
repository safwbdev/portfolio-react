import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Skills extends React.Component{

    render(){
        const basicSkills =[
            {position_id:1, name:"AJAX", icon:["fas","code"], type:"essentials"},
            {position_id:1, name:"Agile software development", icon:["fas","code"], type:"essentials"},
            {position_id:1, name:"Coding & Programming", icon:["fas","code"], type:"essentials"},
            {position_id:1, name:"Content Management Systems", icon:["fas","desktop"], type:"essentials"},
            {position_id:1, name:"Cross Browser Platform Compatibility", icon:["fas","window-restore"], type:"essentials"},
            {position_id:1, name:"Hosting & Maintenance", icon:["fas","server"], type:"essentials"},
            {position_id:1, name:"MEAN/MERN/MERV/JAM Stack", icon:["fas","layer-group"], type:"essentials"},
            {position_id:1, name:"MVC", icon:["fas","project-diagram"], type:"essentials"},
            {position_id:1, name:"Object Oriented Programming", icon:["fas","code"], type:"essentials"},
            {position_id:1, name:"Project Management", icon:["fas","clipboard-list"], type:"essentials"},
            {position_id:1, name:"SEO", icon:["fas","search"], type:"essentials"},
            {position_id:1, name:"Site Troubleshooting", icon:["fas","tools"], type:"essentials"},
            {position_id:1, name:"UI/UX Design", icon:["fas","pencil-ruler"], type:"essentials"},
            {position_id:1, name:"Web Development", icon:["fas","code"], type:"essentials"},
            
            {position_id:1, name:"CSS3", icon:["fab","css3-alt"], type:"technical"},
            {position_id:1, name:"HTML5", icon:["fab","html5"], type:"technical"},
            {position_id:1, name:"JQuery", icon:["fas","code"], type:"technical"},
            {position_id:1, name:"Java", icon:["fab","java"], type:"technical"},
            {position_id:1, name:"JavaScript", icon:["fab","js"], type:"technical"},
            {position_id:1, name:"Node.js", icon:["fab","node"], type:"technical"},
            {position_id:1, name:"PHP", icon:["fab","php"], type:"technical"},
            {position_id:1, name:"Sass/Scss", icon:["fab","sass"], type:"technical"},
           
            {position_id:1, name:"Angular JS", icon:["fab","angular"], type:"framework"},
            {position_id:1, name:"Animate CSS", icon:["fas","code"], type:"framework"},
            {position_id:1, name:"Bootstrap", icon:["fab","bootstrap"], type:"framework"},
            {position_id:1, name:"Code Igniter", icon:["fas","code"], type:"framework"},
            {position_id:1, name:"Express JS", icon:["fas","code"], type:"framework"},
            {position_id:1, name:"jQuery UI", icon:["fas","code"], type:"framework"},
            {position_id:1, name:"Material UI/CSS", icon:["fas","code"], type:"framework"},
            {position_id:1, name:"Mocha", icon:["fas","code"], type:"framework"},
            {position_id:1, name:"React JS", icon:["fab","react"], type:"framework"},
            {position_id:1, name:"React Redux", icon:["fab","react"], type:"framework"},
            {position_id:1, name:"Svelte", icon:["fas","code"], type:"framework"},
            {position_id:1, name:"Tailwind CSS", icon:["fas","code"], type:"framework"},
            {position_id:1, name:"UI Fabric", icon:["fas","code"], type:"framework"},
            {position_id:1, name:"Vue JS", icon:["fab","vuejs"], type:"framework"},
            {position_id:1, name:"Vuetify", icon:["fab","vuejs"], type:"framework"},
            {position_id:1, name:"WOW JS", icon:["fas","code"], type:"framework"},
            {position_id:1, name:"Zurb Foundation", icon:["fas","code"], type:"framework"},

           
            {position_id:1, name:"FireBase/FireStore", icon:["fas","database"], type:"database"},
            {position_id:1, name:"GraphQL", icon:["fas","database"], type:"database"},
            {position_id:1, name:"MongoDB", icon:["fas","database"], type:"database"},
            {position_id:1, name:"MySQL", icon:["fas","database"], type:"database"},

           
            {position_id:1, name:"Drupal", icon:["fab","drupal"], type:"cms"},
            {position_id:1, name:"Joomla", icon:["fab","joomla"], type:"cms"},
            {position_id:1, name:"Wix", icon:["fab","wix"], type:"cms"},
            {position_id:1, name:"WordPress", icon:["fab","wordpress"], type:"cms"},

           
            {position_id:1, name:"Adobe", icon:["fab","adobe"], type:"tool"},
            {position_id:1, name:"Atom", icon:["fas","file-code"], type:"tool"},
            {position_id:1, name:"FTP (WinSCP/Filezilla)", icon:["fas","file-upload"], type:"tool"},
            {position_id:1, name:"Git", icon:["fab","git-alt"], type:"tool"},
            {position_id:1, name:"Gitkraken", icon:["fab","gitkraken"], type:"tool"},
            {position_id:1, name:"LAMP (Ampps, MAMP, WAMP)", icon:["fab","drupal"], type:"tool"},
            {position_id:1, name:"NPM/Yarn", icon:["fas","terminal"], type:"tool"},
            {position_id:1, name:"Postman", icon:["fas","file-import"], type:"tool"},
            {position_id:1, name:"Sourcetree", icon:["fab","atlassian"], type:"tool"},
            {position_id:1, name:"VS Code", icon:["fas","file-code"], type:"tool"},

           
            {position_id:1, name:"Mac OS", icon:["fab","apple"], type:"os"},
            {position_id:1, name:"UNIX", icon:["fas","terminal"], type:"os"},
            {position_id:1, name:"Windows", icon:["fab","windows"], type:"os"},

           
            {position_id:1, name:"Audacity", icon:["fas","file-audio"], type:"design"},
            {position_id:1, name:"Figma", icon:["fab","figma"], type:"design"},
            {position_id:1, name:"Photoshop", icon:["fab","adobe"], type:"design"},
        ];
        return(
            <div className="container skills-section">
                <div className="row">
                    <h4>Skills</h4>
                    <div className="col s12">
                        {getSkills("Areas of Expertise", "essentials", "indigo lighten-4", basicSkills)}
                        {getSkills("Technical", "technical", "blue lighten-3", basicSkills)}
                        {getSkills("Frameworks & Libraries", "framework", "lime", basicSkills)}
                        {getSkills("Database", "database", "yellow", basicSkills)}
                        {getSkills("Content Mangement Systems", "cms", "orange lighten-2", basicSkills)}
                        {getSkills("Operating Systems", "os", "red lighten-2", basicSkills)}
                        {getSkills("Tools", "tool", "purple lighten-4", basicSkills)}
                        {getSkills("Design", "design", "purple lighten-3", basicSkills)}
                    </div>
                </div>
            </div>
        );

        function getSkills(title, skillType, color, array) {
            return  <div className="row">
                        <h6>{title}</h6>
                        <div>
                            {array.map(function(item, key){
                                if(item.type === skillType)
                                return <span className={color + " chip"}  key={ key }><FontAwesomeIcon icon={[item.icon[0], item.icon[1]]} />&nbsp;&nbsp;{item.name}</span>;
                            })}
                        </div>
                    </div>
        }
    }
};         
export default Skills