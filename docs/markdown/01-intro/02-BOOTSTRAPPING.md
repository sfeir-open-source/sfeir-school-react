<!-- .slide: class="transition-bg-blue-2"-->
# Bootstrapping

##==##

<!-- .slide: class="with-code inconsolata"-->
# Basic bootstrapping

```bash
npx create-vite my-app --template react-swc-ts
```
<!-- .element: class="big-code"-->

<br/><br/>

- **create-vite**: package npm which is a generator (bin in package.json) <br/><br/>
- **swc**: new modern tool for building and bundling <br/><br/>
- **--template**: create-vite cli argument to specify the kind of app you want

##==##

<!-- .slide: class="with-code inconsolata"-->
# Advanced bootstrapping

- Bootstrapper une application Next.JS (server side rendering) <br/><br/>

```bash
npx create-next-app
```
<!-- .element: class="big-code"-->

<br/><br/>

Server side rendering let you  generate a client-side rendering application or universal application into HTML, then
make it interactive by executing the client side Javascript
<!-- .element: class="important" -->

##==##

# What is Vite? What use starter project under the hood? 

Vite is a module bundler like Webpack, Parcel etc. In the context of a React application, it will bundle the application and build it.

Advantages of using vite:
- faster than Webpack
- Server Ready First
- Based on EsModule and all modern Javascript

![full-center h-400](assets/images/intro/vite-logo.png)

##==##

# A little word **Material UI**

- This training and all the workshops use Material UI (Button, Icon)
- This training is not on Material UI, please use it as a black box
- Material UI is not mandatory for your next projects

![h-500 center](assets/images/intro/material-ui.png)
