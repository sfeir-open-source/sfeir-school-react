# a word about refs

- **parent** components **interact with** their **children via props**

  - to modify a child, re-render with new props;that's the typical state projection UI = f(state)

- **sometimes** you need to **imperatively modify** a component outside the typical dataflow

  - focus() a DOM component, play() a &lt;video>
  - interact with WebComponents

- **refs** are **escape hatches**

  https://reactjs.org/docs/refs-and-the-dom.html
