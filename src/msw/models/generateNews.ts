import { News } from '../types';

export const generateNews = () => {
  const newsArray: Array<News> = [
    {
      title: 'Curious Kids: why do frilled sharks look more like sea snakes?',
      image:
        'https://images.theconversation.com/files/467965/original/file-20220609-20-pcgf27.jpeg?ixlib=rb-1.1.0&rect=711%2C0%2C606%2C606&q=45&auto=format&w=240&h=240&fit=crop',
      description:
        'Frilled sharks haven’t changed for about 80 million years! And while they may look a bit like snakes from a distance, they are actually much more similar to other sharks close up.',
      datePosted: new Date('2021-06-26'),
    },
    {
      title:
        'NASA to launch 3 rockets from Northern Territory in boost for Australian space efforts',
      image:
        'https://images.theconversation.com/files/467899/original/file-20220609-17-nzafzf.jpeg?ixlib=rb-1.1.0&rect=0%2C0%2C3645%2C3645&q=45&auto=format&w=240&h=240&fit=crop',
      description: 'Australia may soon have three commercial space launch facilities',
      datePosted: new Date('2021-06-20'),
    },
    {
      title: 'Do AI systems really have their own secret language?',
      image:
        'https://images.theconversation.com/files/467100/original/file-20220606-20-1noqrh.jpg?ixlib=rb-1.1.0&rect=14%2C5%2C1982%2C1982&q=45&auto=format&w=240&h=240&fit=crop',
      description: `'Vicootes', 'wa ch zod rea' and other strings of gibberish seem to have special meanings to state-of-the-art AI models. What's going on here?'`,
      datePosted: new Date('2021-06-15'),
    },
  ];

  return newsArray;
};
