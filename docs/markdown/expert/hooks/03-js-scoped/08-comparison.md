<!-- .slide: class="two-column" -->
# Comparison
<br/>
## Class

this.state is always the same ref
* `this.state` : _last_ value
* So be careful about race conditions !

##--##

## Hook
Hook use JS scope
* states, props : _current_ rendered value
* Avoid race condition (state is different ref for every render)
