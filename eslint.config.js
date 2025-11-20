import wizardryConfig from 'eslint-config-wizardry';

const config = [
  ...wizardryConfig,
  {
    ignores: [
      '**/*', // ignore all files
      '!{app,src}/**', // unignore folders
    ],
  },
];

export default config;
