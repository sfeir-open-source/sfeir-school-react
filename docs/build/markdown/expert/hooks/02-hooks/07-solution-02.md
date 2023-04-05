<!-- .slide: class="center" -->

# Exercise 02 : Autoplay
## Solution ?

With `setTimeout` :
* call `setTimeout` every 3 seconds
* call `clearTimeout` every 3 seconds

__This works but does consume CPU-time !__

With `setInterval` :
* Called too often ?
* Watch dependencies : 
  * handleNext changes on every render !
