import { beforeEach, expect } from 'vitest';

beforeEach(({ task }) => {
  if (task.mode !== 'todo') {
    expect.hasAssertions();
  }
});
