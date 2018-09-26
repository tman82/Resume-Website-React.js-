import React, {Component} from 'react';
import BackPic from '../b1.jpg';


class BigPic extends Component {

  render() {
    return(
        <div className="col-lg-4 col-md-4">
          <img  className="img-responsive" src={BackPic} alt="picture" />
        </div>
    );
  }
}

export default BigPic;
