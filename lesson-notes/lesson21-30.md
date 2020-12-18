# LESSON 21
# Basics of Form Handling
We want React to control the `form` elements, such `form` elements whose value is ***controlled*** by React is called a **Controlled Component**.

We deal with values that change within a component with `state` and `setState`, so in a **controlled component** the value of an input field is set to the `state` property.

**See `Form.js`**

# LESSON 22
# Component Lifecycle Methods
When we create a React Component, the component goes through several stages in its lifecycle. React provides us with build in methods that we can overwrite at particual stages in the lifecycle.

**Lifecycle method available for a class component:**

You can clasify the methods into 4 phases.
1. Mounting
2. Updating
3. Unmounting
4. Error Handling

The **mounting** lifecycle methods are called when an instance of a component is being created and inserted into the DOM.

The **updating** lifecycle methods are called when a component is being re-rendered as a result of changes to either its props or state.

The **unmounting** lifecycle methods is called when a component is being removed from the DOM.

The **error handling** methods are called when there is an error during rendering, in a lifecycle method, or in the constructor of any child component.

During the **mounting** phase you have 4 methods, ***constructor***, ***static getDerivedStateFromProps***, ***render*** and ***componentDidMount***.

During the **updating** phase you have 5 methods, ***static getDerivedStateFromProps***, ***shouldComponentUpdate***, ***render***, ***getSnapshotBeforeUpdate*** and ***componentDidUpdate***.

During the **unmounting** phase you have 1 method, ***componentWillUnmount***.

For **error handling** phase you have 2 methods, ***static getDerivedStateFromError*** and ***componentDidCatch***.

Knowing **when** to use **each** lifecycle method is crucial to properly understanding how to work with React.

**Obs!** These methods do **not** exist on a **functional component**.

# LESSON 23
# Component Mounting Lifecycle Methods
Order of their invocation:
1. Constructor(props)

A special function that will get called whenever a new component is created. The constructor is used to initialize the `state` or binding the event handlers to the class instance. In a constructor do **not** cause side effects, for example http requests (ajax calls), **never** do that. In your constructor you have to keep 2 important points to keep in mind when it comes to defining your own constructor. 

The **1st** point is that you have to call a special function called `super(props)`, this will call the base class constructor. In the component you have access to `this.props` only after you have initially called `super(props)` and passing the `props` as an argument. The **2nd** point is that constructor is also the only place where you are expected to change or set the `state` by directly overwriting `this.state` fields, in all other scenarios you **have** to use `this.setState`.

2. static getDerivedStateFromProps(props, state)

Is in the React docs classified as a rarly used method, this method is basically used when the state of the component depends on changes in props over time. Let's say you have a component with the initial state of the component depend on the props being passed to the component, in such a scenario you can use this method to set the state.

Since this method is a `static` method it does not have access to the `this` keyword, so you can not call `this.setState` within this particular method. Instead you have to return an object that represents the new state of the component. Do not cause side effects, as stated above in the constructor part too.

3. render()

The `render()` method is the only required method in a class component, in the `render()` you simply read `this.props` and `this.state` and return the jsx which describes the UI. The `render()` is a pure function, for the given props and state, it should always render the same UI. What you should **not** do here is change the state or interact with DOM or make ajax calls.

Since it is the render method jsx, which also contains the other children components, right after the parent render method the children components lifecycle methods are also executed.

4. componentDidMount()

This method will be called **only** once in the whole lifecycle of a given component and it is invoked immediately after a component and all its children components have been rendered to the DOM.

This method is the **perfect** place to cause side effects, for example interacting with the DOM or perform any ajax calls to load data. So `componentDidMount()` is a good place to perform initialization that requires DOM nodes and also load data by making network requests.

**See `LifecycleA.js`** and **`LifecycleB.js`**.

