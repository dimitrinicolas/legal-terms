import React from 'react';
import { Link } from 'react-router-dom';

import Editor from '../components/editor';

let templatesIncrementId = 0;

class Template extends React.Component {
  componentWillMount() {
    this.id = `templatesReactId${templatesIncrementId}`;
    templatesIncrementId++;
  }

  componentDidMount() {
    this.edito = new Editor(
      this.props.content,
      document.getElementById(this.id)
    );
  }

  render() {
    return (
      <div>
        <h1>
          Template of:
          {this.props.name}
        </h1>
        <p className="description">{this.props.description}</p>
        <nav className="nav">
          <Link to="/">Return to home</Link>
          <span className="hr" />
          <a href="https://github.com/dimitrinicolas/legal-terms#contributing">
            Contribute on Github
          </a>
        </nav>
        <div id={this.id} className="page markdown-body" />
      </div>
    );
  }
}

export default Template;
