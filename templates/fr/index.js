import siteVitrineSociete from './mentions-legales/site-vitrine-societe.md';
import siteVitrineIndividuelle from './mentions-legales/site-vitrine-individuelle.md';

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
    }
  ]
};

export default fr;
