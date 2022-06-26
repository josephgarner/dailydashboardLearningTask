import { setupWorker } from 'msw';
import { env } from '../configs/env';
import { handlers } from './handlers';

if (env.ENABLE_MSW) {
  const worker = setupWorker(...handlers);
  worker.start();
}
