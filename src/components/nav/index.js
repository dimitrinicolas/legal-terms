import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  render() {
    return (
      <nav className="nav">
        <Link to="/">Home</Link>
        <hr className="hr" />
        <Link to="/legal-terms-disclaimer">Legal Terms and Disclaimer</Link>
      </nav>
    );
  }
}

export default Nav;
