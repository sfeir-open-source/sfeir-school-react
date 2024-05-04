import { describe, expect, it } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import packageJson from '../steps/package.json';

const STEPS_PATH = '../steps';

const DIR_NOT_A_PROJECT = ['node_modules', 'common'];
const PROJECT_NOT_A_STEP = ['api'];

describe('every project should be declared in the workspace', () => {
  const projectsDir = getProjectsDir();
  it.each(projectsDir)('%s', (stepDir) => {
    expect(packageJson.workspaces.includes(stepDir)).toBeTruthy();
  });
});

describe('every project should have a dedicated script with the same name', () => {
  const projectsDir = getProjectsDir();
  it.each(projectsDir)('%s', (stepDir) => {
    expect(packageJson.scripts[stepDir]).toBeDefined();
  });
});

describe("project's package.json name should have same name as the directory", () => {
  const projectsDir = getProjectsDir();
  it.each(projectsDir)('%s', (stepDir) => {
    const projectPackageJsonText = fs.readFileSync(
      path.resolve(path.join(STEPS_PATH, stepDir, 'package.json')),
      'utf-8'
    );
    const projectPackageJson = JSON.parse(projectPackageJsonText);
    expect(projectPackageJson.name).toBe(stepDir);
  });
});

describe('every step should have a solution project', () => {
  const projectsDir = getProjectsDir();
  const stepsDir = projectsDir
    .filter((dir) => PROJECT_NOT_A_STEP.every((d) => !dir.endsWith(d)))
    .filter((dir) => !dir.endsWith('-solution'));
  it.each(stepsDir)('%s', (stepDir) => {
    const solutionDir = stepDir + '-solution';
    expect(projectsDir.includes(solutionDir)).toBeTruthy();
  });
});

describe('every solution should have same name as step with -solution suffix', () => {
  const stepsDir = getProjectsDir();
  const solutionStepsDir = stepsDir.filter((dir) => dir.endsWith('-solution'));
  it.each(solutionStepsDir)('%s', (solutionStepDir) => {
    const stepDir = solutionStepDir.slice(0, -'-solution'.length);
    expect(stepsDir.includes(stepDir)).toBeTruthy();
  });
});

describe("solution's README.md should be identical to exercise's one", () => {
  const stepsDir = getProjectsDir();
  const solutionStepsDir = stepsDir.filter((dir) => dir.endsWith('-solution'));
  it.each(solutionStepsDir)('%s', (solutionStepDir) => {
    const stepDir = solutionStepDir.slice(0, -'-solution'.length);
    const stepReadme = fs.readFileSync(path.resolve(path.join(STEPS_PATH, stepDir, 'README.md')), 'utf-8');
    const solutionReadme = fs.readFileSync(path.resolve(path.join(STEPS_PATH, stepDir, 'README.md')), 'utf-8');
    expect(stepReadme).toStrictEqual(solutionReadme);
  });
});

describe('exercise README.md should point out the correct command', () => {
  const projectsDir = getProjectsDir();
  const stepsDir = projectsDir
    .filter((dir) => PROJECT_NOT_A_STEP.every((d) => !dir.endsWith(d)))
    .filter((dir) => !dir.endsWith('-solution'));
  it.each(stepsDir)('%s', (stepDir) => {
    const stepReadme = fs.readFileSync(path.resolve(path.join(STEPS_PATH, stepDir, 'README.md')), 'utf-8');
    expect(stepReadme).toContain(`npm run ${stepDir}`);
  });
});

describe('exercise README.md should have the correct title', () => {
  const projectsDir = getProjectsDir();
  const stepsDir = projectsDir
    .filter((dir) => PROJECT_NOT_A_STEP.every((d) => !dir.endsWith(d)))
    .filter((dir) => !dir.endsWith('-solution'));
  it.each(stepsDir)('%s', (stepDir) => {
    const stepReadme = fs.readFileSync(path.resolve(path.join(STEPS_PATH, stepDir, 'README.md')), 'utf-8');
    expect(stepReadme.split('\n')[0]).toStrictEqual(`# ${stepDir} instructions`);
  });
});

function getProjectsDir() {
  return fs
    .readdirSync(path.resolve(STEPS_PATH))
    .filter((dir) => DIR_NOT_A_PROJECT.every((d) => !dir.endsWith(d)))
    .filter((dir) => fs.statSync(path.resolve(path.join(STEPS_PATH, dir))).isDirectory());
}
