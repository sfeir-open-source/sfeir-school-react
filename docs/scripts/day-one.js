function schoolSlides() {
  return ['00-school/00-TITLE.md', '300-speaker/01-SPEAKER-NICOLAS-FRIZZARIN.md', '00-school/01-RESOURCES.md'];
}

function introSlides() {
  return [
    '01-intro/00-TITLE.md',
    '01-intro/01-ENVIRONMENTS.md',
    '01-intro/02-BOOTSTRAPPING.md',
    '01-intro/03-HELLO_WORLD.md',
    '01-intro/10-EXERCICE-BOOTSTRAPPING.md',
    '01-intro/04-DEEPER.md',
    '01-intro/05-JSX.md',
  ];
}

export function dayOneSlides() {
  return [...schoolSlides(), ...introSlides()];
}
