<!-- .slide: class="with-code inconsolata"-->
# Syntax explanation

**Interpolation**
<!-- .element: class="important"-->

```tsx
function App() {
  const name = "John";
  return <span>{name}</span>;
}
```
<!-- .element: class="big-code"-->

**Property**
<!-- .element: class="important"-->

```tsx
function App() {
  const disabled = true;
  return <button type="button" disabled={disabled}>Click me</button>;
}
```
<!-- .element: class="big-code"-->

**Event**
<!-- .element: class="important"-->

```tsx
function App() {
  return <button type="button" onClick={console.log}>Click me</button>;
}
```
<!-- .element: class="big-code"-->

##==##

<!-- .slide: class="with-code inconsolata"-->
# The power of JSX

**JSX is just JavaScript**, that means you can use any JavaScript expression inside JSX.
with the `{}` you can use any Javascript expression inside JSX.

<br/><br/>

Keep it mind it exist bad practices, like:

- instantiate a class
- use ++ or -- during an interpolation

##==##

<!-- .slide: class="with-code inconsolata"-->
# Properties Binding for components

React component is associate to an **HTMLElement** for React
<!-- .element: class="important"--> 

<br/><br/>

```tsx
function App() {
  const persons = [
    { name: "John", age: 42 },
    { name: "Jane", age: 36 },
  ];
  return <List persons={persons} /> ;
}
```
<!-- .element: class="big-code"-->

##==##

<!-- .slide: class="with-code inconsolata"-->
# Event Binding for components

Event binding is the same as properties binding, under the hood you pass the function to the child component.
<!-- .element: class="important"--> 

<br/><br/>

```tsx
function App() {
  const handleClick = () => console.log("clicked");
  return <CustomButton click={handleClick} /> ;
}
```
<!-- .element: class="big-code"-->




