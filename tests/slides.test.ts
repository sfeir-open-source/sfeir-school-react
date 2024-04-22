import { describe, expect, it } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';

const DOCS_PATH = '../docs';
const STEPS_PATH = '../steps';
const MARKDOWN_PATH = `${DOCS_PATH}/markdown`;
const SCRIPT_SLIDES_JS_PATH = `${DOCS_PATH}/scripts/slides.js`;

describe('should have only defined slides', () => {
  it.each(slides)('%s referenced in slides.js does exists', (slidePath: string) => {
    expect(slidePath).toBeDefined();
    expect(fs.existsSync(path.resolve(path.join(MARKDOWN_PATH, slidePath)))).toBeTruthy();
  });
});

describe('all slides should be used', () => {
  const slideFilesPath = fs
    .readdirSync(path.resolve(MARKDOWN_PATH), { encoding: 'utf-8', recursive: true })
    .filter((path) => path.endsWith('.md'));
  it.each(slideFilesPath)('%s is referenced in slides.js', (slideFilePath: string) => {
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

const slides: string[] = (await import(getSlidesJsImport())).default().map((slide) => slide.path);
const labSlides = slides.filter((path) => path.includes('-lab-'));

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

function isLabCommandRow(row: string): boolean {
  return row.includes('npm run');
}
function getCommandFromLabCommandRow(row: string): string {
  return row.split('npm run ')[1].trim();
}
