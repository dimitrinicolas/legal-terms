import React from 'react';
import { Link } from 'react-router-dom';

class Page404 extends React.Component {
  render() {
    return (
      <div>
        <h1>Page introuvable</h1>
        <nav className="nav">
          <Link to="/">Return to home</Link>
        </nav>
      </div>
    );
  }
}

export default Page404;
