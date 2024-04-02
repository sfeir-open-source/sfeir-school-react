# 03-state-and-clicks instructions

## How to run?

```Bash
cd ./steps
npm run 03-state-and-clicks
```

## TODO

1. No more import people but fetch them with an HTTP call

   - Edit only the `src/components/App.tsx` component
   - remove the line `import { people } from '../../api/people.json';`
   - use `fetch('http://localhost:3000/people')` to grab people instead

2. Display nothing will the list is not loaded

3. Show all people as list

   - Add a list with all peoples as grid
