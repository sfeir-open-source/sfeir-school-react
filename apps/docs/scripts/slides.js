// allFiles : canonical structure for ordered 2-levels filesystem tree
// array of [directory, [file]] pairs

const institute = [
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

const makeSlide = (dir) => (file) => ({ path: `${dir}/${file}.md` });
const pathReducer = (acc, [dir, files]) => [...acc, ...files.map(makeSlide(dir))];
export const slides = institute.reduce(pathReducer, []);
