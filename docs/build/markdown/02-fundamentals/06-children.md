<!-- .slide: class="two-column-layout" -->

# Composition - children 

##--##

<div class="center" style="margin-bottom: 40px;">
  components receive their "children" <br />
  as property children
</div>


```html
    <Container>
      <Row>
        <Col md="4">
          <nav>...</nav>
          <aside>...</aside>
        </Col>
        <Col md="8">
          <main>...</main>
          <section>...</section>
        </Col>
      </Row>
    </Container>
```

##--##

<div style="margin-bottom: 100px;"></div>

```javascript
    const Container = (props) => (
      <div className="container">
        {props.children}
      </div>
    );
    
    const Row = (props) => (
      <div className="row">
        {props.children}
      </div>
    );
    
    const Col = (props) => (
      ...
    );
```


##==##


<!-- .slide: class="two-column-layout" -->

# Composition - children 

##--##

<div class="center" style="margin-bottom: 40px;">
  ...but they might as well get <br/> components via attributes
</div>

```html
    <MyNav
      left={<img src={logoUrl} />}
      right={
        <ul>
          <li><a href="...">...</a></li>
          <li><a href="...">...</a></li>
        </ul>
      }
    />
```

##--##

<div class="center" style="margin-bottom: 40px;">
  remember: you are manipulating <br /> JavaScript expressions
</div>

```javascript
    const MyNav = (props) => (
      <nav>
        <div className="pull-left">
          {props.left}
        </div>
        <div className="pull-right">
          {props.right}
        </div>
      </nav>
    );
```
