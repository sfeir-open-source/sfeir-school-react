<!-- .slide: class="center" -->

# Rules of Hooks

Only call Hooks at Top level
* Always call all hooks
* Always in the same order
* So no `if`, no `for`

```javascript
function Profile({admin}) {
   // 🚫 WRONG : not all hooks are called
   if(admin) {
     useEffect(() => {
        // Fetch admin-only route
     }, []);
   }

   // ✅ Right : Always call of hook, manage condition in hook
    useEffect(() => { 
       if(admin) {
        // Fetch admin-only route
       }
     }, [admin])
}
```
