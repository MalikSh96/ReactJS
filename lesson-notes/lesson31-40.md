# LESSON 31
# Portals
React **portals** provides a way to render children into a DOM node that exists outside the DOM hierachy of the parent component.

The react portals provides the ability to break out of the "***main***" DOM node (for example `root` node element). So you can render a component unto a DOM node that is **NOT** under that `root` element.

**public/index.html** line 32
```
<div id="portal-root"></div>
```

Why of the use cases for using portals is having to deal with parent components css, when that child component is a modal, pop-up or a tool-tip.

Check out [this](https://codesandbox.io/s/00254q4n6p) example.

What you should know about portals is, even though portals can be anywhere in the DOM tree, it behaves like a normal React child in every other way. This includes ***event-bubbling***. So an event fired from inside the portal will propagate to ancestors in the ***containing*** React tree, even if those elements are **not** ancestors in the DOM tree.

Check out also [this](https://codepen.io/gaearon/pen/jGBWpE) example.

**See `PortalDemo.js`**

# LESSON 32
# Error Boundary
The error handling phase inclues 2 lifecycle methods.
1. `static getDerivedStateFromError(error)`
2. `componentDidCatch(error, info)`

An **Error Boundary** is a class component that implements either one or both of the lifecycle methods `static getDerivedStateFromError` or `componentDidCatch` becomes an **error boundary**.

`static getDerivedStateFromError` method is used to render a fallback UI after an error is thrown and the `componentDidCatch` method is used to log the error information.

**Error Boundary** will catch the error and display a fallback UI.

Error boundaries catch errors during rendering, in lifecycle methods and in the constructors of the whole tree below them. However they do not catch errors inside event handlers, if you have an onclick handler and want to catch an error you just need to use the reguler `try-catch` statements and not `ErrorBoundaries`.

**All in all** error boundaries are React components that catch JavaScript error in their child component tree, log those errors, and display a fallback UI.
A class component becomes an error boundary by defining either or both of the `static getDerivedStateFromError` and `componentDidCatch` lifecycle methods.
The placement of the error boundary also matters as it controls if the entire app should have the fallback UI or just the component causing the problem.
Error boundaries basically provides a way to gracefully handle error in the application code.

**See `ErrorBoundary.js` and `Hero.js`**

# LESSON 33
# Higher Order Components, part 1
There is a need to share common functionality between components without repeating code, and that is where the concept of **higher order components** comes into the picture.

**See upcoming lesson(s), `ClickCounter.js` and `HoverCounter.js`**