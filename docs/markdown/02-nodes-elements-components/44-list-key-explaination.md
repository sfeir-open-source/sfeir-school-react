<!-- .slide: class="two-column" -->

# Lists

always add the pseudo-prop **"key"** when inserting **element arrays**

key must be **unique in the context of the list** only

key should derive from the displayed entity(the index is useless - why?)

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
        <Message key={message.id} {...message} />
      ))}
    </main>
  </div>
);
```

<!-- .element: class="big-code" style="margin-top:200px" -->
