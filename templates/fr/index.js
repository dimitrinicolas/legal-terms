import siteVitrineSociete from './mentions-legales/site-vitrine-societe.md';
import siteVitrineIndividuelle from './mentions-legales/site-vitrine-individuelle.md';

import cookiesBandeau from './cookies/bandeau.md';

let fr = {
  code: 'fr',
  name: 'Français',
  categories: [
    {
      code: 'mentions-legales',
      name: 'Mentions Légales',
      description: 'Description des mentions légales',
      templates: [
        {
          code: 'site-vitrine-societe',
          name: 'Site vitrine d\'une société',
          description: 'Mentions légales obligatoires pour le site vitrine d\'une société.',
          content: siteVitrineSociete
        },
        {
          code: 'site-vitrine-individuelle',
          name: 'Site vitrine d\'une entreprise individuelle',
          description: 'Mentions légales obligatoires pour le site vitrine d\'une entreprise individuelle (AE, EI, EIRL...).',
          content: siteVitrineIndividuelle
        }
      ]
    },
    {
      code: 'cookies',
      name: 'Cookies',
      description: 'Description des cookies',
      templates: [
        {
          code: 'bandeau',
          name: 'Bandeau ',
          description: 'Lorsqu\'un site internet doit déposer des cookies traceurs sur les ordinateurs de ses utilisateur, l\'éditeur doit obligatoirement les informer de la finalité des cookies, obtenir leur consentement avant de les déposer et leurs permettre de les refuser.',
          content: cookiesBandeau
        }
      ]
    }
  ]
};

export default fr;
