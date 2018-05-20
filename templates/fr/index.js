import siteVitrine from './mentions-legales/site-vitrine.md';

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
          code: 'site-vitrine',
          name: 'Site vitrine d\'une entreprise',
          content: siteVitrine
        }
      ]
    }
  ]
};

export default fr;
