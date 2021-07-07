import React from 'react'
import { Link } from '@reach/router';
// import Link from 'gatsby-link'

import IconHome from "../svg/home.svg";
import IconSearch from "../svg/search.svg";
import IconTime from "../svg/time.svg";

const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      // the object returned here is passed to the anchor element's props
      return {
        className: isCurrent ? "active" : ""
      };
    }}
  />
);

const Sidebar = () => (
  <aside id="app-sidebar">

    <div className="group">
      <NavLink to="/"><IconHome />Home</NavLink>
      <NavLink to="/contact"><IconSearch />Browse</NavLink>
      <NavLink to="/about-us"><IconTime />About Us</NavLink>
    </div>

    <div className="group">
      <Link to="#">link</Link>
      <Link to="#">link</Link>
      <Link to="#">link</Link>
    </div>

  </aside>
)

export default Sidebar
