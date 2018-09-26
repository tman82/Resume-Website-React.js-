import React, { Component } from 'react';
import Core from '../Components/Core';
import './Info.css';


class Info extends Component {

  render() {

      let colorDiv2 = {
      fontSize: '14',
      color: 'white',
      textAlign: 'center',
      paddingTop: '23',
      paddingBottom: '23',
      backgroundColor: '#198bcc'
    };

      let colorDiv3 = {
      fontSize: '14',
      color: 'white',
      textAlign: 'center',
      paddingTop: '23',
      paddingBottom: '23',
      backgroundColor: '#2fa1e2'
    };

    let objTop = {
      marginTop: '17'
    };

     let blueColor = {
      color: '#2fa1e2'
    };

    return(
    <div className="container">
        <div className="row all-font">
            <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="color-div1">
                  <p className="clean-weight" >Collections and Customer Service  Specialist</p>
                </div>
                <div style={colorDiv2}>
                  <p className="clean-weight">prettylexus05@gmail.com.COM</p>
                </div>
                <div style={colorDiv3}>
                  <p className="clean-weight">MEMPHIS, TN - USA</p>
                </div>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12">
              <h3 className="" style={objTop}><strong>PROFESSIONAL OBJECTIVE</strong></h3>
              <h5 className="clean-weight rubik" style={blueColor}>PROFILE</h5>
              <p>Customer service oriented professional who provides timely and accurate data to ensure reimbursement for patient services. Follows policies,
                 procedures and guidelines to assure consistent quality. Maintains and ensures patient privacy and confidentiality.
              </p>

              <strong className="rubik">Academic Honors Recognition / Honor Roll</strong>
                <p>Experience with Microsoft Word, Excell, PowerPoint, and Outlook. Type 45 WPM</p>
                <div className="clear-fix" ></div>
                <hr className="profile-bottom" />
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12">
              <Core/>
            </div>
        </div>
    </div>
    );
  }
}

export default Info;
