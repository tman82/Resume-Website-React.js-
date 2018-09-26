import React, {Component} from 'react';
import './Header.css';


class Header extends Component {

  render() {

    let midHeading = {
      fontSize: '16',
      marginTop: '-23'
    };

    let blueColor = {
      color: '#2fa1e2',
      fontFamily: 'Roboto, sans-serif'
    };

    let black = {
      color: '#000'
    };

    return(
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-8 col-sm-12">
            <div className="head-style" >
              <p className="big-heading rubik">ERICA HAWKINS</p>
              <p className="mid-heading clean-weight2" style={midHeading}>COLLECTIONS / CUSTOMER SERVICE / CODING</p>
              <p className="clean-weight" style={blueColor}><span style={black}>Memphis, TN  </span>prettylexus05@gmail.com</p>
              <div className="clear-fix2" ></div>
              <hr className="line-color"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
