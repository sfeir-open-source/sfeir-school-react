# 14-react-query instructions

## How to run?

```Bash
cd ./steps
npm run 14-react-query
```

## TODO

1. Setup React Query

   - Create a new client in `src/client.ts` with `new QueryClient()`
   - Provide it to the whole app in `src/main.tsx` using `QueryClientProvider`

> Official documentation is here: https://tanstack.com/query/latest/docs/framework/react/quick-start

2. Show last message

   - Edit the component `src/components/Messages`
   - Use `useQuery` hook to fetch `/api/messages`
   - A type `Message` is globally defined here `src/types.d.ts`
   - Configure it to refresh the messages every 10 seconds
