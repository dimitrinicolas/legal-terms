import React from 'react';

import LangPreview from '../components/lang-preview';

class Home extends React.Component {
  render() {
    const templates = this.props.templates;
    const langsList = [];
    for (const lang of templates.langs) {
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
