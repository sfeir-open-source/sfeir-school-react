<!-- .slide: class="center" -->
# JSX

<i>Syntax extension for JavaScript that lets you write "HTML-Like" markup</i>

Rules
  1. Return a single root element<br>
<i>You will have to wrap your elements into a \<div> or a \<React.Fragment> / <></i><br><br>
  2. Close all the tags<br>
<i>JSX requires tags like img/li/.. to be explicitly closed</i><br><br>
  3. Use camelCase for attributes to avoid dashes and reserved words (like class, stroke-width)<br>
<i>JSX turns into JavaScript and attributes written in JSX become keys of JavaScript objects.<br>(ie: "class" -> "className", "stroke-width" -> "strokeWidth")</i>

##==##

<!-- .slide: class="with-code two-column" -->
React.createElement

```javascript []
export function Dashboard() {
    // Display a div which contains an ordered list of three elements

    return React.createElement("div", { },
                React.createElement("ol", { },
                    React.createElement("li", { }, "One"),
                    React.createElement("li", { }, "Two"),
                    React.createElement("li", { }, "Three")));
}
```

##--##
JSX

```javascript []
export function Dashboard() {
    // Display a div which contains an ordered list of three elements

    return (
        <div>
            <ol>
                <li>One</li>
                <li>Two</li>
                <li>Three</li>
            </ol>
        </div>
    );
}
```