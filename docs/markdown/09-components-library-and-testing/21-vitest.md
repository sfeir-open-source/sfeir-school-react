<!-- .slide: class="transition" -->

# Vitest

##==##

<!-- .slide: class="with-code" -->

# Vitest

![center](./assets/images/vitest.png)

##==##

<!-- .slide: class="with-code" -->

# Create a test

```TypeScript []
import { expect, test } from 'vitest';

test('should be equal', () => {
    expect(buildString()).toBe('A');
});
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# Create a test

```TypeScript [1,3]
import { expect, it } from 'vitest';

it('should be equal', () => {
    expect(buildString()).toBe('A');
});
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# Group tests

```TypeScript [3,7,11,12]
import { describe, expect, it } from 'vitest';

describe('group of tests', () => {
    it('should be equal', () => {
        expect(buildString()).toBe('A');
    });
    describe('a nested group', () => {
        it('another test', () => {
            /* ... */
        });
    });
});
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# beforeEach / afterEach

```TypeScript [1,4-5]
import { afterEach, beforeEach, describe, expect, it } from 'vitest';

describe('group of tests', () => {
    beforeEach(() => {});
    afterEach(() => {});
    it('should be equal', () => { /* ... */ });
});
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# beforeAll / afterAll

```TypeScript [1,4-5]
import { afterAll, beforeAll, describe, expect, it } from 'vitest';

describe('group of tests', () => {
    beforeAll(() => {});
    afterAll(() => {});
    it('should be equal', () => { /* ... */ });
});
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# each

```TypeScript []
import { it } from 'vitest';

it.each([
    ['first', { firstname: 'one' } as Person, 1],
    ['second', { firstname: 'two' } as Person, 2],
])('should be equal', (s: string, object: Person, n: number) => { /* ... */ });
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# todo / skip / only

```TypeScript []
import { it } from 'vitest';

it.todo('the test to do');
it.skip('this test will not run', () => { /* */});
it.only('the only test in this file to run', () => { /* */});
```

<!-- .element: class="big-code" -->
