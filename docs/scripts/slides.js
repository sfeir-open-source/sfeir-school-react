import { SfeirThemeInitializer } from '../web_modules/sfeir-school-theme/sfeir-school-theme.mjs';

// One method per module
function schoolSlides() {
  const dir = '00-school';
  return [
    `${dir}/00-TITLE.md`,
    `${dir}/10-speaker-ape.md`,
    `${dir}/10-speaker-jhe.md`,
    `${dir}/10-speaker-jta.md`,
    `${dir}/10-speaker-rto.md`,
    `${dir}/10-speaker-tsl.md`,
    `${dir}/10-speaker-ari.md`,
    `${dir}/11-tour-de-table.md`,
    `${dir}/12-information.md`,
    `${dir}/13-requirements.md`,
    `${dir}/14-wifi.md`,
    `${dir}/15-repository.md`,
    `${dir}/20-what-we-will-do.md`,
  ];
}

function introSlides() {
  const dir = '01-intro';
  return [
    `${dir}/00-TITLE.md`,
    `${dir}/10-app-discovery.md`,
    `${dir}/11-vite.md`,
    `${dir}/12-advance-bootstraping-next.md`,
    `${dir}/13-material-ui.md`,
    `${dir}/20-what-is-react.md`,
    `${dir}/30-virtual-dom.md`,
    `${dir}/40-jsx.md`,
  ];
}

function nodesElementsComponentsSlides() {
  const dir = '02-nodes-elements-components';
  function componentsAndComponentsTreeSlides() {
    return [`${dir}/10-component-theory.md`, `${dir}/11-react-components.md`, `${dir}/15-lab-jsx-props.md`];
  }

  function propsChildrenAndCompositionSlides() {
    return [
      `${dir}/20-component-tree.md`,
      `${dir}/21-props.md`,
      `${dir}/22-purity.md`,
      `${dir}/23-children.md`,
      `${dir}/24-composition.md`,
      `${dir}/25-lab-composition.md`,
    ];
  }

  function conditionnalDisplaySlides() {
    return [
      `${dir}/30-conditionnal-display.md`,
      `${dir}/31-just-expression.md`,
      `${dir}/32-conditionals-if-switch.md`,
      `${dir}/33-conditionals-variable.md`,
      `${dir}/34-conditionals-logical.md`,
      `${dir}/35-conditionals-ternary.md`,
    ];
  }

  function listsSlides() {
    return [
      `${dir}/40-lists.md`,
      `${dir}/41-list-use-map.md`,
      `${dir}/42-list-key-warning.md`,
      `${dir}/43-list-key-schema.md`,
      `${dir}/44-list-key-explaination.md`,
      `${dir}/45-react-children.md`,
    ];
  }

  return [
    `${dir}/00-TITLE.md`,
    ...componentsAndComponentsTreeSlides(),
    ...propsChildrenAndCompositionSlides(),
    ...conditionnalDisplaySlides(),
    ...listsSlides(),
  ];
}

