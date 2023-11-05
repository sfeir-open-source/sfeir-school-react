<!-- .slide: class="transition-bg-blue-3 right"-->

# React Components

##==##

# What are React Components?

React components are reusable, self-contained building blocks of a React application. They encapsulate a piece of UI, handling its logic and rendering. Components can be functional or class-based

<!-- .element: class="important"-->

##==##

<!-- .slide: class="two-column"-->

# Functional Components

```jsx
import React from 'react';

const FunctionalComponent = () => {
  const handleIncrement = () => {
    alert('Increment Clicked');
  };

  return (
    <div>
      <h2>Functional Component</h2>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default FunctionalComponent;
```

</br>

- Defined as a JavaScript function.
- Can use **Hooks** for state and lifecycle features.
<!-- .element: class="important"-->
- Lightweight and often more performant.

##--##

# Class-based Components

```jsx
import React from 'react';

class ClassBasedComponent extends React.Component {
  handleIncrement = () => {
    alert('Increment Clicked');
  };

  function handleDecrement() {
    alert('Decrement Clicked');
  }

  render() {
    return (
      <div>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleIncrement.bind(this)}>Decrement</button>
      </div>
    );
  }
}

export default ClassBasedComponent;
```

</br>

- Defined as an ES6 class extending React.Component.
- Can access to **lifecycle methods** without Hooks.
<!-- .element: class="important"-->
- Can be complex for large-scale applications.
- Necessary for components reliant on older React versions (<16).

##==##

<!-- .slide: class="two-column"-->

# Invoking as a JSX element

```jsx
const App = () => {
  return (
    <div>
      <FunctionalComponent />
      <ClassBasedComponent />
    </div>
  );
};
```

</br>

- JSX provides a clear and standard way to define components, enhancing code readability.
- Using JSX ensures proper component behavior and reduces the chance of bugs.

##--##

# Invoking as a function

```jsx
const App = () => {
  return (
    <div>
      {FunctionalComponent()}
      {ClassBasedComponent()}
    </div>
  );
};
```

</br>

- Direct function invocation may lead to unexpected behavior and performance issues.
- Directly invoking components can introduce subtle bugs, especially with context, props, or state.
