import React, { Component } from 'react';
import './About.css';


class About extends Component {
    render() {

        let underLine = {
            backgroundColor: 'white',
            borderColor: 'black',
        };

        let space = {
            marginLeft: '-30',
            marginRight: '-30'
        };

        return(
            <div style={space} className="container-fluid">
                <div className="row about-block">
                    <div className="col-lg-12">
                        <div className="about-div" style={underLine}>
                            <h3  className="text-center">About Me</h3>
                            <p className="karla">I have 12 years experience in both collections
                                and customer service. I'm currently a collections
                                manager who collects on outstanding medical and
                                trucking accounts daily. Negotiating settlements on
                                outstanding invoices is my strength. I'm always excited about
                                meeting and interacting with new people in the industry.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
