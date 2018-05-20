import React from 'react';
import { Link } from 'react-router-dom';

import marked from 'marked';

class Editor {
  constructor(content, el) {
    this.content = marked(content);
    this.el = el;
    this.values = {};
    this.content = this.content.replace(new RegExp('{{(.*?)}}', 'gis'), '<span data-code="$1">$1</span>');
    this.el.innerHTML = this.content;
    this.initDOM();
  }
  initDOM() {
    let els = this.el.querySelectorAll('[data-code]');
    for (let el of els) {
      el.className = 'editable';
      let code = el.getAttribute('data-code');
      let span = document.createElement('span');
      span.innerHTML = el.innerHTML.replace('\n', '<br>');
      span.setAttribute('contenteditable', true);
      el.innerHTML = '';
      el.appendChild(span);
      if (!this.values[code]) {
        this.values[code] = {
          value: code,
          els: []
        };
      }
      this.values[code].els.push(el);
      span.addEventListener('focus', function(event) {
        setTimeout(function() {
          document.execCommand('selectAll', false, null);
        }, 40);
      }.bind(span));
      span.addEventListener('input', function(code) {
        return function(event) {
          this.handleChange(code, event.target.innerHTML);
        }.bind(this);
      }.bind(this)(code));
    }
  }
  handleChange(code, value) {
    if (this.values[code].value !== value) {
      this.values[code].value = value;
      this.valueUpdated(code);
    }
  }
  valueUpdated(code) {
    let edited = false;
    if (this.values[code].value !== code &&
       this.values[code].value.replace(/&nbsp;/g, '').trim().length > 0) {
      edited = true;
    }
    for (let el of this.values[code].els) {
      if (edited && (' ' + el.className + ' ').indexOf(' editable--edited ') === -1) {
        el.className += ' editable--edited';
      }
      else if (!edited && (' ' + el.className + ' ').indexOf(' editable--edited ') >= 0) {
        el.className = (' ' + el.className + ' ').replace(' editable--edited ', ' ').replace(/\s\s+/g, ' ');
      }
      let span = el.querySelector('span');
      if (span) {
        if (span.innerHTML !== this.values[code].value) {
          span.innerHTML = this.values[code].value;
        }
      }
    }
  }
}

class Template extends React.Component {
  constructor() {
    super()
    this.state = {
      value: "URL",
      values: {}
    };
  }
  componentWillMount() {
    this.randomId = Math.random();
  }
  render() {
    return (
      <div>
        <h1>Template of: {this.props.name}</h1>
        <Link to="/">Return to home</Link>
        <div id={this.randomId} className="page markdown-body"></div>
      </div>
    );
  }
  componentDidMount() {
    new Editor(this.props.content, document.getElementById(this.randomId));
  }
}

export default Template;
