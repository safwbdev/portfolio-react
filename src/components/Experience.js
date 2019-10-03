import React, { Component } from 'react';

class Experience extends React.Component{

    render(){
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
                            <div>{item.desc}</div>
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
desc:"Front End Web Development"},

{role:"Web Developer",
startDate:"August 2014",
endDate:"February 2017",
company:"Affinitti Direct SDN. BHD.",
location:"Singapore, Kuala Lumpur",
desc:"EVERYTHING"},

{role:"Intern Web Developer",
startDate:"February 2014",
endDate:"July 2014",
company:"MindValley SDN BHD",
location:"Kuala Lumpur",
desc:"Internship"},

{role:"Intern Web Designer",
startDate:"September 2008",
endDate:"May 2009",
company:"Simer Solutions SDN BHD",
location:"Kuala Lumpur Malaysia",
desc:"Internship pop"},

{role:"Freelance Web Developer",
startDate:"April 2006",
endDate:"August 2007",
company:"Sureplify SDN BHD",
location:"Kuala Lumpur, Malaysia",
desc:"Stuffsdfs"},
        ];
return(

    
    <div className="container">
        <div className="row">
        <h4>Work Experience</h4>
        <div className="col s12">
            {getExperience(experienceList)}

        
        
    </div>
    </div>
    </div>
    
    );
}
};

            
export default Experience