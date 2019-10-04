import React from 'react';

class Education extends React.Component{

    render(){
        function getEducation(array) {
            return  <div >
                    {array.map(function(item, key){
                        return <div class="school row col xl12 l12 m12 s12" key={ key }>
                                    <div>
                                        <span class="grad-year">{item.gradDate}</span> | <span class="field">{item.level}</span>
                                    </div>
                                    <div>
                                        <span class="name">{item.intitute}</span> | <span class="location">{item.location}</span>
                                    </div>
                                </div>;
                    })}
            </div>
        }


        const educationList =[
            {gradDate:"2013-01-01",
            level:"Masters of Technology (Internet & Web Computing)",
            intitute:"RMIT (Royal Melbourne Institute of Technology)",
            location:"Melbourne, Australia"},
            {gradDate:"2009-01-01",
            level:"Multimedia Systems",
            intitute:"Lancaster University (Twinning with Sunway University)",
            location:"Kuala Lumpur, Malaysia"},
            {gradDate:"2007-01-01",
            level:"Diploma in IT",
            intitute:"Sunway University",
            location:"Kuala Lumpur, Malaysia"},
        ];
return(
    <div className="row col xl6 l6 m12 s12">
    <div className="section">
        <div className="row">
            <h4>Education</h4>
            <div className="col s12">
                {getEducation(educationList)}
            </div>
        </div>
    </div>
    </div>
    );
}
};

            
export default Education