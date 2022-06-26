import { rest } from 'msw';
import { generateNews } from '../models/generateNews';

export const getNews = rest.get('*/news/get-news', (req, res, ctx) => {
  const news = generateNews();
  return res(ctx.json({ result: { news } }));
});
