<!-- .slide: class="two-column" -->
<style>
.reveal .root {
   display: flex;
   justify-content: flex-end;
}
.reveal .root .column {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.reveal .root .column > * {
   height: 100%;
   padding: 16px;
   height: 150px
}

.reveal .root .array {
   border: 2px solid black;
   background-color: lightgrey;
   text-align:center;
}
.reveal .root .array >*:not(:last-child) {
    border-bottom: 2px solid black;
}
.reveal  .buggy {
   color: red;
}
</style>

# Hooks : not Magic, just Arrays

```javascript
function BadHook() {
   const [counter, setCounter] = useState(0);

   if(count % 2 === 0) {
       // 🚫 WRONG : Not all hooks called
      const [name, setName] = useState('John');
   }

   const [age, setAge] = useState(42);

   const handleClick = () => {
      setCounter(counter => counter + 1);
   }

   return (
      <>
      {`Hi ${name}, ${age} years old`}<br/>
      <button onClick={handleClick}>
         {`clicked ${counter} times`}
         </button>
      </>
   )
}
```

##--##
<div class="root mt-200">
   <div class="column">
      <div>0</div>
      <div>1</div>
      <div>2</div>
   </div>
   <div class="column array">
      <div>0</div>
      <div>'John'</div>
      <div>42</div>
   </div>
   <div class="column">
      <div>
         <b>counter</b><br/>
         <i>counter = 0</i>
      </div>
      <div>
         <b>name</b><br/>
         <i>name = 'John'</i>
      </div>
      <div>
         <b>age</b><br/>
         <i>age = 42</i>
      </div>
   </div>
</div>

##==##

<!-- .slide: class="two-column" -->
# Hooks : not Magic, just Arrays

```javascript
function BadHook() {
   const [counter, setCounter] = useState(0);

   if(count % 2 === 0) {
       // 🚫 WRONG : Not all hooks called
      const [name, setName] = useState('John');
   }

   const [age, setAge] = useState(42);

   const handleClick = () => {
      setCounter(counter => counter + 1);
   }

   return (
      <>
      {`Hi ${name}, ${age} years old`}<br/>
      <button onClick={handleClick}>
         {`clicked ${counter} times`}
         </button>
      </>
   )
}
```

##--##

<div class="root mt-200">
   <div class="column">
      <div>0</div>
      <div>1</div>
      <div>2</div>
   </div>
   <div class="column array">
      <div>1</div>
      <div>'John'</div>
      <div>42</div>
   </div>
   <div class="column">
      <div>
         <b>counter</b><br/>
         <i>counter = 1</i>
      </div>
      <div>
         <b>age</b><br/>
         <i class="buggy">age = 'John'</i>
      </div>
      <div>
      </div>
   </div>
</div>

<div class="fragment fade-in buggy" style="margin-top:0">
Rendered fewer hooks than expected. This may be caused by an accidental early return statement.
</div>
