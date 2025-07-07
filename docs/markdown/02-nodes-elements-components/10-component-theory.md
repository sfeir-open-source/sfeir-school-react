<!-- .slide: class="center" -->

# Some vocabulary

**UI = f(state)**<br/>
user interface is a function of the state. When the state changes, the UI updates.

##==##

<!-- .slide: class="center" -->

# Some vocabulary

**UI = f(state)**<br/>
user interface is a function of the state. When the state changes, the UI updates.<br/><br/>
**Component = (props) => Node**<br/>
A React component is simply a function that :

- Takes props as input
- Returns a Node (what you want to render)

##==##

<!-- .slide: class="center" -->

# Some vocabulary

**UI = f(state)**<br/>
user interface is a function of the state. When the state changes, the UI updates.<br/><br/>
**Component = (props) => Node**<br/>
A React component is simply a function that :

<div>

- Takes props as input
- Returns a Node (what you want to render)<br/><br/>

</div>

**type Node = Element | Fragment | string | null | Node[]**<br/>
This is what you component returns
##==##

<!-- .slide: class="center" -->

# Some vocabulary

**UI = f(state)**<br/>
user interface is a function of the state. When the state changes, the UI updates.<br/><br/>
**Component = (props) => Node**<br/>
A React component is simply a function that :

<div>

- Takes props as input
- Returns a Node (what you want to render)<br/><br/>

</div>

**type Node = Element | Fragment | string | null | Node[]**<br/>
This is what you component returns <br/> <br/>

**Element = Component(props)**<br/>
A React Element is an instance of a Component
