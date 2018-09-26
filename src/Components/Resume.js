import React, {Component} from 'react';
import Profile from '../Components/Profile';
import Info from '../Components/Info';
import Chart from '../Components/Chart';
import Experience from '../Components/Experience';


class Resume extends Component {

  render() {
    return(
         <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Profile/>
            </div>
            <div className="col-lg-12">
              <Info/>
            </div>
            <div className="col-lg-12">
              <Chart/>
            </div>
            <div className="col-lg-12">
              <Experience/>
            </div>
          </div>
        </div>
    );
  }
}

export default Resume;
