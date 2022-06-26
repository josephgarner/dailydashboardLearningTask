import * as envalid from 'envalid';
import 'dotenv/config';

/**
 * Use the line below to access env types
 */
// export { env } from './configs/env';

export const env = envalid.cleanEnv(
  {
    NODE_ENV: process.env.NODE_ENV,
    ENVIRONMENT: process.env.ENVIRONMENT,
    ENABLE_MSW: process.env.ENABLE_MSW,
    API_URL: process.env.API_URL,
  },
  {
    // environment
    NODE_ENV: envalid.str({ choices: ['development', 'test', 'production'] }),
    ENVIRONMENT: envalid.str({ choices: ['local', 'development', 'production'] }),

    // toggles
    ENABLE_MSW: envalid.bool({ default: true, devDefault: false }),

    // urls
    API_URL: envalid.str({ default: 'http://mock-api-call/' }),
  },
);
