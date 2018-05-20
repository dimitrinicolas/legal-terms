import React from 'react';
import { Link } from 'react-router-dom';

class LangPreview extends React.Component {
  render() {
    let categoriesList = [];
      for (let categorie of this.props.categories) {
        let templatesList = [];
        for (let template of categorie.templates) {
          templatesList.push(
            <li key={template.code}>
              <Link to={this.props.code + '/' + categorie.code + '/' + template.code}>{template.name}</Link>
            </li>
          );
        }
        categoriesList.push(
          <li key={categorie.code}>
            {categorie.name}
            <ul>{templatesList}</ul>
          </li>
        );
    }
    return (
      <div>
        <h2>{this.props.name}</h2>
        <ul>{categoriesList}</ul>
      </div>
    );
  }
}

export default LangPreview;
