export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: [
        'https://cgproperties-project.onrender.com', // URL de Strapi en Render
        'https://res.cloudinary.com', // URL de Cloudinary
      ],
    },
  },
];