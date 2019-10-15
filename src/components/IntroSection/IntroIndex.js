import React from 'react'
import Description from './Description';
import Profile from './Profile';
import WOW from "wowjs";

class IntroIndex extends React.Component{

    componentDidMount(){
        const wow = new WOW.WOW();
        wow.init();
    }

    render() {
        return (
            <div className="row">
                <div className="col xl12 l12 m12 s12 intro-section">
                    <div className="wow fade">
                        <Profile 
                            image={this.props.image}
                            fName={this.props.fName}
                            designation={this.props.designation}
                            tel={this.props.tel}
                            email={this.props.email}
                            github={this.props.github}
                            linkedin={this.props.linkedin}
                            address={this.props.address} />
                        <Description desc={this.props.desc} />
                    </div> 
                </div>
            </div>
        )
    }

};

export default IntroIndex;