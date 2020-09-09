<style>
.reveal .special-02-input-controlled-component--grid {
    display: grid;
    grid-template-columns: 2fr 1fr 2fr;
}
.reveal .special-02-input-controlled-component--grid>* {
    text-align:center;
}
.reveal .special-02-input-controlled-component--box {
    margin: auto;
    border: thin solid black;
    border-radius: 0.5em;
    color: white;
    text-align:center;
    height: 5em;
    width: 10em;
}
.reveal .special-02-input-controlled-component--box.special-02-input-controlled-component--component {
    background: #ec6302;
}
.reveal .special-02-input-controlled-component--box.special-02-input-controlled-component--dom {
    background: #151577;
}
.reveal .special-02-input-controlled-component--grid img {
    /*margin: auto;*/
    max-height: none;
}
.reveal .special-02-input-controlled-component--striked {
    text-decoration: line-through;
    color: grey;
}
</style>

# input - controlled components

<div class="special-02-input-controlled-component--grid">
    <div class="special-02-input-controlled-component--box special-02-input-controlled-component--component"><br>Component</div>
    <div class="fragment fade-in">
        sync
        <img src="../../assets/images/05-input-refs_02-input-controlled-component_double-arrow.svg" />
    </div>
    <div class="special-02-input-controlled-component--box special-02-input-controlled-component--dom"><br>DOM<br>(input)</div>
    <div><br>state = { value, disabled, … }</div>
    <div></div>
    <div><br>state = { value, disabled, … }</div>
</div>

<br>
<div class="fragment fade-in center">
<blockquote>
    <p>Every piece of knowledge must have a single, unambiguous, authoritative representation within a system</p>
</blockquote>
<cite>
<strong>the DRY principle</strong>
<br><br>
<strong>The Pragmatic Programmer</strong> (Andy Hunt, Dave Thomas)
</cite>
</div>

##==##

<!-- Here new slide in the same file for easy css reuse -->

# input - controlled components

<div class="special-02-input-controlled-component--grid">
    <div class="special-02-input-controlled-component--box special-02-input-controlled-component--component"><br>Component</div>
    <div>
        value, disabled, … :<br> projection of state
        <img src="../assets/images/05-input-refs_02-input-controlled-component_arrow-right.svg" />
        <br><br>
        <img src="../assets/images/05-input-refs_02-input-controlled-component_arrow-left.svg" />
        onChange, …
    </div>
    <div class="special-02-input-controlled-component--box special-02-input-controlled-component--dom"><br>DOM<br>(input)</div>
    <div><br>state = { value, disabled, … }</div>
    <div></div>
    <div class="special-02-input-controlled-component--striked"><br>state = { value, disabled, … }</div>

</div>

<br>

**component is the single source of truth**
