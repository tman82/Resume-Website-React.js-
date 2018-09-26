import React, { Component } from 'react';


// Experience component
class Experience extends Component {

  render() {

    let blueColor = {
      color: '#2fa1e2'
    };

    let upOne = {
        marginTop: '-5'
    };

    let marginDown = {
        marginBottom: '60',
        fontFamily: 'Roboto, sans-serif',
    };

    let lineColor = {
      borderStyle: 'solid',
      borderColor: '#2fa1e2',
      borderWidth: '0.5'
    };

    return(
    <div style={marginDown} className="container">
      <div className="row">
        <div className="col">
            <hr style={lineColor}/>
            <h3><strong>WORK EXPERIENCE</strong></h3>
            <span style={upOne} className="pull-right">07/2016 - Present</span>
            <h5 className="clean-weight" style={blueColor}>Trans Recovery Solutions - Olive Branch, MS</h5>
            <p><strong>Litigation Collection Manager</strong></p>
            <ul>
            <li>Resolve customer complaints and answer customers' questions regarding policies and procedures</li>
            <li>Provide employees with guidance in handling difficult or complex problems or in resolving escalated complaints or disputes</li>
            <li>Train or instruct employees in job duties and company policies</li>
            </ul>


            <span style={upOne} className="pull-right">10/2012 - 06/2016</span>
            <h5 className="clean-weight" style={blueColor}>Trans Recovery Solutions - Olive Branch, MS</h5>
            <p><strong>Collections Manager</strong></p>
            <ul>
            <li>Handled unpaid commercial trucking bills and kept complaint records</li>
            <li>Trained new team members on company standard operating procedures</li>
            <li>Handled all communications regarding assigned accounts</li>
            </ul>


            <span style={upOne} className="pull-right">10/2012 - 06/2015</span>
            <h5 className="clean-weight" style={blueColor}>Certified Credit Associated - Bartlett, TN</h5>
            <p><strong>Leasing Sales Manager</strong></p>
            <ul>
            <li>Met with various clients regarding collection accounts</li>
            <li>Started collection process for delinquent balances</li>
            <li>Utilized multi-line phone system and provided strong customer service</li>
            </ul>


            <span style={upOne} className="pull-right">02/2008 - 09/2012</span>
            <h5 className="clean-weight" style={blueColor}>Regional Adjustment Bureau - Cordova, TN</h5>
            <p><strong>Collections Associate</strong></p>
            <ul>
            <li>Offered support and resolution for customers with past due accounts</li>
            <li>Took inbound calls, evaluated accounts, and negotiated payment solutions</li>
            </ul>

        </div>
      </div>
    </div>
    );
  }
}


export default Experience;
