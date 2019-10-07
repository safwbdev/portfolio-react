import React from 'react';

class Education extends React.Component{

    render(){
        const educationList =[
            {
                gradDate:"2013",
                level:"Masters of Technology (Internet & Web Computing)",
                intitute:"RMIT (Royal Melbourne Institute of Technology)",
                location:"Melbourne, Australia"
            },
            {
                gradDate:"2009",
                level:"Multimedia Systems",
                intitute:"Lancaster University (Twinning with Sunway University)",
                location:"Kuala Lumpur, Malaysia"
            },
            {
                gradDate:"2007",
                level:"Diploma in Interactive Media",
                intitute:"Sunway University",
                location:"Kuala Lumpur, Malaysia"
            },
        ];

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
                                        <span className="grad-year">{item.gradDate}</span> | <span className="field">{item.level}</span>
                                    </div>
                                    <div>
                                        <span className="name">{item.intitute}</span> | <span className="location">{item.location}</span>
                                    </div>
                                </div>;
                    })}
            </div>
        }
    }
};       
export default Education