import { initTheme } from './utils.js';

const slidesPerDirectory = [
  [
    '00-school',
    [
      '00-TITLE-institute',
      // professor
      '01-speaker-wgo',
      // speakers, uncomment as needed
      '01-speaker-rto',
      //'01-speaker-fsa',
      '02-introduce-yourself',
      '03-repository',
      '04-these-slides'
    ],
  ]
];

initTheme(slidesPerDirectory);