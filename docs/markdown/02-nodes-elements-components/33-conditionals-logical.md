<!-- .slide: class="with-code" -->

# Conditionals

## or a **logical operator**

```typescript
const Inbox = ({ messages, unread }) => (
  <div>
    {unread.length > 0 && <header>You have {unread.length} unread messages</header>}
    <main>{messages}</main>
  </div>
);
```

<!-- .element: class="big-code" -->

React ignores false and null
