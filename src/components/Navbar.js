import React, { Component } from 'react'
import {Link} from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">NewsHub 📰</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                           <Link className="nav-Link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item" >
                           <Link className="nav-Link" to="/Business">Business</Link>
                        </li>
                        <li className="nav-item">
                           <Link className="nav-Link" to="/Sports">Sports</Link>
                        </li>
                        <li className="nav-item">
                           <Link className="nav-Link" to="/Science">Science</Link>
                        </li>
                        <li className="nav-item">
                           <Link className="nav-Link" to="/General">General</Link>
                        </li>
                        <li className="nav-item">
                           <Link className="nav-Link" to="/Entertainment">Entertainment</Link>
                        </li>
                        <li className="nav-item">
                           <Link className="nav-Link" to="/Health">Health</Link>
                        </li>
                        <li className="nav-item">
                           <Link className="nav-Link" to="/Technology">Technology</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
      </div>
    )
  }
}
