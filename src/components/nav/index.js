import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  render() {
    return (
      <nav className="nav nav--footer">
        <a href="https://github.com/dimitrinicolas/legal-terms">
          Github repository
        </a>
        <span className="hr" />
        <Link to="/legal-terms-disclaimer">Legal Terms and Disclaimer</Link>
      </nav>
    );
  }
}

export default Nav;
