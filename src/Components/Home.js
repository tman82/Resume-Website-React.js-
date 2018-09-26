import React, {Component} from 'react';
import Nav from '../Components/Nav';
import About from '../Components/About';
import Skills from '../Components/Skills';
import BigBackground from '../bw-woman6.png';
import ArrowDown from '../arrow-down.png';
import Footer from '../Components/Footer';
import Bottom from '../Components/Bottom';
import './Home.css';


// Home Component
class Home extends Component {

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
                    <p id="time-span">2008 - Present</p>
                    <h1>Litigation Manager</h1>
                    <p className="jumbo-main-p karla">Customer service is my main focus. I take pride in following basic
                      protocol regarding timely reimbursement for patient services.
                    </p>
                    <p className="btn-p"><a class="btn more-btn" href="../resume" role="button">More</a></p>
                    <img src={ArrowDown} alt=""/>
                  </div>
                </div>

                <About />
                <Skills />
                <Footer />
                <Bottom />
              </div>
            </div>
          </div>
    );
  }
}

export default Home;
