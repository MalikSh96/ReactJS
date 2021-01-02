# LESSON 31
# Portals
React **portals** provides a way to render children into a DOM node that exists outside the DOM hierachy of the parent component.

The react portals provides the ability to break out of the "***main***" DOM node (for example `root` node element). So you can render a component unto a DOM node that is **NOT** under that `root` element.

**public/index.html** line 32
```
<div id="portal-root"></div>
```

Why of the use cases for using portals is having to deal with parent components css, when that child component is a modal, pop-up or a tool-tip.

Check out [this(https://codesandbox.io/s/00254q4n6p) example.

What you should know about portals is, even though portals can be anywhere in the DOM tree, it behaves like a normal React child in every other way. This includes ***event-bubbling***. So an event fired from inside the portal will propagate to ancestors in the ***containing*** React tree, even if those elements are **not** ancestors in the DOM tree.

Check out also [this(https://codepen.io/gaearon/pen/jGBWpE) example.