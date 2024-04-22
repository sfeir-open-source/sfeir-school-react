import { describe, expect, it } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';

const DOCS_PATH = '../docs';
const MARKDOWN_PATH = `${DOCS_PATH}/markdown`;
const SCRIPT_SLIDES_JS_PATH = `${DOCS_PATH}/scripts/slides.js`;

const slides: string[] = (
  await import(
    'data:text/javascript;charset=utf-8,' +
      encodeURIComponent(
        fs
          .readFileSync(path.resolve(SCRIPT_SLIDES_JS_PATH), 'utf-8')
          .split('\n')
          .filter((line) => !line.includes('SfeirThemeInitializer'))
          .join('\n')
          .replace('function formation() {', 'export default function formation() {')
      )
  )
)
  .default()
  .map((slide) => slide.path);

describe('should have only defined slides', () => {
  it.each(slides)('%s referenced in slides.js does exists', (slidePath: string) => {
    console.log(slidePath);
    expect(slidePath).toBeDefined();
    expect(fs.existsSync(path.resolve(path.join(MARKDOWN_PATH, slidePath)))).toBeTruthy();
  });
});

describe('all slides should be used', () => {
  const slideFilesPath = fs
    .readdirSync(path.resolve(MARKDOWN_PATH), { encoding: 'utf-8', recursive: true })
    .filter((path) => path.endsWith('.md'));
  it.each(slideFilesPath)('%s is referenced in slides.js', (slideFilePath: string) => {
    console.log(slideFilePath);
    expect(slideFilePath).toBeDefined();
    expect(slides.includes(slideFilePath)).toBeTruthy();
  });
});
