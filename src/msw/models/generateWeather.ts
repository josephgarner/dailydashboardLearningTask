import { Weather } from '../types';

export const generateWeather = () => {
  const weatherArray: Array<Weather> = [
    {
      forcast: 'Sunny',
      max: 28,
      min: 17,
      description: 'Clear skys all day with a warm summber breaze ariving in the afternoon',
    },
    {
      forcast: 'Overcast',
      max: 20,
      min: 11,
      description:
        'early morning sunshine becoming overcase in the late morning to early afternoon',
    },
    {
      forcast: 'Snowing',
      max: -3,
      min: -8,
      description: 'clear skys in the early morning changing to overcast and light snow by midday',
    },
  ];

  return weatherArray[Math.floor(Math.random() * 3)];
};
