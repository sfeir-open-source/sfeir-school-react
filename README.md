# SFEIR School React

<p align="center">
 <img style="display:block" width="20%" height="20%" src="./docs/assets/images/sfeir-school-logo.png" alt="SFEIR School logo">
</p>

<br/>

[Discover the SFEIR Schools](https://www.sfeir.com/fr/contenus-dexperts/sfeir-school)

# Slides

You can view the slides [here](https://sfeir-open-source.github.io/sfeir-school-react/).

## Develop

To run docs locally, go in directory `docs` and run `npx serve` of if you don't have node, you can use docker `docker-compose up`, and open slides on http://localhost:3000/.

## Workshop

Workshops are in directory `steps` :

- two directories per workshop :
  - one with source file to complete
  - a second directory suffixed with `-solution` which contains source file with solutions.

> Note: You may open steps folder with your editor (especially VSCode)

### Start a lab

```bash
cd steps
npm install
npm run client -- exo01
# for the solution
npm run client -- exo01-solution
```

### Start the slide

```bash
cd docs
npm install
npm run start
```

## Contributing

### Contributing Guidelines

Read through our [contributing guidelines][contributing] to learn about our submission process, coding rules and more.

### Want to Help?

Want to file a bug, contribute some code, or improve documentation? Excellent! Read up on our guidelines for [contributing][contributing] and then check out one of our issues labeled as <kbd>help wanted</kbd> or <kbd>good first issue</kbd>.

### Code of Conduct

Help us keep Angular open and inclusive. Please read and follow our [Code of Conduct][codeofconduct].

[contributing]: CONTRIBUTING.md
[codeofconduct]: https://github.com/sfeir-open-source/.github/blob/main/CODE_OF_CONDUCT.md
