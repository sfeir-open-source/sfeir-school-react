import { SfeirThemeInitializer } from '../web_modules/sfeir-school-theme/sfeir-school-theme.mjs';

// One method per module
function schoolSlides() {
  return [
    '00-school/00-TITLE.md',
    '00-school/01-wifi.md',
    '00-school/02-repository.md',
    '00-school/10-speaker-ape.md',
    '00-school/10-speaker-jhe.md',
    '00-school/10-speaker-jta.md',
    '00-school/10-speaker-rto.md',
    '00-school/11-tour-de-table.md',
    '00-school/20-what-we-will-do.md',
  ];
}

function introSlides() {
  return [
    '01-intro/00-TITLE.md',
    '01-intro/10-app-discovery.md',
    '01-intro/11-vite.md',
    '01-intro/12-advance-bootstraping-next.md',
    '01-intro/13-material-ui.md',
    '01-intro/20-what-is-react.md',
    '01-intro/30-virtual-dom.md',
    '01-intro/40-jsx.md',
  ];
}

function nodesElementsComponentsSlides() {
  function componentsAndComponentsTreeSlides() {
    return [
      '02-nodes-elements-components/10-component-theory.md',
      '02-nodes-elements-components/11-react-components.md',
      '02-nodes-elements-components/15-lab-jsx-props.md',
    ];
  }

  function propsChildrenAndCompositionSlides() {
    return [
      '02-nodes-elements-components/20-component-tree.md',
      '02-nodes-elements-components/21-props.md',
      '02-nodes-elements-components/22-purity.md',
      '02-nodes-elements-components/23-children.md',
      '02-nodes-elements-components/24-composition.md',
      '02-nodes-elements-components/25-lab-composition.md',
    ];
  }

  function conditionnalDisplaySlides() {
    return [
      '02-nodes-elements-components/30-conditionnal-display.md',
      '02-nodes-elements-components/31-just-expression.md',
      '02-nodes-elements-components/32-conditionals-if-switch.md',
      '02-nodes-elements-components/33-conditionals-variable.md',
      '02-nodes-elements-components/34-conditionals-logical.md',
      '02-nodes-elements-components/35-conditionals-ternary.md',
    ];
  }

  function listsSlides() {
    return [
      '02-nodes-elements-components/40-lists.md',
      '02-nodes-elements-components/41-list-use-map.md',
      '02-nodes-elements-components/42-list-key-warning.md',
      '02-nodes-elements-components/43-list-key-schema.md',
      '02-nodes-elements-components/44-list-key-explaination.md',
      '02-nodes-elements-components/45-react-children.md',
    ];
  }

  return [
    '02-nodes-elements-components/00-TITLE.md',
    ...componentsAndComponentsTreeSlides(),
    ...propsChildrenAndCompositionSlides(),
    ...conditionnalDisplaySlides(),
    ...listsSlides(),
  ];
}

function gestionEtatEtEventsSlides() {
  function stateSlides() {
    return [
      '03-states-and-events/10-states.md',
      '03-states-and-events/11-component-flavours.md',
      '03-states-and-events/12-class-component-state.md',
      '03-states-and-events/13-function-component-state.md',
    ];
  }
  function eventHandlersSlides() {
    return [
      '03-states-and-events/20-events.md',
      '03-states-and-events/21-handling-events-name.md',
      '03-states-and-events/22-handling-events-default.md',
      '03-states-and-events/23-synthetic-event.md',
    ];
  }
  function setStateSlides() {
    return [
      '03-states-and-events/30-how-to-change-state.md',
      '03-states-and-events/31-set-state.md',
      '03-states-and-events/32-set-state-async.md',
      '03-states-and-events/33-events-and-state-summary.md',
      '03-states-and-events/35-lab-state-clicks.md',
    ];
  }
  function fetchSlides() {
    return [
      '03-states-and-events/40-fetch.md',
      '03-states-and-events/41-fetch-basis.md',
      '03-states-and-events/42-fetch-method.md',
      '03-states-and-events/43-fetch-body.md',
      '03-states-and-events/44-fetch-headers.md',
    ];
  }
  function effectsSlides() {
    return [
      '03-states-and-events/50-effects.md',
      '03-states-and-events/51-side-effect-without-useeffect.md',
      '03-states-and-events/52-useeffect.md',
    ];
  }
  function fetchListAndEffectLabSlides() {
    return ['03-states-and-events/55-lab-list-and-fetch.md'];
  }
  function basicReactQuerySlides() {
    return ['03-states-and-events/60-react-query-intro.md'];
  }
  return [
    '03-states-and-events/00-TITLE.md',
    ...stateSlides(),
    ...eventHandlersSlides(),
    ...setStateSlides(),
    ...fetchSlides(),
    ...effectsSlides(),
    ...fetchListAndEffectLabSlides(),
    ...basicReactQuerySlides(),
  ];
}

