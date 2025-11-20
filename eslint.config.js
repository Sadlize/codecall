import wizardryConfig from 'eslint-config-wizardry';

const config = [
  ...wizardryConfig,
  {
    ignores: [
      'frontend/**/*', // ignore all files
      '!frontend/{app,src}/**', // unignore folders
    ],
  },
];

export default config;
