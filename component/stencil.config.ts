import { Config } from '@stencil/core';
import { sass } from "@stencil/sass";

export const config: Config = {
  namespace: 'component',
  outputTargets: [
    {
      type: 'www',
      dir : 'dist/dev',
      serviceWorker: null
    },
    {
      type: 'dist',
      dir : 'dist/prod'
    }
  ],
  plugins: [
    sass()
  ]
};
