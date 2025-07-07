# 04-list-and-fetch instructions

## How to run?

```Bash
cd ./steps
npm run 04-list-and-fetch
```

## TODO

1. No more import people but fetch them with an HTTP call

   - Edit only the `src/components/App.tsx` component
   - remove the line `import { people } from '../../api/db.json';`
   - use `fetch('/api/people')` to grab people instead

2. Display nothing while the list is not loaded

3. Show all people as list

   - Add a list with all peoples as grid
