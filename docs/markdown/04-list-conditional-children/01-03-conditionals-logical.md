<!-- .slide: class="center" -->

# Conditionals

## or a **logical operator** <br /> React ignores false and null

```javascript
const Inbox = ({ messages, unread }) => (
  <div>
    {unread.length > 0 && <header>You have {unread.length} unread messages</header>}
    <main>{messages}</main>
  </div>
);
```
