import { setupWorker } from 'msw';
import { handlers } from './handlers';

if (process.env.REACT_APP_ENABLE_MSW) {
  const worker = setupWorker(...handlers);
  worker.start();
}
