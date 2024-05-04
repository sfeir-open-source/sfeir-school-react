import { describe, expect, it } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';

const DOCS_PATH = '../docs';
const STEPS_PATH = '../steps';
const MARKDOWN_PATH = `${DOCS_PATH}/markdown`;
const IMAGES_PATH = `${DOCS_PATH}/assets/images`;
const SCRIPT_SLIDES_JS_PATH = `${DOCS_PATH}/scripts/slides.js`;

describe('should have only defined slides', () => {
  it.each(slides)('%s', (slidePath: string) => {
    expect(slidePath).toBeDefined();
    expect(fs.existsSync(path.resolve(path.join(MARKDOWN_PATH, slidePath)))).toBeTruthy();
  });
});

describe('all slides should be used', () => {
  const slideFilesPath = fs
    .readdirSync(path.resolve(MARKDOWN_PATH), { encoding: 'utf-8', recursive: true })
    .filter((path) => path.endsWith('.md'));
  it.each(slideFilesPath)('%s', (slideFilePath: string) => {
    expect(slideFilePath).toBeDefined();
    expect(slides.includes(slideFilePath)).toBeTruthy();
  });
});

describe('every lab should point out the correct command to run the exercise', () => {
  it.each(labSlides)('%s', (slidePath) => {
    const slide = readMd(slidePath);
    const command = slide.split('\n').find(isLabCommandRow)!;
    expect(command).toBeDefined();
    expect(fs.existsSync(path.resolve(path.join(STEPS_PATH, command.split('npm run ')[1].trim())))).toBeTruthy();
  });
});

describe('every exercise should be pointed out in a lab slide', () => {
  const exercises = (
    JSON.parse(fs.readFileSync(path.resolve(path.join(STEPS_PATH, 'package.json')), 'utf-8')).workspaces as string[]
  ).filter((dir) => !dir.endsWith('-solution') && dir !== 'api');
  const commandsInLabSlides = labSlides
    .map(readMd)
    .flatMap((slide) => slide.split('\n').filter(isLabCommandRow)!)
    .map(getCommandFromLabCommandRow);
  it.each(exercises)('%s', (exercisePath) => {
    expect(commandsInLabSlides).toContain(exercisePath);
  });
});
describe('every lab should use a lab slide', () => {
  it.each(labSlides)('%s', (slidePath) => {
    const slide = readMd(slidePath);
    const rows = slide.split('\n').map((rows) => rows.trim());
    expect(rows).toContain('<!-- .slide: class="exercice" -->');
    expect(rows).toContain('## Lab');
  });
});

describe('every image found in slide should exists', () => {
  const imagesInSlide = slides.map(readMd).flatMap((md) =>
    md
      .split('\n')
      .filter((row) => row.startsWith('!['))
      .map((row) => {
        const urlPart = row.split('](')[1];
        return urlPart?.substring(0, urlPart.lastIndexOf(')'));
      })
      .filter((url) => !url.startsWith('http'))
      .filter((imagePath) => imagePath.startsWith('assets') || imagePath.startsWith('./assets'))
  );
  it.each(imagesInSlide)('%s', (imageInSlide) => {
    expect(fs.existsSync(path.resolve(path.join(DOCS_PATH, imageInSlide)))).toBeTruthy();
  });
});
describe('every image found in image folder should be in a slide', () => {
  const imageFilesPath = fs
    .readdirSync(path.resolve(IMAGES_PATH), { encoding: 'utf-8', recursive: true })
    .filter((imagePath) => !fs.statSync(path.resolve(path.join(IMAGES_PATH, imagePath))).isDirectory())
    .filter((imagePath) => !imagePath.includes('sfeir-school-logo.png'));
  const allMdFilesConcat = allMdFiles.map((md) => md.md).join('\n\n\n\n\n\n');
  it.each(imageFilesPath.map((p) => path.join(IMAGES_PATH, p)).map((p) => p.replace('../docs/', '')))(
    '%s',
    (imageFilePath) => {
      expect(allMdFilesConcat.includes(imageFilePath)).toBeTruthy();
    }
  );
});

describe('only valid class should be used', () => {
  const cssFiles = [
    path.resolve(path.join(DOCS_PATH, 'web_modules/sfeir-school-theme/sfeir-school-theme.css')),
    path.resolve(path.join(DOCS_PATH, 'web_modules/sfeir-school-theme/fontello-sfeir/css/sfeir-codes.css')),
  ];
  const existingStyles = cssFiles.map(readCss).join('\n\n\n\n\n\n');
  const usedClasses = allMdFiles.flatMap((file) =>
    file.md
      .split('\n')
      .filter((row) => row.startsWith('<!--'))
      .map((row) => {
        const classesPart = row.split('class="')[1];
        return classesPart?.substring(0, classesPart.indexOf('"'));
      })
      .filter((classes) => classes != undefined)
      .flatMap((classes) => classes.split(' '))
      .map((clazz) => ({ class: clazz, file: file.path }))
  );
  it.each(usedClasses)('%o', (usedClass) => {
    expect(existingStyles.includes(`.${usedClass.class}`)).toBeTruthy();
  });
});

const slides: string[] = (await import(getSlidesJsImport())).default().map((slide) => slide.path);
const labSlides = slides.filter((path) => path.includes('-lab-'));

const allMdFiles = fs
  .readdirSync(path.resolve(MARKDOWN_PATH), { encoding: 'utf-8', recursive: true })
  .filter((path) => path.endsWith('.md'))
  .map((path) => ({ path, md: readMd(path) }));

function getSlidesJsImport() {
  return (
    'data:text/javascript;charset=utf-8,' +
    encodeURIComponent(
      fs
        .readFileSync(path.resolve(SCRIPT_SLIDES_JS_PATH), 'utf-8')
        .split('\n')
        .filter((line) => !line.includes('SfeirThemeInitializer'))
        .join('\n')
        .replace('function formation() {', 'export default function formation() {')
    )
  );
}

function readMd(mdPath: string) {
  return fs.readFileSync(path.resolve(path.join(MARKDOWN_PATH, mdPath)), 'utf-8');
}

function readCss(cssPath: string) {
  return fs.readFileSync(path.resolve(cssPath), 'utf-8');
}

function isLabCommandRow(row: string): boolean {
  return row.includes('npm run');
}
function getCommandFromLabCommandRow(row: string): string {
  return row.split('npm run ')[1].trim();
}
