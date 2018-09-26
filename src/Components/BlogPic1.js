import React, {Component} from 'react';
import BlogPic1 from '../blog-pic1.jpg';


class BlogPicture1 extends Component {
  render() {

    return(
      <div className="col-lg-12 col-md-12 upSpace down-space">
        <img className="img-responsive" src={BlogPic1} alt=""/>
      </div>
    );
  }
}

export default BlogPicture1;
