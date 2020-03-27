<!-- .slide: class="two-column-layout" -->

# Lists

##--##

always add the pseudo-prop **"key"** when inserting **element arrays**

key must be **unique in the context of the list** only

key should derive from the displayed entity(the index is useless - why?)

##--##

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