function gestionEtatEtEventsSlides() {
  const dir = '03-states-and-events';
  function stateSlides() {
    return [
      `${dir}/10-states.md`,
      `${dir}/11-component-flavours.md`,
      `${dir}/12-class-component-state.md`,
      `${dir}/13-function-component-state.md`,
    ];
  }
  function eventHandlersSlides() {
    return [
      `${dir}/20-events.md`,
      `${dir}/21-handling-events-name.md`,
      `${dir}/22-handling-events-default.md`,
      `${dir}/23-synthetic-event.md`,
    ];
  }
  function setStateSlides() {
    return [
      `${dir}/30-how-to-change-state.md`,
      `${dir}/31-set-state.md`,
      `${dir}/32-set-state-async.md`,
      `${dir}/33-events-and-state-summary.md`,
      `${dir}/35-lab-state-clicks.md`,
    ];
  }
  function fetchSlides() {
    return [
      `${dir}/40-fetch.md`,
      `${dir}/41-fetch-basis.md`,
      `${dir}/42-fetch-method.md`,
      `${dir}/43-fetch-body.md`,
      `${dir}/44-fetch-headers.md`,
    ];
  }
  function effectsSlides() {
    return [`${dir}/50-effects.md`, `${dir}/51-side-effect-without-useeffect.md`, `${dir}/52-useeffect.md`];
  }
  function fetchListAndEffectLabSlides() {
    return [`${dir}/55-lab-list-and-fetch.md`];
  }
  function basicReactQuerySlides() {
    return [`${dir}/60-react-query-intro.md`];
  }
  return [
    `${dir}/00-TITLE.md`,
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
  const dir = '04-lifecycle-et-dom';
  function lifecycleSlides() {
    return [`${dir}/10-lifecycle.md`, `${dir}/11-component-did-mount.md`, `${dir}/12-component-will-unmount.md`];
  }
  function refsAndDOMSlides() {
    return [`${dir}/20-refs.md`, `${dir}/21-refs-with-interval.md`, `${dir}/22-refs-with-dom.md`];
  }
  function refsLabSlides() {
    return [`${dir}/30-lab-better-carousel.md`];
  }
  return [
    `${dir}/00-TITLE.md`, //
    ...lifecycleSlides(), //
    ...refsAndDOMSlides(), //
    ...refsLabSlides(), //
  ];
}

function customHooksAndHocSlides() {
  const dir = '05-custom-hooks-and-hoc';
  function customHooksSlides() {
    return [
      `${dir}/10-custom-hooks.md`,
      `${dir}/11-how-to-create-hook.md`,
      `${dir}/12-hooks-are-just-functions.md`,
      `${dir}/13-why-create-custom-hook.md`,
    ];
  }
  function customHooksLabSlides() {
    return [`${dir}/15-lab-custom-hooks.md`];
  }
  function hocSlides() {
    return [`${dir}/20-HOC.md`, `${dir}/21-HOF.md`, `${dir}/22-what-is-HOC.md`, `${dir}/23-hoc-ideas.md`];
  }
  function hocLabSlides() {
    return [`${dir}/25-lab-hoc.md`];
  }
  return [`${dir}/00-TITLE.md`, ...customHooksSlides(), ...customHooksLabSlides(), ...hocSlides(), ...hocLabSlides()];
}

function routingContextSuspenseSlides() {
  const dir = '06-routing-context-suspense';
  function routingSlides() {
    return [
      `${dir}/10-routing.md`,
      `${dir}/11-client-side-routing.md`,
      `${dir}/12-history-api.md`,
      `${dir}/13-react-router.md`,
      `${dir}/14-other-routers.md`,
    ];
  }
  function routingLabSlides() {
    return [`${dir}/15-lab-routing.md`];
  }
  function contextSlides() {
    return [`${dir}/20-context.md`];
  }
  function contextLabSlides() {
    return [`${dir}/25-lab-context.md`];
  }
  function suspenseSlides() {
    return [`${dir}/30-suspense.md`];
  }
  return [
    `${dir}/00-TITLE.md`,
    ...routingSlides(),
    ...routingLabSlides(),
    ...contextSlides(),
    ...contextLabSlides(),
    ...suspenseSlides(),
  ];
}

function formulairesSlides() {
  const dir = '07-formulaires';
  function inputFieldSlides() {
    return [
      `${dir}/10-vanilla.md`, //
      `${dir}/11-field.md`, //
      `${dir}/12-form.md`, //
    ];
  }
  function uncontrolledVsControlledFieldSlides() {
    return [`${dir}/20-uncontrolled.md`, `${dir}/21-controlled.md`, `${dir}/22-uncontroller-vs-controlled.md`];
  }
  function reactHookFormSlides() {
    return [`${dir}/30-react-hook-form.md`];
  }
  function formikSlides() {
    return [`${dir}/40-formik.md`];
  }
  function formLabSlides() {
    return [`${dir}/55-lab-form.md`];
  }
  return [
    `${dir}/00-TITLE.md`,
    ...inputFieldSlides(),
    ...uncontrolledVsControlledFieldSlides(),
    ...reactHookFormSlides(),
    ...formikSlides(),
    ...formLabSlides(),
  ];
}

function statesSlides() {
  const dir = '08-states';
  function useReducerSlides() {
    return [
      `${dir}/10-use-reduce-hook.md`,
      `${dir}/15-lab-use-reduce-hook.md`, //
    ];
  }
  function reduxSlides() {
    return [`${dir}/20-redux.md`, `${dir}/21-redux-toolkit.md`, `${dir}/22-react-redux.md`, `${dir}/25-lab-redux.md`];
  }
  function asyncReduxSlides() {
    return [
      `${dir}/30-redux-and-async.md`,
      `${dir}/31-redux-thunk.md`,
      `${dir}/32-redux-saga.md`,
      `${dir}/35-lab-redux-thunk.md`, //
    ];
  }
  function serverStateSlides() {
    return [
      `${dir}/40-react-query.md`,
      `${dir}/45-lab-react-query.md`, //
    ];
  }
  return [`${dir}/00-TITLE.md`, ...useReducerSlides(), ...reduxSlides(), ...asyncReduxSlides(), ...serverStateSlides()];
}

function componentsLibraryAndTestingSlides() {
  const dir = '09-components-library-and-testing';
  function componentsLibrarySlides() {
    return [`${dir}/10-component-library.md`, `${dir}/11-storybook.md`, `${dir}/12-known-storybooks.md`];
  }

  function unitTestsSlides() {
    return [`${dir}/20-unit-test.md`, `${dir}/21-vitest.md`, `${dir}/25-lab-unit-test.md`];
  }

  function componentTestsSlides() {
    return [`${dir}/30-component-tests.md`, `${dir}/31-testing-library.md`, `${dir}/35-lab-component-test.md`];
  }

  function e2eTestsSlides() {
    return [`${dir}/40-end-to-end-tests.md`, `${dir}/41-cypress.md`, `${dir}/42-lab-e2e.md`];
  }

  return [
    `${dir}/00-TITLE.md`,
    ...componentsLibrarySlides(),
    ...unitTestsSlides(),
    ...componentTestsSlides(),
    ...e2eTestsSlides(),
  ];
}

function optimization() {
  const dir = '10-optimization';
  function memo() {
    return [`${dir}/10-memo.md`];
  }
  function useMemoHook() {
    return [`${dir}/20-use-memo.md`];
  }
  return [
    `${dir}/00-TITLE.md`, //
    ...memo(), //
    ...useMemoHook(), //
  ];
}

function conclusion() {
  return [
    `11-conclusion/00-TITLE.md`, //
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
    ...conclusion(),
  ].map((slidePath) => {
    return { path: slidePath };
  });
}

SfeirThemeInitializer.init(formation);
