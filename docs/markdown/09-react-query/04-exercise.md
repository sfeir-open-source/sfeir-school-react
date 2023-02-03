# Exercise 10

## React Query to rule them all!

## useDocumentation() => https://react-query-v3.tanstack.com

1) Implement `usePeople` using react-query
  - fetch & store people with useQuery
  - return an object with people & isLoading
  - adapt components that needs people

2) Handle person update
  - with `useMutation`, create a method updatePerson
  - return this method from usePeople
  - use updatePerson in **ContextualPerson** component
