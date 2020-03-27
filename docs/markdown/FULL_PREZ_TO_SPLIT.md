<!-- .slide:-->




# This was just the beginning ...


# #sfeirschool #react
@sfeir @wgoedel


![](./assets/images/g156f47c483_0_105.png)

##==##
<!-- .slide:-->




# This was just the beginning ...


# #sfeirschool #react
@sfeir @wgoedel


![](./assets/images/g5531171877_15_7.png)

##==##
<!-- .slide:-->

# input,
controlled components





##==##
<!-- .slide:-->

demo 03


Controlled components





##==##
<!-- .slide:-->

input - controlled components





state = { value, disabled, … }


state = { value, disabled, … }


Notes:
use events.jsx



##==##
<!-- .slide:-->




sync


state = { value, disabled, … }


state = { value, disabled, … }


input - controlled components


Notes:
use events.jsx



##==##
<!-- .slide:-->




Every piece of knowledge must have a single, unambiguous, authoritative representation within a system
the DRY principle
The Pragmatic Programmer (Andy Hunt, Dave Thomas)


sync


state = { value, disabled, … }


state = { value, disabled, … }


input - controlled components


Notes:
use events.jsx



##==##
<!-- .slide:-->




value, disabled, ...


onChange, ...


component is thesingle source of truth


state = { value, disabled, … }


state = { value, disabled, … }


projection of state


input - controlled components


Notes:
use events.jsx



##==##
<!-- .slide:-->




a word about refs


parent components interact with their children via props
to modify a child, re-render with new props;that's the typical state projection UI = f(state)

sometimes you need to imperatively modify a component outside the typical dataflow
focus() a DOM component, play() a <video>
interact with WebComponents

refs are escape hatcheshttps://reactjs.org/docs/refs-and-the-dom.html


##==##
<!-- .slide: class="with-code" -->




```
class Jukebox extends React.Component {
  audioElmt = React.createRef();

  play() {
    this.audioElmt.current.play();
  }

  render() {
    return <audio ref={this.audioElmt} />;
  }
}


const MyInput = props => {
  const inputRef = useRef();

  execWhenItAppears(() => {
    inputRef.current.focus();
  });

  return <input ref={inputRef} {...props} />;
};


```

refs


refs of DOM components give access to the document object instance - this includes WebComponents

refs of class components give access to their exposed API

you can't ref a function component


##==##
<!-- .slide:-->

Exercice 05: inputs and refs


5





Implement the SearchableList component
manage a query state holding the value of the search input
display the filtered list on change
connect the clear icon

Expose an imperative next method on the Carousel in Player
call it via a ref when the play button is clicked


filter lists, control the carousel


##==##
<!-- .slide:-->

SOLUTION...
