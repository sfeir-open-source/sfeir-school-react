<!-- .slide: class="two-column" -->

# Children

**children** property is an **opaque structure**

**React.Children** utility can be used to traverse the children "collection"

use **React.cloneElement** if you need to add properties

##--##

<!-- .slide: class="with-code" -->

```typescript [6-8,10]
const Tabs = ({ children }) => {
  const [current, setCurrent] = useState(0);
  return (
    <section>
      <header>
        {React.Children.map(children, (child, i) => (
          <Tab title={child.props.title} onSelect={() => setCurrent(i)} />
        ))}
      </header>
      <main>{React.Children.toArray(children)[current]}</main>
    </section>
  );
};
```

<!-- .element: style="margin-top:200px" -->
