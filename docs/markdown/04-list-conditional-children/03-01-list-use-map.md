<!-- .slide: class="two-column-layout" -->

# Lists

##--##

same for lists

JSX accepts **arrays of elements**

the rest is (functional) JavaScript

##--##

```javascript
    const Inbox = ({ messages, unread }) => (
      <div>
        {unread.length > 0 &&
          <header>{unread.length} unread</header>
        }
        <main>
          {messages.map(message => (
            <Message {...message} />
          ))}
        </main>
      </div>
    );
```
