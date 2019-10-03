import React, { Component } from 'react';

class Experience extends React.Component{

    render(){
        function getDesc(array) {
            return <ul>
                {array.map(function(item, key){
                        return <li>{item}</li> ;
                    })}
            </ul>
        }
        function getExperience(array) {
            return  <div >
                    {array.map(function(item, key){
                        return <div className="work row col xl12 l12 m12 s12" key={ key }>
                            <div>
                                <span className="position"  >{item.role}</span> | <span className="duration">{item.startDate} - {item.endDate}</span>

                            </div>
                            <div>
                                <span className="company">{item.company}</span> | <span>{item.location}</span>
                            </div>
                            <div>{getDesc(item.desc)}</div>
                                </div>;
                    })}
            </div>
        }


        const experienceList =[
{role:"Web Developer",
startDate:"October 2017",
endDate:"November 2019",
company:"Packist.com (Beautiful World Tours & Travel Sdn. Bhd.)",
location:"Kuala Lumpur",
desc:[
    "Front-End Web Development",
    "Design & Build mockups",
    "Apply new designs onto website",
    "Testing",
    "Troubleshooting",
    "Website Maintenance",
    "UI/UX Design",
    "Ensure responsive web design for cross browser platforms and devices",
    "Graphic Design",
    "IT Support",
    "Work with devOps team to ensure that requirements are met.",

]},

{role:"Web Developer",
startDate:"August 2014",
endDate:"February 2017",
company:"Affinitti Direct SDN. BHD.",
location:"Singapore, Kuala Lumpur",
desc:[
"Web Development (Front-End/Back-End)",
"Build and maintain Wordpress websites for clients",
"Maintain clients’ websites (not built by the company)",
"Work with a team of designers to ensure that requirements are met.",
"Build HTML email templates",
"Graphic Design",
"System Analysis",
"Testing and troubleshooting",
"Hosting & Maintenance",
"IT Support",

]},

{role:"Intern Web Developer",
startDate:"February 2014",
endDate:"July 2014",
company:"MindValley SDN BHD",
location:"Kuala Lumpur",
desc:["Web Development"]},

{role:"Intern Web Designer",
startDate:"September 2008",
endDate:"May 2009",
company:"Simer Solutions SDN BHD",
location:"Kuala Lumpur Malaysia",
desc:[
    "Web Design",
    "UI Design",
    "Graphic Design",

]},

{role:"Freelance Web Developer",
startDate:"April 2006",
endDate:"August 2007",
company:"Sureplify SDN BHD",
location:"Kuala Lumpur, Malaysia",
desc:[
    "Sister company of Packist, where I assist on working on their website",
    "Teams from both companies cooperate with each other on web development and offer assistance when needed",
    "Ensure responsive web design for cross browser platforms and devices",
    "Build static mockups",
    "Testing & troubleshooting",
]},
        ];
return(

    
    <div className="row col xl6 l6 m12 s12">
    <div className="section">
        <div className="row">
        <h4>Work Experience</h4>
        <div className="col s12">
            {getExperience(experienceList)}

        
        
    </div>
    </div>
    </div>
    </div>
    
    );
}
};

            
export default Experience