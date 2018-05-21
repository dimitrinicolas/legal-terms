'use strict';

var siteVitrineSociete = "# Mentions légales\n\nConformément aux dispositions des articles 6-III et 19 de la Loi n° 2004-575 du 21 juin 2004 pour la Confiance dans l'économie numérique, dite L.C.E.N., nous portons à la connaissance des utilisateurs et visiteurs du site : {{URL (exemple.fr)|type:url}} les informations suivantes :\n\n### Informations légales\n\nSociété : {{Nom de la société}}  \nStatut : {{Statut (ex : SAS au capital de ...)}}  \nAdresse : {{Adresse de l'établissement ou du siège social}}  \nContact : {{Adresse e-mail et numéro de téléphone}}  \nSIRET :  {{SIRET|type:number}}  \nRCS : {{RCS si l'entreprise a une activité commerciale}}  \nNuméro de TVA : {{Numéro de TVA intracommunautaire en cas d'activité commerciale}}  \nRM : {{RM si l'entreprise a une activité artisanale}}\n\nResponsable de la publication : {{Responsable de la publication}}  \nHébergeur du site : {{Hébergeur et son adresse}}\n\n## Description des services fournis\n\nLe site {{URL (exemple.fr)}} a pour objet de fournir une information concernant l’ensemble des activités de la société.\n\nLe proprietaire du site s’efforce de fournir sur le site {{URL (exemple.fr)}} des informations aussi précises que possible. Toutefois, il ne pourra être tenue responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu’elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.\n\nTous les informations proposées sur le site {{URL (exemple.fr)}} sont données à titre indicatif, sont non exhaustives, et sont susceptibles d’évoluer. Elles sont données sous réserve de modifications ayant été apportées depuis leur mise en ligne.\n\n## Propriété intellectuelle et contrefaçons\n\nLe proprietaire du site est propriétaire des droits de propriété intellectuelle ou détient les droits d’usage sur tous les éléments accessibles sur le site, notamment les textes, images, graphismes, logo, icônes, sons, logiciels...\nToute reproduction, représentation, modification, publication, adaptation totale ou partielle des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation expresse.\n\n## Cookies\n\nL’utilisateur est informé que lors de ses visites sur le site {{URL (exemple.fr)}}, un ou des cookies sont susceptible de s’installer automatiquement sur son ordinateur. Les données obtenues visent à faciliter la navigation ultérieure sur le site, et ont également vocation à permettre diverses mesures de fréquentation.\n\n## Données personnelles\n\nLe site assure à l'utilisateur une collecte et un traitement d'informations personnelles dans le respect de la vie privée conformément à la loi n°78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertées.\n\nEn vertu de la loi Informatique et Libertés, en date du 6 janvier 1978, l'utilisateur dispose d'un droit d'accès, de rectification, de suppression et d'opposition de ses données personnelles.\n";

var siteVitrineIndividuelle = "# Mentions légales\n\nConformément aux dispositions des articles 6-III et 19 de la Loi n° 2004-575 du 21 juin 2004 pour la Confiance dans l'économie numérique, dite L.C.E.N., nous portons à la connaissance des utilisateurs et visiteurs du site : {{URL (exemple.fr)|type:url}} les informations suivantes :\n\n### Informations légales\n\n{{Nom et prénom}}  \nAdresse : {{Adresse du domicile}}  \nAdresse e-mail : {{Adresse e-mail|type:email}}  \nTéléphone :  {{numéro de téléphone|type:tel}}  \nRCS : {{RCS si l'entreprise a une activité commerciale}}  \nNuméro de TVA : {{Numéro de TVA intracommunautaire en cas d'activité commerciale}}  \nRM : {{RM si l'entreprise a une activité artisanale}}\n\nResponsable de la publication : {{Responsable de la publication}}  \nHébergeur du site : {{Hébergeur et son adresse}}\n\n## Description des services fournis\n\nLe site {{URL (exemple.fr)}} a pour objet de fournir une information concernant l’ensemble des activités de la société.\n\nLe proprietaire du site s’efforce de fournir sur le site {{URL (exemple.fr)}} des informations aussi précises que possible. Toutefois, il ne pourra être tenue responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu’elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.\n\nTous les informations proposées sur le site {{URL (exemple.fr)}} sont données à titre indicatif, sont non exhaustives, et sont susceptibles d’évoluer. Elles sont données sous réserve de modifications ayant été apportées depuis leur mise en ligne.\n\n## Propriété intellectuelle et contrefaçons\n\nLe proprietaire du site est propriétaire des droits de propriété intellectuelle ou détient les droits d’usage sur tous les éléments accessibles sur le site, notamment les textes, images, graphismes, logo, icônes, sons, logiciels...\nToute reproduction, représentation, modification, publication, adaptation totale ou partielle des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation expresse.\n\n## Cookies\n\nL’utilisateur est informé que lors de ses visites sur le site {{URL (exemple.fr)}}, un ou des cookies sont susceptible de s’installer automatiquement sur son ordinateur. Les données obtenues visent à faciliter la navigation ultérieure sur le site, et ont également vocation à permettre diverses mesures de fréquentation.\n\n## Données personnelles\n\nLe site assure à l'utilisateur une collecte et un traitement d'informations personnelles dans le respect de la vie privée conformément à la loi n°78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertées.\n\nEn vertu de la loi Informatique et Libertés, en date du 6 janvier 1978, l'utilisateur dispose d'un droit d'accès, de rectification, de suppression et d'opposition de ses données personnelles.\n";

var cookiesBandeau = "### Cookies pour les statistiques de visites\n\nEn poursuivant votre navigation sur ce site, vous acceptez l’utilisation de cookies pour réaliser des statistiques de fréquentation.\n\n### Cookies pour les publicités\n\nEn poursuivant votre navigation sur ce site, vous acceptez l’utilisation de cookies pour vous proposer des publicités ciblées adaptés à vos centres d’intérêts.\n";

var fr = {
  code: 'fr',
  name: 'Français',
  categories: [{
    code: 'mentions-legales',
    name: 'Mentions Légales',
    description: 'Description des mentions légales',
    templates: [{
      code: 'site-vitrine-societe',
      name: 'Site vitrine d\'une société',
      description: 'Mentions légales obligatoires pour le site vitrine d\'une société.',
      content: siteVitrineSociete
    }, {
      code: 'site-vitrine-individuelle',
      name: 'Site vitrine d\'une entreprise individuelle',
      description: 'Mentions légales obligatoires pour le site vitrine d\'une entreprise individuelle (AE, EI, EIRL...).',
      content: siteVitrineIndividuelle
    }]
  }, {
    code: 'cookies',
    name: 'Cookies',
    description: 'Description des cookies',
    templates: [{
      code: 'bandeau',
      name: 'Bandeau ',
      description: 'Lorsqu\'un site internet doit déposer des cookies traceurs sur les ordinateurs de ses utilisateur, l\'éditeur doit obligatoirement les informer de la finalité des cookies, obtenir leur consentement avant de les déposer et leurs permettre de les refuser.',
      content: cookiesBandeau
    }]
  }]
};

var privacyPolicy = "# Privacy Policy\n";

var en = {
  code: 'en',
  name: 'English',
  categories: [{
    code: 'privacy-policy',
    name: 'Privacy Policy',
    description: 'Description of privacy policy',
    templates: [{
      code: 'privacy-policy',
      name: 'Privacy Policy',
      content: privacyPolicy
    }]
  }]
};

var templates = {
  langs: [en, fr]
};

module.exports = templates;
