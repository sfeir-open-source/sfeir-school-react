<!-- .slide: class="transition bg-pink" -->

# @tanstack/react-query

##==##

# @tanstack/react-query

![center](./assets/images/react-query.png)

##==##

<!-- .slide: class="with-code" -->

# Create and provide the client

```TypeScript
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <People />
    </QueryClientProvider>
  )
}
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# Create a query

```TypeScript
import { useQuery } from '@tanstack/react-query';
function People() {
  const { data: people } = useQuery({
    queryKey: ['people'],
    queryFn: () => fetch('http://localhost:3000/people').then((res) => res.json()),
  });
  return <ul>{people.map(person => (<li>{person.firstname} {person.lastname}</li>))}</ul>;
}
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# Grab query statuses

```TypeScript [3,7-8]
import { useQuery } from '@tanstack/react-query';
function People() {
  const { isPending, error, data: people } = useQuery({
    queryKey: ['people'],
    queryFn: () => fetch('http://localhost:3000/people').then((res) => res.json()),
  });
  if (isPending) return 'Loading...'
  if (error) return 'An error has occurred: ' + error.message
  return <ul>{people.map(person => (<li>{person.firstname} {person.lastname}</li>))}</ul>;
}
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# Configure the query

```TypeScript [3,6-8]
import { useQuery } from '@tanstack/react-query';
function People() {
  const { data: people } = useQuery({
    queryKey: ['people'],
    queryFn: () => fetch('http://localhost:3000/people').then((res) => res.json()),
    refetchInterval: 10_000,
    staleTime: 30_000,
  });
  return <ul>{people.map(person => (<li>{person.firstname} {person.lastname}</li>))}</ul>;
}
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# Setup global default config

```TypeScript
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10_000,
    },
  },
});
```

<!-- .element: class="big-code" -->
