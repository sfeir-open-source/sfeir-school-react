<!-- .slide: class="center" -->

# Conditionals

## or the **ternary operator** (it's an expression!)

```javascript
    const Inbox = ({ messages, unread }) => (
      <div>
        {unread.length > 0 ? (
          <header>You have {unread.length} unread messages</header>
        ) : (
          <header>Nothing new for now</header>
        )}
        <main>
          {messages}
        </main>
      </div>
    );
```