function lifecycleEtDomSlides() {
  function lifecycleSlides() {
    return [
      '04-lifecycle-et-dom/10-lifecycle.md',
      '04-lifecycle-et-dom/11-component-did-mount.md',
      '04-lifecycle-et-dom/12-component-will-unmount.md',
    ];
  }
  function refsAndDOMSlides() {
    return [
      '04-lifecycle-et-dom/20-refs.md',
      '04-lifecycle-et-dom/21-refs-with-interval.md',
      '04-lifecycle-et-dom/22-refs-with-dom.md',
    ];
  }
  function refsLabSlides() {
    return ['04-lifecycle-et-dom/30-lab-better-carousel.md'];
  }
  return [
    '04-lifecycle-et-dom/00-TITLE.md', //
    ...lifecycleSlides(), //
    ...refsAndDOMSlides(), //
    ...refsLabSlides(), //
  ];
}

function customHooksAndHocSlides() {
  function customHooksSlides() {
    return [
      '05-custom-hooks-and-hoc/10-custom-hooks.md',
      '05-custom-hooks-and-hoc/11-how-to-create-hook.md',
      '05-custom-hooks-and-hoc/12-hooks-are-just-functions.md',
      '05-custom-hooks-and-hoc/13-why-create-custom-hook.md',
    ];
  }
  function customHooksLabSlides() {
    return ['05-custom-hooks-and-hoc/15-lab-custom-hooks.md'];
  }
  function hocSlides() {
    return [
      '05-custom-hooks-and-hoc/20-HOC.md',
      '05-custom-hooks-and-hoc/21-HOF.md',
      '05-custom-hooks-and-hoc/22-what-is-HOC.md',
      '05-custom-hooks-and-hoc/23-hoc-ideas.md',
    ];
  }
  function hocLabSlides() {
    return ['05-custom-hooks-and-hoc/25-lab-hoc.md'];
  }
  return [
    '05-custom-hooks-and-hoc/00-TITLE.md',
    ...customHooksSlides(),
    ...customHooksLabSlides(),
    ...hocSlides(),
    ...hocLabSlides(),
  ];
}

function routingContextSuspenseSlides() {
  function routingSlides() {
    return [
      '06-routing-context-suspense/10-routing.md',
      '06-routing-context-suspense/11-client-side-routing.md',
      '06-routing-context-suspense/12-history-api.md',
      '06-routing-context-suspense/13-react-router.md',
      '06-routing-context-suspense/14-other-routers.md',
    ];
  }
  function routingLabSlides() {
    return ['06-routing-context-suspense/15-lab-routing.md'];
  }
  function contextSlides() {
    return ['06-routing-context-suspense/20-context.md'];
  }
  function contextLabSlides() {
    return ['06-routing-context-suspense/25-lab-context.md'];
  }
  function suspenseSlides() {
    return ['06-routing-context-suspense/30-suspense.md'];
  }
  return [
    '06-routing-context-suspense/00-TITLE.md',
    ...routingSlides(),
    ...routingLabSlides(),
    ...contextSlides(),
    ...contextLabSlides(),
    ...suspenseSlides(),
  ];
}

