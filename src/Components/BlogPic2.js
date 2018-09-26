import React, {Component} from 'react';
import BlogPic2 from '../blog-pic2.jpeg';


class BlogPicture2 extends Component {
  render() {
    let downSpace2 = {
      marginBottom: '100'
    };

    return (
      <div className="col-lg-12 col-md-12 upSpace" style={downSpace2} >
        <img className="img-responsive"  src={BlogPic2} alt="" />
      </div>
    );
  }
}

export default BlogPicture2;
