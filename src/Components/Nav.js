import React, {Component} from 'react';
import {NavLink, Link} from 'react-router-dom';
import mainIcon from '../bird6.png';
import navIconIn from '../nav-in.png';
import './Nav.css';


class Nav extends Component {
  constructor(props) {
    super(props);

  }

    render() {
      const newBlue = {
        backgroundColor: '#2353BD'
      };

      const fontThree = {
        fontWeight: "300"
      }


        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <nav className="navbar navbar-default" style={newBlue}>
                            <div className="container-fluid">
                                <div className="navbar-header">
                                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                        <span className="sr-only">Toggle navigation</span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>

                                    <Link className="navbar-brand" to="/"><img className="img-responsive" alt="" src={mainIcon} /></Link>

                                </div>
                                <div className="collapse navbar-collapse center-me" id="bs-example-navbar-collapse-1">
                                    <ul className="nav navbar-nav navbar-right push-left">
                                        <li>
                                            <NavLink className="white karla"  exact   activeClassName="active clean-weight" to="/">
                                                Home
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="white karla"  exact activeClassName="active clean-weight" to="/resume">
                                                Resume
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="white karla"   activeClassName="active clean-weight" to="/blog">
                                                Blog
                                            </NavLink>
                                        </li>
                                        <li className="email-link">
                                          <NavLink className="white karla" activeClassName="active clean-weight" to="/Contact">
                                              Contact
                                          </NavLink>
                                        </li>
                                        <li className="in-icon">
                                            <Link className="in-icon" to="/Contact"><img className="in-icon2" src={navIconIn} alt=""/></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
  }

export default Nav;
