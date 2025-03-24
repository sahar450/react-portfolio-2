import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.funhidemenu = this.funhidemenu.bind(this);
    this.state = {
      submenuOpen: {
        home: false,
        about: false,
        services: false,
        pages: false,
        contact: false,
      },
      showmenu: false,
    };
  }

  handleMouseEnter = (menu) => {
    this.setState((prevState) => ({
      submenuOpen: { ...prevState.submenuOpen, [menu]: true },
    }));
  };

  handleMouseLeave = (menu) => {
    this.setState((prevState) => ({
      submenuOpen: { ...prevState.submenuOpen, [menu]: false },
    }));
  };

  funhidemenu() {
    this.setState((prevState) => ({
      showmenu: !prevState.showmenu,
    }));
  }

  render() {
    return (
      <div className="container-fluid st">
        <div className="minheader">
          <div>
            <h1 className="title">
              <span className="kcolor">K</span>VIEERA
            </h1>
          </div>
          <div className="minboxmenu">
            <ul className="menumin">
              {/* Home */}
              <li
                onMouseEnter={() => this.handleMouseEnter("home")}
                onMouseLeave={() => this.handleMouseLeave("home")}
              >
                <span>Home</span>
                <ul
                  className={`submenuo ${
                    this.state.submenuOpen.home ? "show" : ""
                  }`}
                >
                  <li>Home 1</li>
                  <li>Home 2</li>
                </ul>
              </li>

              {/* About */}
              <li
                onMouseEnter={() => this.handleMouseEnter("about")}
                onMouseLeave={() => this.handleMouseLeave("about")}
              >
                <span>About</span>
                <ul
                  className={`submenuo ${
                    this.state.submenuOpen.about ? "show" : ""
                  }`}
                >
                  <li>About Us</li>
                  <li>Our Team</li>
                </ul>
              </li>

              {/* Services */}
              <li
                onMouseEnter={() => this.handleMouseEnter("services")}
                onMouseLeave={() => this.handleMouseLeave("services")}
              >
                <span>Services</span>
                <ul
                  className={`submenuo ${
                    this.state.submenuOpen.services ? "show" : ""
                  }`}
                >
                  <li>Web Development</li>
                  <li>SEO</li>
                  <li>Marketing</li>
                </ul>
              </li>

              {/* Pages */}
              <li
                onMouseEnter={() => this.handleMouseEnter("pages")}
                onMouseLeave={() => this.handleMouseLeave("pages")}
              >
                <span>Pages</span>
                <ul
                  className={`submenuo ${
                    this.state.submenuOpen.pages ? "show" : ""
                  }`}
                >
                  <li>Portfolio</li>
                  <li>Blog</li>
                </ul>
              </li>

              {/* Contact */}
              <li
                onMouseEnter={() => this.handleMouseEnter("contact")}
                onMouseLeave={() => this.handleMouseLeave("contact")}
              >
                <span>Contact</span>
                <ul
                  className={`submenuo ${
                    this.state.submenuOpen.contact ? "show" : ""
                  }`}
                >
                  <li>Email</li>
                  <li>Phone</li>
                  <li>Location</li>
                </ul>
              </li>
            </ul>
          </div>

          <div>
            <button className="btn-header">Get Started</button>
          </div>
          <div>
            <button className="btn-menu" onClick={this.funhidemenu}>
              <i className="fa fa-bars"></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`hidemenu ${this.state.showmenu ? "open" : ""}`}>
          <ul className="box-hidemenu">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Pages</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    );
  }
}
