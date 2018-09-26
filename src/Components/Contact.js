import React, {Component} from 'react';
import BigBackground from '../bw-woman6.png';
import FacebookContact from '../facebook-contact3.png';
import LinkedInContact from '../linkedin-contact3.png';
import EmailContact from '../email-contact3.png';
import Bottom from './Bottom';
import './Contact.css';


class Contact extends Component {
  render() {

    const backgroundStyle = {
      backgroundImage: `url(${BigBackground})`,
      height: '870px',
      backgroundSize: 'cover'
    };

    return(
          <div className="container-fluid home-container"  style={backgroundStyle}>
            <div  className="row home-block" style={backgroundStyle}>
              <div className="col-lg-12 col-md-12 home-col">
                <div className="jumbo-wrap">
                  <div className="jumbotron">
                    <p id="time-span"></p>
                    <h1>Get In Touch</h1>
                    <p className="jumbo-main-p">Please feel free to reach out if you have any questions or
                      need any useful information. If you simply want to discuss job opportunities
                      or my resume please contact me.
                    </p>
                    <div className="container">
                      <div className="col">
                        <div className="row">
                        <div className="contact-list-div">
                          <ul className="contact-list">
                            <li><a href="https://www.facebook.com/people/Erica-Hawkins/100011038113419"><img src={FacebookContact} alt="" /><p>Facebook profile</p></a></li>
                            <li><a href="https://www.linkedin.com/in/erica-hawkins-86a51b124/"><img src={LinkedInContact} alt="" /><p>Connect with me</p></a></li>
                            <li id="email-icon"><a href="mailto:prettylexus05@gmail.com"><img src={EmailContact} alt="" /><p>prettylexus05@gmail.com</p></a></li>
                          </ul>
                        </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
    );
  }
}

export default Contact;