function formulairesSlides() {
  function inputFieldSlides() {
    return [
      '07-formulaires/10-vanilla.md', //
      '07-formulaires/11-field.md', //
      '07-formulaires/12-form.md', //
    ];
  }
  function uncontrolledVsControlledFieldSlides() {
    return [
      '07-formulaires/20-uncontrolled.md',
      '07-formulaires/21-controlled.md',
      '07-formulaires/22-uncontroller-vs-controlled.md',
    ];
  }
  function reactHookFormSlides() {
    return ['07-formulaires/30-react-hook-form.md'];
  }
  function formikSlides() {
    return ['07-formulaires/40-formik.md'];
  }
  function formLabSlides() {
    return ['07-formulaires/55-lab-form.md'];
  }
  return [
    '07-formulaires/00-TITLE.md',
    ...inputFieldSlides(),
    ...uncontrolledVsControlledFieldSlides(),
    ...reactHookFormSlides(),
    ...formikSlides(),
    ...formLabSlides(),
  ];
}

function statesSlides() {
  function useReducerSlides() {
    return [
      '08-states/10-use-reduce-hook.md',
      '08-states/15-lab-use-reduce-hook.md', //
    ];
  }
  function reduxSlides() {
    return [
      '08-states/20-redux.md',
      '08-states/21-redux-toolkit.md',
      '08-states/22-react-redux.md',
      '08-states/25-lab-redux.md',
    ];
  }
  function asyncReduxSlides() {
    return [
      '08-states/30-redux-and-async.md',
      '08-states/31-redux-thunk.md',
      '08-states/32-redux-saga.md',
      '08-states/35-lab-redux-thunk.md', //
    ];
  }
  function serverStateSlides() {
    return [
      '08-states/40-react-query.md',
      '08-states/45-lab-react-query.md', //
    ];
  }
  return [
    '08-states/00-TITLE.md',
    ...useReducerSlides(),
    ...reduxSlides(),
    ...asyncReduxSlides(),
    ...serverStateSlides(),
  ];
}

function componentsLibraryAndTestingSlides() {
  function componentsLibrarySlides() {
    return [
      '09-components-library-and-testing/10-component-library.md',
      '09-components-library-and-testing/11-storybook.md',
      '09-components-library-and-testing/12-known-storybooks.md',
    ];
  }

  function unitTestsSlides() {
    return [
      '09-components-library-and-testing/20-unit-test.md',
      '09-components-library-and-testing/21-vitest.md',
      '09-components-library-and-testing/25-lab-unit-test.md',
    ];
  }

  function componentTestsSlides() {
    return [
      '09-components-library-and-testing/30-component-tests.md',
      '09-components-library-and-testing/31-testing-library.md',
      '09-components-library-and-testing/35-lab-component-test.md',
    ];
  }

  function e2eTestsSlides() {
    return [
      '09-components-library-and-testing/40-end-to-end-tests.md',
      '09-components-library-and-testing/41-cypress.md',
      '09-components-library-and-testing/42-lab-e2e.md',
    ];
  }

  return [
    '09-components-library-and-testing/00-TITLE.md',
    ...componentsLibrarySlides(),
    ...unitTestsSlides(),
    ...componentTestsSlides(),
    ...e2eTestsSlides(),
  ];
}

function optimization() {
  function memo() {
    return ['10-optimization/10-memo.md'];
  }
  function useMemoHook() {
    return ['10-optimization/20-use-memo.md'];
  }
  return [
    '10-optimization/00-TITLE.md', //
    ...memo(), //
    ...useMemoHook(), //
  ];
}

function formation() {
  return [
    ...schoolSlides(),
    ...introSlides(),
    ...nodesElementsComponentsSlides(),
    ...gestionEtatEtEventsSlides(),
    ...lifecycleEtDomSlides(),
    ...customHooksAndHocSlides(),
    ...routingContextSuspenseSlides(),
    ...formulairesSlides(),
    ...statesSlides(),
    ...componentsLibraryAndTestingSlides(),
    ...optimization(),
  ].map((slidePath) => {
    return { path: slidePath };
  });
}

SfeirThemeInitializer.init(formation);
