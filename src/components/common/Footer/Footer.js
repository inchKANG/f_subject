import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

function Footer() {
  return (
    <footer>
      <div className="container_row">
        <div className="footer_text_wrapper">
          <h1>Kraft8</h1>
          <p className="info">
            This is a big one and i consider it one of the most important things
            for a designer.
          </p>

          <p className="copyright">
            Copyright © 2019 Kraft8. All Rights Reserved
          </p>
        </div>
        <div className="footer_menu_wrapper">
          <Menu title="Quick Links" />
          <Menu title="Company" />
          <Menu title="Information" />
        </div>
      </div>
    </footer>
  );
}

const Menu = ({ title = '' }) => {
  return (
    <div className="footer_menu">
      <h6>{title}</h6>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
