import React  from 'react';
import DownloadIcon from '../download.png';
import './Skills.css';


// List of skills
class Skills extends React.Component {

  render() {

    const centerText = {
      textAlign: 'center !important',
      margin: '0 auto'
    };

    const leftRight = {
      marginLeft: '-15px',
      marginRight: '-15px'
    };

    return(
          <div>
            <div className="container-fluid" style={leftRight}>
              <div className="row skills-block">
                <div className="col-lg-12 col-md-12 skills-col">
                <div className="skills-wrap">
                    <div className="container wrap2">
                    <div className="wrap3">
                      <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 number-col number-col1">
                          <div className="number-div"><span id="twelve">12</span></div>
                          <hr/>
                          <p>Years of collection and customer service experience</p>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 number-col number-col2" id="mid-col">
                          <div className="number-div">2</div>
                          <hr/>
                          <p>Years of litigation management experience</p>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 number-col number-col3">
                          <div className="number-div">4</div>
                          <hr/>
                          <p>Positions held in collections</p>
                        </div>
                      </div>
                      </div>
                    </div>
                    <div id="btn-list-block">
                      <ul className="btn-list">
                        <li><a className="btn btn-group1" id="skill-btn1" role="button" href="erica-resume.pdf" download="erica-resume.pdf">Resume PDF<img className="pdf-icon" src={DownloadIcon} href="" alt="" /></a></li>
                        <li><a className="btn btn-group1" id="skill-btn2" role="button" href="../resume">Online Resume<img  alt="" /></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    );
  }
}

export default Skills;
