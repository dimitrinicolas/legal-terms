import React from 'react';
import { Link } from 'react-router-dom';

import Editor from '../components/editor';

let templatesIncrementId = 0;

class Template extends React.Component {
  constructor() {
    super()
    this.state = {
      value: "URL",
      values: {}
    };
  }
  componentWillMount() {
    this.id = 'templatesReactId' + templatesIncrementId;
    templatesIncrementId++;
  }
  render() {
    return (
      <div>
        <h1>Template of: {this.props.name}</h1>
        <nav className="nav">
          <Link to="/">Return to home</Link>
          <span className="hr"></span>
          <a href="https://github.com/dimitrinicolas/legal-terms#contributing">Contribute on Github</a>
        </nav>
        <div id={this.id} className="page markdown-body"></div>
      </div>
    );
  }
  componentDidMount() {
    new Editor(this.props.content, document.getElementById(this.id));
  }
}

export default Template;
