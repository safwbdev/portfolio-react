import React from 'react';
import { db } from "../../firebase";
import Project from './Project';
import WOW from "wowjs";

class ProjectIndex extends React.Component{

    constructor(){
        super();
        this.state = {
            clientProjects:[],
            personalProjects:[],
        }
    }
    componentDidMount() {
        const wow = new WOW.WOW();
        wow.init();

        db.collection("projects")
        .where("project_type", "==", "Client")
        .get()
        .then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data());
            this.setState({
                clientProjects: this.state.clientProjects.concat(data) 
            })
        });

        db.collection("projects")
        .where("project_type", "==", "Personal")
        .get()
        .then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data());
            this.setState({
                personalProjects: this.state.personalProjects.concat(data) 
            })
        });
    }

    render(){
        const clientList = this.state.clientProjects;
        const personalList = this.state.personalProjects;
        var clientSettings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: clientList.length,
            slidesToScroll: 1,
            arrows: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        centerMode: false,
                        centerPadding: '10%',
                        arrows: true,
                        dots: true,
                  }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: true,
                        centerPadding: '10%',
                        arrows: true,
                        dots: true,
                  }
                }

            ]
        };
        var personalSettings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow:personalList.length,
            slidesToScroll: 1,
            arrows: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 7,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        infinite: true,
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        centerMode: true,
                        centerPadding: '10%',
                        variableWidth: true,
                        arrows: true,
                        dots: true,
                  }
                },
                {
                    breakpoint: 480,
                    settings: {
                        infinite: false,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: true,
                        centerPadding: '10%',
                        arrows: true,
                        dots: true,
                  }
                }
            ]
        };
        return(
            <div className="project-section">
                <div className="container">
                    <div className="col xl12 l12 m12 s12">
                        <h4 className="wow fadeIn">Portfolio</h4>
                    </div>
                    <div className="row">
                        <div className="col xl12 l12 m12 s12 slider-row">
                            <h5 className="wow fadeIn">Client Projects<sup>*</sup></h5>
                            <Project array={clientList} projectType="Client" getClass="client wow fadeIn" getSettings={clientSettings} />
                        </div>
                    </div>
                    <div className="col xl12 l12 m12 s12 wow fadeIn">
                        <span className="tnc">* Projects shown are displayed with persmission from the original owners</span>
                    </div>
                    <div className="row">
                        <div className="col xl12 l12 m12 s12 slider-row">
                            <h5 className="wow fadeIn">Personal Projects<sup>**</sup></h5>
                            <Project array={personalList} projectType="Personal" getClass="personal wow fadeIn" getSettings={personalSettings} />
                        </div>
                    </div>
                    <div className="col xl12 l12 m12 s12 wow fadeIn">
                        <span className="tnc">** Just stuff I do for fun!</span>
                    </div>
                </div>
            </div>
        );
    }
};

            
export default ProjectIndex