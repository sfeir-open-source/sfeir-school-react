import { SfeirThemeInitializer } from '../web_modules/sfeir-school-theme/sfeir-school-theme.mjs';
// allFiles : canonical structure for ordered 2-levels filesystem tree
// array of [directory, [file]] pairs

const institute = [
  [
    '00-school',
    [
      '00-TITLE-institute',
      // speakers, uncomment as needed
      '01-speaker-rto',
      '01-speaker-jhe',
      //'01-speaker-fsa',
      '02-introduce-yourself',
      '03-repository',
      // '04-these-slides',
      '05-app-screenshot',
      '06-what-we-will-do',
    ],
  ],
  [
    '01-intro-demo-jsx',
    [
      '00-title-hello-world',
      // '01-demo-hello-world',
      '02-what-is-react',
      '03-virtual-dom',
      '04-title-hello-jsx',
      '05-jsx',
      '06-jsx-summary',
    ],
  ],
  [
    '02-fundamentals',
    [
      '00-title-components',
      '01-components',
      '02-components-exercise',
      '03-title-trees-and-children',
      '04-component-trees',
      '05-props',
      '06-children',
      '07-composition-summary',
      '08-tree-exercise',
    ],
  ],
  [
    '03-states-and-events',
    [
      '00-title-state',
      '01-01-class-component-syntax',
      '01-02-class-component-state',
      '01-03-class-component-object',
      '02-how-to-change-state',
      '03-title-events',
      '04-01-handling-events-name',
      '04-02-handling-events-default',
      '05-synthetic-event',
      '06-how-to-change-state-bis',
      '07-set-state',
      '08-demo-more-about-state',
      '09-set-state-async',
      '10-events-and-state-summary',
      '11-exercise-state-clicks',
      '12-events-callback',
      '13-one-more-thing',
      '14-title-hooks',
      '15-hooks-explaination',
      '16-demo-hooks',
      '17-exercise-hook',
    ],
  ],
  [
    '04-list-conditional-children',
    [
      '00-title-conditional-list-children',
      '01-01-conditionals-if-switch',
      '01-02-conditionals-variable',
      '01-03-conditionals-logical',
      '01-04-conditionals-ternary',
      '02-just-expression',
      '03-01-list-use-map',
      '03-02-list-key-warning',
      '03-03-list-key-schema',
      '03-04-list-key-explaination',
      '04-children',
      '05-exercise',
      // '06-title-summary',
      // '07-react-summary',
    ],
  ],
  [
    '05-input-refs',
    [
      '00-TITLE',
      '01-demo3',
      '02-input-controlled-component',
      '03-about-refs',
      '04-refs',
      '05-exercise5-input-and-refs',
      // '06-solution',
    ],
  ],
  [
    '06-lifecycle-effects',
    [
      '00-TITLE',
      '01-component-lifecycle-01',
      '01-component-lifecycle-02',
      '02-hooks',
      '03-useEffect-01',
      '03-useEffect-02',
      '03-useEffect-03',
      '04-refs',
      '05-exercise6-lifecycle',
      // '06-solution',
      // '07-states',
      // '08-sharing-state',
      // '09-transient-UI-state',
      // '10-navigation-state',
      // '11-application-state',
      // '12-persistent-state',
    ],
  ],
  [
    '07-routing-and-context',
    [
      '00-TITLE',
      '01-SPA-and-routes',
      '02-react-router-presentation',
      '03-route-component',
      '04-route-props-01',
      '04-route-props-02',
      '05-switch-and-redirect',
      '06-link-and-navlink',
      '07-exercise7-navigation',
      '08-TITLE-CONTEXT',
      // '08-solution',
      '09-context-why',
      '10-context-how',
      '11-context-code',
      '12-context-usage',
      '13-exercise8-context'
    ],
  ],
  [
    '08-forms-reuse-logic',
    [
      '00-TITLE',
      '06-form-code-01',
      '06-form-code-02',
      '06-form-code-03',
      '06-form-code-04',
      '08-forms',
      '09-exercise9-reuse-form-logic',
      // '11-thank-you',
    ],
  ],
  [
    '09-react-query',
    [
      '00-TITLE',
      '01-why',
      '02-useQuery',
      '03-useMutation',
      '04-exercise',
    ],
  ],
];

const expertHooks = [
  [
    'expert/hooks/00-school',
    [
      '00-title',
    ]
  ],
  [
    'expert/hooks/01-intro',
    [
      '00-why-hooks',
      '01-without-hooks',
      '02-with-hooks',
      '03-no-breaking-change',
    ]
  ],
  [
    'expert/hooks/02-hooks',
    [
      '00-title',
      '01-what-hooks',
      '02-useState',
      '03-useEffect',
      '04-exercise-01',
      '04-solution-01a',
      '05-solution-01b',
      '06-solution-01c',
      '07-exercise-02',
      '07-solution-02',
    ]
  ],
  [
    'expert/hooks/03-js-scoped',
    [
      '00-title',
      '01-js-scoped',
      '02-every-render',
      '03-usememo',
      '04-usecallback',
      '05-useref',
      '06-correction',
      '07-exercise-02b',
      '07-solution-02b',
      '08-comparison',
      '09-comparison-example',
      '10-choose',
    ]
  ],
  [
    'expert/hooks/04-rules',
    [
      '00-title',
      '01-call-all',
      '02-function-only',
    ]
  ],
  [
    'expert/hooks/05-custom',
    [
      '00-title',
      '01-reusable',
      '02-custom-hook',
      '03-exercise-03',
      '03-solution-03',
    ]
  ],
  [
    'expert/hooks/07-reducer-context',
    [
      '00-title',
      '01-useReducer',
      '02-useReducer-example',
      '03-useReducer-custom',
      '04-exercise-04',
      '04-solution-04',
      '05-useContext',
      '06-useContext-reducer',
      '07-exercise-05',
      '07-solution-05',
    ]
  ],
  [
    'expert/hooks/08-test',
    [
      '00-title',
      '01-components',
      '02-hooks-rule',
      '03-hooks-test',
    ]
  ],
  [
    'expert/hooks/09-internals',
    [
      '00-title',
      '01-rules',
      '02-just-arrays',
    ]
  ],
  [
    'expert/hooks/10-conclusion',
    [
      '00-title',
      '01-what',
      '02-rules',
      '04-conclusion',
      '05-further-reading',
    ]
  ]
];

const allFiles = [...institute, ...expertHooks];

const makeSlide = (dir) => (file) => ({ path: `${dir}/${file}.md` });
const pathReducer = (acc, [dir, files]) => [...acc, ...files.map(makeSlide(dir))];
const slides = ()=>allFiles.reduce(pathReducer, []);
// Is to replace by
SfeirThemeInitializer.init(slides);
