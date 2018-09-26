import React, {Component} from 'react';
import BlogPicture2 from './BlogPic2';



class Blog2 extends Component {

  render() {
    return(
        <div className="container">
            <div className="row">
            <div className="col pad-top font-style">
              <hr className="line-color"/>
              <h1 className="all-font"><strong>Organizing Accounts</strong></h1>
              <p className="author-style all-font">By Erica Hawkins</p>
              <p>September 19, 2017</p>
              <p className="line-height para-font all-font">The first step to realize is that you likely already have an accounts receivable system – however meager or malfunctional it may be. For offline, manual-entry accounts payable, Excel is still the standard. If you're already comfortable with a program like QuickBooks, or are willing to take a class or hire a coach to get you started, that's another option for record-keeping. If you like online money-management programs like Mint, you might work well with an online system such as FreshBooks. Once you pick a system, you should start loading billing information kept in your head or on your Outlook calendar into the system.</p> <p className="line-height para-font">Your basic setup, whatever accounting software or spreadsheet you choose, should include a listing of all open invoices and balances, as well as either monthly, weekly, or per-project billing capability. You should also make sure there is a way to print invoices in hard copy. Although bills can be sent by e-mail,  some of your clients may prefer receiving a hard copy of a bill. You can choose to use an automated service, such as billing handled by FreshBooks, or you can task an administrative employee with printing and mailing hard copies of your invoices.</p><p className="line-height para-font">Next, you must decide who will handle billing. Kathryn Amenta, a San Francisco-based financial advisor, suggests you handle it at least for a time. "I would recommend a business owner understand their finances fully before they turn it over to someone else to handle," she says. "It's super important as an owner to have a finger on the financial pulse. That's the bottom line – that's why you're in business."</p>
              <BlogPicture2 />
            </div>
          </div>
        </div>
    );
  }
}


export default Blog2;
