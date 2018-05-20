import privacyPolicy from './privacy-policy/privacy-policy.md';

let en = {
  code: 'en',
  name: 'English',
  categories: [
    {
      code: 'privacy-policy',
      name: 'Privacy Policy',
      description: 'Description of privacy policy',
      templates: [
        {
          code: 'privacy-policy',
          name: 'Privacy Policy',
          content: privacyPolicy
        }
      ]
    }
  ]
};

export default en;
