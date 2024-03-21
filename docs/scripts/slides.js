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
  ];
}

function introSlides() {
  return ['01-intro/00-TITLE.md'];
}

function noeudsElementsComposantsSlides() {
  return ['02-noeuds-elements-composants/00-TITLE.md'];
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
    //
    ...schoolSlides(), //
    ...introSlides(), //
    ...noeudsElementsComposantsSlides(), //
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
