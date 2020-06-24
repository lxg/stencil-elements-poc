import { Config } from '@stencil/core';
import { sass } from "@stencil/sass";

export const config: Config = {
  namespace: 'elements',
  outputTargets: [
    {
      type: 'www',
      dir : 'dist/dev',
      serviceWorker: null
    },
    {
      type: 'dist',
      dir : 'dist/legacy' // Stencil bug #2516: we must build this in order to get types and other meta in our bundle
    },
    {
      type: 'dist-custom-elements-bundle',
      dir : 'dist/prod'
    }
  ],
  plugins: [
    sass()
  ]
};
