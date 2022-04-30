const nxPreset = require('@nrwl/jest/preset');

module.exports = {
  ...nxPreset,
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
};
