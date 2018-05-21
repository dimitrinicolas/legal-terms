import ReactDOM from 'react-dom';
import { HashRouter, Switch, Link, Route } from 'react-router-dom';

import Nav from './components/nav';
import Home from './views/home.js';
import LegalTermsDisclaimer from './views/legal-terms-disclaimer.js';
import Template from './views/template.js';
import Page404 from './views/page404.js';

import templates from '../templates/index.js';

let templatesRoutes = [];

for (let lang of templates.langs) {
  for (let categorie of lang.categories) {
    for (let template of categorie.templates) {
      templatesRoutes.push(
        <Route key={'/' + lang.code + '/' + categorie.code + '/' + template.code} path={'/' + lang.code + '/' + categorie.code + '/' + template.code} component={()=><Template {...template} />} />
      );
    }
  }
}

ReactDOM.render((
  <HashRouter>
    <div className="container">
      <Switch>
        <Route exact path="/" component={()=><Home templates={templates} />} />
        <Route exact path="/legal-terms-disclaimer" component={LegalTermsDisclaimer} />
        {templatesRoutes}
        <Route component={Page404} />
      </Switch>
      <Nav />
    </div>
  </HashRouter>
), document.getElementById('app'));
