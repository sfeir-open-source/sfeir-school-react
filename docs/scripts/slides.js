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
    '00-school/20-what-we-will-do',
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
      '02-nodes-elements-components/31-conditionals-if-switch.md',
      '02-nodes-elements-components/32-conditionals-variable.md',
      '02-nodes-elements-components/33-conditionals-logical.md',
      '02-nodes-elements-components/34-conditionals-ternary.md',
    ];
  }

  function listsSlides() {
    return [
      '02-nodes-elements-components/40-lists.md',
      '02-nodes-elements-components/41-list-use-map.md',
      '02-nodes-elements-components/42-list-key-warning.md',
      '02-nodes-elements-components/44-list-key-explaination.md',
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
  return ['03-gestion-etat-et-events/00-TITLE.md'];
}

function lifecycleEtDomSlides() {
  return ['04-lifecycle-et-dom/00-TITLE.md'];
}

function customHooksAndHocSlides() {
  return ['05-custom-hooks-and-hoc/00-TITLE.md'];
}

function routingContextSuspensSlides() {
  return ['06-routing-context-suspens/00-TITLE.md'];
}

function formulairesSlides() {
  return ['07-formulaires/00-TITLE.md'];
}

function statesSlides() {
  return ['08-states/00-TITLE.md'];
}

function bibliothequesDeComposantsTestingSlides() {
  return ['09-bibliotheques-de-composants-testing/00-TITLE.md'];
}

function formation() {
  return [
    ...schoolSlides(), //
    ...introSlides(), //
    ...nodesElementsComponentsSlides(), //
    ...gestionEtatEtEventsSlides(), //
    ...lifecycleEtDomSlides(), //
    ...customHooksAndHocSlides(), //
    ...routingContextSuspensSlides(), //
    ...formulairesSlides(), //
    ...statesSlides(), //
    ...bibliothequesDeComposantsTestingSlides(), //
  ].map((slidePath) => {
    return { path: slidePath };
  });
}

SfeirThemeInitializer.init(formation);
