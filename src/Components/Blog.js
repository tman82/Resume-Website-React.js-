import React, {Component} from 'react';
import BlogPicture1 from './BlogPic1';
import './Blog.css';


class Blog extends Component {

  render() {

    return(
        <div className="container">
            <div className="row">
            <div  className="col pad-top font-style">
              <hr className="line-color"/>
              <h1 className="all-font"><strong>Billing Is Life</strong></h1>
              <p className="author-style all-font" id="author">By Erica Hawkins</p>
              <p className="all-font">August 15, 2017</p>
              <p className="line-height para-font all-font">Working as a collection manager and managing my time is critical to improving my productivity in the work place. Over the years i have found that as a collection manager, there are many on the job tasks that build discipline and leadership. Supervising collection staff and overseeing outstanding accounts require that leadership. Authorizing outstanding accounts and settlements with customers strengthens confidence which builds discipline.</p>

<p className="line-height para-font all-font">Developing and leading a well skilled staff strengthens your team as a whole. I have often trained team members to organize and analyze claims, along with arbitration cases to negotiate with attornies in order to settle debts. During our preparation i've witness individuals grow and improve on providing feedback and suggestions that led to better solutions. Finally when utilizing computer systems to handle skip tracing, locating debtors always became difficult. I realized Without the confidence and experience of leading team members, it would have been more of a challenge to collect on debts. Although using credit bureau information, background checks, loan documents, and other paperwork helps tremendously, i've found that having a well trained, organized and cohesive team makes a world of a difference when it comes to collections.</p>
              <BlogPicture1 />

            </div>
          </div>
        </div>
    );
  }
}

export default Blog;
