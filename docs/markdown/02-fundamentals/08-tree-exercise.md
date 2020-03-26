<!-- .slide: class="center" -->

# Exercise 2: component tree

## divide et impera


* decompose the PersonCard component
    * provide randomPerson as property
    * replace static information with person properties

* reuse Card modified to accept children
    * define in Card.js sub-components of a Card : (Image, Title, Info)
    * use those sub-components in PersonCard
    * there should not remain any style information left in Person
