import React, { Component } from 'react';

class Skills extends React.Component{

    render(){
        function getSkills(title, skillType, color, array) {
            return  <div className="row">
                <h6>{title}</h6>
                <div>
                    {array.map(function(item, key){
                        if(item.type === skillType)
                        return <span className={color + " chip"}  key={ key }>{item.name}</span>;
                    })}
                </div>
            </div>
        }
        const basicSkills =[
            {position_id:1, name:"AJAX", icon:"fas fa-code", type:"essentials"},
            {position_id:1, name:"Agile software development", icon:"fas fa-code", type:"essentials"},
            {position_id:1, name:"Coding & Programming", icon:"fas fa-code", type:"essentials"},
            {position_id:1, name:"Content Management Systems", icon:"fas fa-code", type:"essentials"},
            {position_id:1, name:"Cross Browser Platform Compatibility", icon:"fas fa-code", type:"essentials"},
            {position_id:1, name:"Hosting & Maintenance", icon:"fas fa-code", type:"essentials"},
            {position_id:1, name:"MEAN/MERN/MERV/JAM Stack", icon:"fas fa-code", type:"essentials"},
            {position_id:1, name:"MVC", icon:"fas fa-code", type:"essentials"},
            {position_id:1, name:"Object Oriented Programming", icon:"fas fa-code", type:"essentials"},
            {position_id:1, name:"Project Management", icon:"fas fa-code", type:"essentials"},
            {position_id:1, name:"SEO", icon:"fas fa-code", type:"essentials"},
            {position_id:1, name:"Site Troubleshooting", icon:"fas fa-code", type:"essentials"},
            {position_id:1, name:"UI/UX Design", icon:"fas fa-code", type:"essentials"},
            {position_id:1, name:"Web Development", icon:"fas fa-code", type:"essentials"},

            {position_id:1, name: "CSS", icon:"fas fa-code", type:"technical"},
            {position_id:1, name: "HTML", icon:"fas fa-code", type:"technical"},
            {position_id:1, name: "JQuery", icon:"fas fa-code", type:"technical"},
            {position_id:1, name: "Java", icon:"fas fa-code", type:"technical"},
            {position_id:1, name: "JavaScript", icon:"fas fa-code", type:"technical"},
            {position_id:1, name: "Node.js", icon:"fas fa-code", type:"technical"},
            {position_id:1, name: "PHP", icon:"fas fa-code", type:"technical"},
            {position_id:1, name: "Sass/Scss", icon:"fas fa-code", type:"technical"},

           
            {position_id:1, name:"Angular JS", icon:"fas fa-code", type:"framework"},
            {position_id:1, name:"Bootstrap", icon:"fas fa-code", type:"framework"},
            {position_id:1, name:"Code Igniter", icon:"fas fa-code", type:"framework"},
            {position_id:1, name:"Code Igniter", icon:"fas fa-code", type:"framework"},
            {position_id:1, name:"Express JS", icon:"fas fa-code", type:"framework"},
            {position_id:1, name:"Material UI/CSS", icon:"fas fa-code", type:"framework"},
            {position_id:1, name:"Mocha", icon:"fas fa-code", type:"framework"},
            {position_id:1, name:"React JS", icon:"fas fa-code", type:"framework"},
            {position_id:1, name:"React Redux", icon:"fas fa-code", type:"framework"},
            {position_id:1, name:"Svelte", icon:"fas fa-code", type:"framework"},
            {position_id:1, name:"Tailwind CSS", icon:"fas fa-code", type:"framework"},
            {position_id:1, name:"UI Fabric", icon:"fas fa-code", type:"framework"},
            {position_id:1, name:"Vue JS | Vuetify", icon:"fas fa-code", type:"framework"},
            {position_id:1, name:"Zurb Foundation", icon:"fas fa-code", type:"framework"},
            {position_id:1, name:"jQuery UI", icon:"fas fa-code", type:"framework"},

           
            {position_id:1, name:"FireBase/FireStore", icon:"fas fa-code", type:"database"},
            {position_id:1, name:"GraphQL", icon:"fas fa-code", type:"database"},
            {position_id:1, name:"MongoDB", icon:"fas fa-code", type:"database"},
            {position_id:1, name:"MySQL", icon:"fas fa-code", type:"database"},

           
            {position_id:1, name:"Drupal", icon:"fas fa-code", type:"cms"},
            {position_id:1, name:"Joomla", icon:"fas fa-code", type:"cms"},
            {position_id:1, name:"Wix", icon:"fas fa-code", type:"cms"},
            {position_id:1, name:"WordPress", icon:"fas fa-code", type:"cms"},

           
            {position_id:1, name:"Adobe", icon:"fas fa-icon", type:"tool"},
            {position_id:1, name:"Atom", icon:"fas fa-icon", type:"tool"},
            {position_id:1, name:"FTP (WinSCP/Filezilla)", icon:"fas fa-icon", type:"tool"},
            {position_id:1, name:"Git", icon:"fas fa-icon", type:"tool"},
            {position_id:1, name:"LAMP (Ampps, WAMP)", icon:"fas fa-icon", type:"tool"},
            {position_id:1, name:"NPM/Yarn", icon:"fas fa-icon", type:"tool"},
            {position_id:1, name:"Postman", icon:"fas fa-icon", type:"tool"},
            {position_id:1, name:"Sourcetree", icon:"fas fa-icon", type:"tool"},
            {position_id:1, name:"VS Code", icon:"fas fa-icon", type:"tool"},

           
            {position_id:1, name:"Mac OS", icon:"fas fa-icon", type:"os"},
            {position_id:1, name:"UNIX", icon:"fas fa-icon", type:"os"},
            {position_id:1, name:"Windows", icon:"fas fa-icon", type:"os"},

           
            {position_id:1, name:"Audacity", icon:"fas fa-icon", type:"design"},
            {position_id:1, name:"Figma", icon:"fas fa-icon", type:"design"},
            {position_id:1, name:"Photoshop", icon:"fas fa-icon", type:"design"},
        ];
return(

    
    <div className="container">
        <div className="row">
        <h4>Skills</h4>
        <div className="col s12">
        {getSkills("Areas of Expertise", "essentials", "blue lighten-3", basicSkills)}
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
}
};

            
export default Skills