<!-- .slide: class="two-column" -->

# Lists

same for lists

JSX accepts **arrays of elements**

the rest is (functional) JavaScript

##--##

<!-- .slide: class="with-code" -->

```typescript [7-9]
const Inbox = ({ messages, unread }) => (
  <div>
    {unread.length > 0 && ( //
      <header>{unread.length} unread</header>
    )}
    <main>
      {messages.map((message) => (
        <Message {...message} />
      ))}
    </main>
  </div>
);
```

<!-- .element: class="big-code" style="margin-top:200px" -->
