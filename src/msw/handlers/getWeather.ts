import { rest } from 'msw';
import { generateWeather } from '../models/generateWeather';

export const getWeather = rest.get('*/weather/get-weather', (req, res, ctx) => {
  const weather = generateWeather();
  return res(ctx.json({ result: { weather } }));
});
