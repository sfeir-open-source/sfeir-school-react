# 10-forms instructions

## How to run?

```Bash
cd ./steps
npm run 10-forms
```

## TODO

1. Create people filter form

   - Use search card from `src/pages/PeopleGridPage` to create a `SearchForm` component in `src/components/SearchForm.tsx`
   - **Do not use any external library**
   - Change on the text field should be taken immediately
   - Create a global custom hook `useFilteredPeople` which take people from parameter and filter the list
   - Filter only on firstname, lastname and position

2. Make person infos editable

   - Create a new page `/people/:id`
   - This page should be accessible from an "Edit" link on the `PersonCard` (use the `CardFooter`)
   - Create a `EditPersonFormCard` using react-hook-form or formik library
     - editable fields: firstname (text field), lastname (text field), position (select), email (email field)
     - save on submit by calling: `PATCH /people/:id` with only the new fields
       - **Do not forget to add header `Content-Type: application/json`**
