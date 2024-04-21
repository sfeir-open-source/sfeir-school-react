<!-- .slide: class="transition" -->

# Suspense

##==##

<!-- .slide: class="with-code" -->

# Suspense

```TypeScript
<Suspense fallback={<Spinner />}>
  <LongToLoadComponent />
</Suspense>
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# Suspense and lazy loading

```TypeScript [1|3|8|7,9]
import React, { Suspense } from 'react';

const LazyPeopleGrid = React.lazy(() => import('../components/PeopleGrid'));

export function PeopleGridPage() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
        <LazyPeopleGrid />
    </Suspense>
  );
}
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# Suspense and lazy loading

![center](./assets/images/suspense.gif)
