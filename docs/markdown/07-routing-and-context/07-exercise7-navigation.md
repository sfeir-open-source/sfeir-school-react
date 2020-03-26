<!-- .slide:-->

# Exercise 07: navigation

## use a router

- Add two routes: **/player** and **/list**

  - add a **Redirect** to /list as default
  - Use the "render" form of **Route** so you can pass people as propto Player and SearchableList
  - Replace the "toggle" in AppBar at least with two **NavLinks**
  - or better with two ActionItems changing routes (see Route without path)

- **Bonus**: Add a **/person/:id** route and a new **Person** component
  - Person should receive a person via props and display it
  - Person should display "not found" if the person does not exist
