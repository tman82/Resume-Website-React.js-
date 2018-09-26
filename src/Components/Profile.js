import React, { Component } from 'react';
import pic1 from '../blue-background-8.png';
import Header from '../Components/Header';


class Profile extends Component {

  render() {

    return(
    <div className="container">
      <div  className="row top-gap">
        <div className="col-lg-4 col-md-4">
          <img  className="img-responsive" src={pic1} alt="" />
        </div>
        <div className="col-lg-8 col-md-8">
          <Header/>
        </div>
      </div>
    </div>
    );
  }
}

export default Profile;
