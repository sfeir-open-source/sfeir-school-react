<!-- .slide: class="with-code" -->
# Say Hello to the World

Index.html
```html [4-6]
<html>
    <head>...</head>
    <body>
        <div>
            Hello World
        </div>
    </body>
</html>
```

##==##
<!-- .slide: class="with-code" -->
# Say Hello to the World

Index.html
```html [4-8]
<html>
    <head>...</head>
    <body>
        <div id="root"></div>
        <script>
            const root = document.getElementById('root');
            root.innerHTML = "Hello World";
        </script>
    </body>
</html>
```

##==##
<!-- .slide: class="with-code" -->
# Say Hello to the World

Index.html
```html [5-9]
<html>
    <head>...</head>
    <body>
        <div id="root"></div>
        <script>
            const root = ReactDOM.createRoot(document.getElementById('root'));
            root.render("Hello World");
        </script>
    </body>
</html>
```

##==##
<!-- .slide: class="with-code" -->
# Say Hello to the World

Index.html
```html [5]
<html>
    <head>...</head>
    <body>
        <div id="root"></div>
        <script type="text/babel" src="settings.js"></script>
    </body>
</html>
```

settings.js
```javascript []
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render("Hello World");
```