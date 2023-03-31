<!-- .slide: class="two-column" -->

# Lists

always add the pseudo-prop **"key"** when inserting **element arrays**

key must be **unique in the context of the list** only

key should derive from the displayed entity(the index is useless - why?)

##--##

<!-- .slide: class="with-code" -->

```javascript
    const Inbox = ({ messages, unread }) => (
      <div>
        {unread.length > 0 &&
          <header>{unread.length} unread</header>
        }
        <main>
          {messages.map(message => (
            <Message {...message} key={message.id} />
          ))}
        </main>
      </div>
    );
```
<!-- .element: style="margin-top:200px" -->
