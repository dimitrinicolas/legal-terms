import React from 'react';
import { Link } from 'react-router-dom';

import LangPreview from '../components/lang-preview';

class Home extends React.Component {
  render() {
    let templates = this.props.templates;
    let langsList = [];
    for (let lang of templates.langs) {
      langsList.push(<LangPreview key={lang.code} {...lang} />);
    }
    return (
      <div>
        <h1>Open source Legal Notices and Terms templates</h1>
        {langsList}
      </div>
    );
  }
}

export default Home;
