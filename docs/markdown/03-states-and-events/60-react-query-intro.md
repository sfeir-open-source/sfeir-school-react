<!-- .slide: class="with-code" -->

# @tanstack/react-query

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

# @tanstack/react-query

```TypeScript
import { useQuery } from '@tanstack/react-query';
function People() {
  const { isPending, error, data: people } = useQuery({
    queryKey: ['people'],
    queryFn: () => fetch('http://localhost:3000/people').then((res) => res.json()),
  })
  if (isPending) return 'Loading...'
  if (error) return 'An error has occurred: ' + error.message
  return <ul>{people.map(person => (<li>{person.firstname} {person.lastname}</li>))}</ul>;
}

```

<!-- .element: class="big-code" -->
