import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Components/Home';
import Nav from './Components/Nav';
import Blog from './Components/Blog';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

// import {Bar, Line, Pie} from 'react-chartjs-2';


class App extends Component {

  render() {
    return(
      <Router>
        <div className="container-fluid">
          <Nav/>
          <Route exact  path="/" component={Home} />
          <Route  path="/resume" component={Resume} />
          <Route  path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} />
        </div>
      </Router>
    );
  }
}



// normal render PASTE BACK IN IF NEEDED !!!!!!!!!!
/* render() {
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
*/


export default App;
